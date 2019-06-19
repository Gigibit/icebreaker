import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
var SOMETHING_WENT_WRONG = 'something_went_wrong';
var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl, translateService) {
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
    }
    ToastService.prototype.somethingWentWrong = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.toastError(SOMETHING_WENT_WRONG);
                return [2 /*return*/];
            });
        });
    };
    ToastService.prototype.toastError = function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var messageObservable, message, toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageObservable = this.getStringObservableFromKey(key);
                        return [4 /*yield*/, messageObservable.toPromise()];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: message,
                                duration: 3000,
                                position: 'top'
                            })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.getStringObservableFromKey = function (key) {
        return this.translateService.get(key);
    };
    ToastService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            TranslateService])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=toast.service.js.map