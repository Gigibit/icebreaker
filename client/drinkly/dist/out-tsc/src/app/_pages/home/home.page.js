import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { CoffeeService } from '../../_services/coffe.service';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { joinWithCommaOrEmpty } from '../../_utils/functions';
import { LocalizedUserMapper } from '../../_models/user';
import { ToastService } from '../../_services/toast.service';
import { Router } from '@angular/router';
import { LocalizedUsersComponent } from '../../_components/localized-users/localized-users.component';
var USE_OWN_LOCATION = 'useMyPosition';
var USE_OWN_LANGUAGE = 'useMyLanguage';
// for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
var HomePage = /** @class */ (function () {
    function HomePage(modalController, coffeeService, userService, geolocation, popoverController, ngZone, router, authService, toastService, loadingCtrl, nativeGeocoder) {
        this.modalController = modalController;
        this.coffeeService = coffeeService;
        this.userService = userService;
        this.geolocation = geolocation;
        this.popoverController = popoverController;
        this.ngZone = ngZone;
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.loadingCtrl = loadingCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.filterSelectOptions = {
            header: 'filter',
        };
        this.filter = [USE_OWN_LOCATION, USE_OWN_LANGUAGE];
        this.flipped = false;
        this.useMyPosition = true;
        this.useMyLanguage = true;
        this.maxDistance = 5000;
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.getGeolocation();
    }
    HomePage.prototype.flipIt = function () {
        this.flipped = !this.flipped;
        if (this.flipped)
            this.findClosestUsers();
    };
    HomePage.prototype.profile = function () {
        this.router.navigate(['user-profile']);
    };
    HomePage.prototype.ngOnInit = function () {
        this.authService.userInfo().subscribe(function (data) {
            console.log(data);
        });
        if (this.authService.currentUserValue) {
            this.userImg = this.authService.currentUserValue.profileImg;
            console.log(this.authService.currentUserValue);
        }
    };
    //Get current coordinates of device
    HomePage.prototype.getGeolocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.geolocation.getCurrentPosition().then(function (resp) {
                    _this.useMyPosition = true;
                    _this.geoLatitude = resp.coords.latitude;
                    _this.geoLongitude = resp.coords.longitude;
                    _this.geoAccuracy = resp.coords.accuracy;
                    _this.getGeoencoder(_this.geoLatitude, _this.geoLongitude);
                }).catch(function (error) {
                    _this.useMyPosition = false;
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    //geocoder method to fetch address from coordinates passed as arguments
    HomePage.prototype.getGeoencoder = function (latitude, longitude) {
        var _this = this;
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then(function (result) {
            _this.geoAddress = joinWithCommaOrEmpty(/* result[0].thoroughfare,*/ result[0].locality, result[0].subLocality, /* result[0].administrativeArea ,*/ result[0].countryName);
            _this.userService.updateAddress(_this.geoAddress, latitude, longitude).subscribe();
        })
            .catch(function (error) {
            console.log(error);
            _this.userService.updateAddress(null, latitude, longitude).subscribe();
        });
    };
    HomePage.prototype.onUseMyPositionStatusChanged = function () {
        this.geoLatitude = null;
        this.geoLongitude = null;
        if (this.useMyPosition) {
            this.getGeolocation();
        }
        else if (this.lastSelectedZone) {
            this.geoLatitude = Number.parseFloat(this.lastSelectedZone.y);
            this.geoLongitude = Number.parseFloat(this.lastSelectedZone.x);
        }
    };
    HomePage.prototype.onFilterChanged = function () {
        var useMyPosition = this.filter.indexOf(USE_OWN_LOCATION) != -1;
        this.useMyLanguage = this.filter.indexOf(USE_OWN_LANGUAGE) != -1;
        if (useMyPosition != this.useMyPosition) {
            this.useMyPosition = useMyPosition;
            this.onUseMyPositionStatusChanged();
        }
    };
    HomePage.prototype.onZoneSelected = function (zone) {
        this.lastSelectedZone = zone;
        this.geoLatitude = Number.parseFloat(zone.y);
        this.geoLongitude = Number.parseFloat(zone.x);
    };
    //Return Comma saperated address
    HomePage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    };
    HomePage.prototype.findClosestUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance)
                            .subscribe(function (response) {
                            console.log(_this.geoLatitude, _this.geoLongitude);
                            loader.dismiss();
                            _this.localizedUsers = LocalizedUserMapper.fromJsonArray(response['users']);
                            console.log(_this.localizedUsers);
                        }, function (error) {
                            console.log(error);
                            _this.toastService.somethingWentWrong();
                            loader.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openLocalizedUsersModal = function () {
        console.log(this.localizedUsers);
        this.modalController.create({
            component: LocalizedUsersComponent,
            componentProps: {
                localizedUsers: this.localizedUsers
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    HomePage.prototype.onRangeChanged = function () {
        this.getGeolocation();
    };
    HomePage.prototype.load = function () {
        return this.loadingCtrl.create({
            spinner: null,
            message: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading'
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            CoffeeService,
            UserService,
            Geolocation,
            PopoverController,
            NgZone,
            Router,
            AuthService,
            ToastService,
            LoadingController,
            NativeGeocoder])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map