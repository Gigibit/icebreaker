import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
var LocalizedUsersComponent = /** @class */ (function () {
    function LocalizedUsersComponent(modalCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
    }
    LocalizedUsersComponent.prototype.ngOnInit = function () {
        this.localizedUsers = this.navParams.get('localizedUsers');
        console.log(this.localizedUsers);
    };
    LocalizedUsersComponent.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    LocalizedUsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-localized-users',
            templateUrl: './localized-users.component.html',
            styleUrls: ['./localized-users.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            NavParams])
    ], LocalizedUsersComponent);
    return LocalizedUsersComponent;
}());
export { LocalizedUsersComponent };
//# sourceMappingURL=localized-users.component.js.map