import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Location } from '@angular/common';
import { languages, getLanguageByPrefix } from '../../_datasources/languages';
import { IonSelect } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(translateService, authService, location) {
        var _this = this;
        this.translateService = translateService;
        this.authService = authService;
        this.location = location;
        this.languages = languages;
        translateService.get(getLanguageByPrefix(this.translateService.getBrowserLang()))
            .subscribe(function (result) { return _this.language = result; });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        this.authService
            .register(form.value)
            .subscribe(function (data) {
            _this.location.back();
        });
    };
    tslib_1.__decorate([
        ViewChild('languageSelect'),
        tslib_1.__metadata("design:type", IonSelect)
    ], RegisterPage.prototype, "selectRef", void 0);
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService,
            AuthService,
            Location])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map