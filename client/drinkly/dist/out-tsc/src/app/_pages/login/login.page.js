import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { LoginType } from '../../_models/user';
import { ToastService } from '../../_services/toast.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(alertService, authService, fb, nativeStorage, loadingController, route, toastService, alertController, router) {
        this.alertService = alertService;
        this.authService = authService;
        this.fb = fb;
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.route = route;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.showError = false;
        this.FB_APP_ID = 2314645505268736;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.authService.logout();
        // this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginPage.prototype.login = function (form) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        this.authService
                            .nativeLogin(form.value['email'], form.value['password'])
                            // .pipe(concatMap( _ => this.authService.userInfo()))
                            .subscribe(function (token) {
                            console.log(token);
                            _this.router.navigate([_this.returnUrl]);
                            loading.dismiss();
                        }, function (error) {
                            console.log(error);
                            _this.toastService.somethingWentWrong();
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.doFbLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, permissions;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.presentLoading(loading);
                        permissions = ["public_profile", "email"];
                        this.fb.login(permissions)
                            .then(function (response) {
                            var userId = response.authResponse.userID;
                            //Getting name and gender properties
                            _this.fb.api("/me?fields=name,email", permissions)
                                .then(function (_user) {
                                var user = {
                                    name: _user.name,
                                    profileImg: "https://graph.facebook.com/" + userId + "/picture?type=large",
                                    loginType: LoginType.FACEBOOK,
                                    token: response.authResponse.accessToken
                                };
                                //now we have the users info, let's save it in the NativeStorage
                                _this.authService.facebookLogin(response.authResponse.accessToken)
                                    // .pipe(concatMap( _ => this.authService.userInfo()))
                                    .subscribe(function (token) {
                                    console.log(token);
                                    _this.router.navigate([_this.returnUrl]);
                                    loading.dismiss();
                                }, function (error) {
                                    console.log(error);
                                    _this.toastService.somethingWentWrong();
                                    loading.dismiss();
                                });
                            });
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function (loading) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loading.present()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        validate,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LoginPage.prototype, "ngOnInit", null);
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService,
            AuthService,
            Facebook,
            NativeStorage,
            LoadingController,
            ActivatedRoute,
            ToastService,
            AlertController,
            Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
function validate(target, propertyName, descriptor) {
    var method = descriptor.value;
    console.log(descriptor.value);
    descriptor.value = function () {
        // let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        // if (requiredParameters) {
        // 	for (let parameterIndex of requiredParameters) {
        // 		if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
        // 			throw new Error("Missing required argument.");
        // 		}
        // 	}
        // }
        return method.apply(this, arguments);
    };
}
//# sourceMappingURL=login.page.js.map