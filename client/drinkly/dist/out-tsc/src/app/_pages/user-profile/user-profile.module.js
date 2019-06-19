import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserProfilePage } from './user-profile.page';
import { TranslateModule } from '@ngx-translate/core';
var routes = [
    {
        path: '',
        component: UserProfilePage
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TranslateModule.forChild(),
                RouterModule.forChild(routes)
            ],
            declarations: [UserProfilePage]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());
export { UserProfilePageModule };
//# sourceMappingURL=user-profile.module.js.map