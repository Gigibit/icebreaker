function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-localized-users-localized-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesLocalizedUsersLocalizedUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    \n    <ion-buttons slot=\"end\"  (click)=\"location.back()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <div class=\"none-found-lbl\" *ngIf=\"!localizedUsers || localizedUsers.length <= 0\">\n    {{ 'no_localized_users_were_found' | translate }}\n  </div>\n  \n  <ion-grid *ngIf=\"localizedUsers && localizedUsers.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button fill=\"clear\" [class.compose]=\"compose\" class=\"compose-btn\" (click)=\"compose = !compose\">\n          <ion-label>{{ 'coffee_group' | translate }}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [class.compose]=\"compose\" class=\"localized-user-col\" size=\"6\" *ngFor=\"let localizedUser of localizedUsers\">\n        <ion-card class=\"white localized-user-card\" (click)=\"onLocalizedUserTap($event, localizedUser)\">\n          <span *ngIf=\"isOnline(localizedUser)\" class=\"online-badge\"></span>\n          <img class=\"localized-user-img\" \n          onError=\"this.src='../../assets/imgs/user.svg';\" \n          [src]=\"localizedUser.user.profileImg\">\n          <div class=\"localized-user-img-shadow-layer\"></div>\n          <div class=\"card-title localized-user-info localized-user-name\">\n            <p class=\"name-lbl\">{{localizedUser.user.name}}, {{localizedUser.user.age}}</p>\n            <p class=\"distance-lbl\">{{distanceFromUser(localizedUser)}}</p>\n          </div>\n          \n          <!-- <div class=\"card-subtitle localized-user-info localized-user-age\"></div> -->\n        </ion-card>\n      </ion-col>                                                                                                                                                                                                                                                                                          \n      \n    </ion-row>\n  </ion-grid>\n  <ion-button [class.compose]=\"compose\" class=\"multiple-invitation-btn\" (click)=\"invite()\">\n    <ion-icon name=\"cafe\"></ion-icon>\n  </ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/_pages/localized-users/localized-users.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_pages/localized-users/localized-users.module.ts ***!
    \******************************************************************/

  /*! exports provided: LocalizedUsersPageModule */

  /***/
  function srcApp_pagesLocalizedUsersLocalizedUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizedUsersPageModule", function () {
      return LocalizedUsersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_pages/localized-users/localized-users.page */
    "./src/app/_pages/localized-users/localized-users.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__["LocalizedUsersComponent"]
    }];

    var LocalizedUsersPageModule = function LocalizedUsersPageModule() {
      _classCallCheck(this, LocalizedUsersPageModule);
    };

    LocalizedUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [src_app_pages_localized_users_localized_users_page__WEBPACK_IMPORTED_MODULE_6__["LocalizedUsersComponent"]]
    })], LocalizedUsersPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/localized-users/localized-users.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/_pages/localized-users/localized-users.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesLocalizedUsersLocalizedUsersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".localized-user-img {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  margin: 0 auto;\n  z-index: 7;\n}\n\n.localized-user-card {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: auto;\n}\n\n.localized-user-img-shadow-layer {\n  width: 100%;\n  height: 30%;\n  z-index: 8;\n  position: absolute;\n  bottom: 0;\n  opacity: 0.8;\n  background: linear-gradient(to top, #020202, transparent);\n  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.8);\n  transition: height 0.5s ease-in-out;\n}\n\n.localized-user-info {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  position: absolute;\n  text-shadow: 0px 5px 10px #000;\n  bottom: 0;\n  padding: 15px;\n  text-align: center;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  color: #fff;\n}\n\n.none-found-lbl {\n  text-align: center;\n}\n\n.localized-user-name {\n  font-size: 15px;\n}\n\n.online-badge {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n}\n\n.multiple-invitation-btn {\n  z-index: 99999999;\n  --border-radius: 50%;\n  position: fixed;\n  bottom: 25px;\n  width: 0px;\n  height: 0px;\n  left: 0;\n  right: 0;\n  font-size: 0px;\n  margin: 0 auto;\n  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out;\n}\n\n.compose-btn {\n  --background: transparent;\n  --color: #222;\n  margin: 0 auto;\n  border: 1px solid;\n  display: block;\n}\n\n.name-lbl {\n  margin: 0;\n  font-size: 17px;\n}\n\n.distance-lbl {\n  margin: 0;\n  font-size: 14px;\n}\n\n.compose.compose-btn {\n  font-weight: bold;\n  --background: #956f5a;\n  --color: #fff;\n}\n\n.compose .card-selected .localized-user-img-shadow-layer {\n  background: linear-gradient(to top, #f5ece1, transparent);\n  height: 100%;\n  opacity: 1;\n}\n\n.compose.multiple-invitation-btn {\n  width: 100px;\n  height: 100px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmNoaW1lZGlhL3Byb2plY3RzL2tva2lmeS9pY2VicmVha2VyL2NsaWVudC9rb2ZpZnkva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2xvY2FsaXplZC11c2Vycy9sb2NhbGl6ZWQtdXNlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9fcGFnZXMvbG9jYWxpemVkLXVzZXJzL2xvY2FsaXplZC11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtFQUNBLGlEQUFBO0VBQ0EsbUNBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUVBLGNBQUE7RUFJQSx1RkFBQTtBQ0lKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkk7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ09SOztBRERRO0VBQ0kseURBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0daOztBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9fcGFnZXMvbG9jYWxpemVkLXVzZXJzL2xvY2FsaXplZC11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDc7XG59XG4ubG9jYWxpemVkLXVzZXItY2FyZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG59XG4ubG9jYWxpemVkLXVzZXItaW1nLXNoYWRvdy1sYXllcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB6LWluZGV4OiA4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAyMDIwMiwgdHJhbnNwYXJlbnQpOyBcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IC01cHggcmdiYSgwLDAsMCwuOCk7IFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9jYWxpemVkLXVzZXItaW5mb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtc2hhZG93OiAwcHggNXB4IDEwcHggIzAwMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLm5vbmUtZm91bmQtbGJse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhbGl6ZWQtdXNlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm9ubGluZS1iYWRnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICByaWdodDogNSU7XG59XG4ubXVsdGlwbGUtaW52aXRhdGlvbi1idG57XG4gICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb21wb3NlLWJ0bntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyMjI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubmFtZS1sYmx7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5kaXN0YW5jZS1sYmx7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jb21wb3NlIHtcbiAgICAmLmNvbXBvc2UtYnRue1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTU2ZjVhO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zZWxlY3RlZHsgXG4gICAgICAgIC8vIC5sb2NhbGl6ZWQtdXNlci1uYW1le1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAyNHB4OyAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIC5sb2NhbGl6ZWQtdXNlci1pbWctc2hhZG93LWxheWVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y1ZWNlMSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm11bHRpcGxlLWludml0YXRpb24tYnRue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5cblxuIiwiLmxvY2FsaXplZC11c2VyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiA3O1xufVxuXG4ubG9jYWxpemVkLXVzZXItY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvY2FsaXplZC11c2VyLWltZy1zaGFkb3ctbGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHotaW5kZXg6IDg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwLjg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMjAyMDIsIHRyYW5zcGFyZW50KTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCA1cHggMTBweCAjMDAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm9uZS1mb3VuZC1sYmwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ub25saW5lLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG59XG5cbi5tdWx0aXBsZS1pbnZpdGF0aW9uLWJ0biB7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29tcG9zZS1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjMjIyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmFtZS1sYmwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmRpc3RhbmNlLWxibCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29tcG9zZS5jb21wb3NlLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLWJhY2tncm91bmQ6ICM5NTZmNWE7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4uY29tcG9zZSAuY2FyZC1zZWxlY3RlZCAubG9jYWxpemVkLXVzZXItaW1nLXNoYWRvdy1sYXllciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmNWVjZTEsIHRyYW5zcGFyZW50KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbXBvc2UubXVsdGlwbGUtaW52aXRhdGlvbi1idG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_pages/localized-users/localized-users.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/_pages/localized-users/localized-users.page.ts ***!
    \****************************************************************/

  /*! exports provided: LocalizedUsersComponent */

  /***/
  function srcApp_pagesLocalizedUsersLocalizedUsersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizedUsersComponent", function () {
      return LocalizedUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/coffe.service */
    "./src/app/_services/coffe.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_utils/functions */
    "./src/app/_utils/functions.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");

    var LocalizedUsersComponent =
    /*#__PURE__*/
    function () {
      function LocalizedUsersComponent(location, coffeeService, modalCtrl, toastService, router) {
        _classCallCheck(this, LocalizedUsersComponent);

        this.location = location;
        this.coffeeService = coffeeService;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.router = router;
        this.invitationIds = [];
        this.compose = false;
      }

      _createClass(LocalizedUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localizedUsers = this.coffeeService.localizedUsers;
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        } // invite(user: LocalizedUser){
        //   this.coffeeService
        //       .sendInvitation([user.user.id])
        //       .subscribe(response=>{
        //         this.toastService.alert( INVITATION_SENT )
        //       })
        // }
        // chatWith(user:LocalizedUser){
        //   this.chatService
        //   .findOrCreate([user.user.id])
        //   .subscribe(data=>{
        //     let chat = ChatMapper.fromJson(data['chat'])
        //     this.chatService.setActiveChat(chat)
        //     this.router.navigate(['/chat', chat.id]).then( e => this.modalCtrl.dismiss())
        //   })
        // }

      }, {
        key: "isOnline",
        value: function isOnline(localizedUser) {
          return Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["isOnline"])(localizedUser.user.lastSeen);
        }
      }, {
        key: "onLocalizedUserTap",
        value: function onLocalizedUserTap($event, localizedUser) {
          if (this.compose) {
            this.add($event, localizedUser);
          } else {
            this.viewProfile(localizedUser);
          }
        }
      }, {
        key: "viewProfile",
        value: function viewProfile(localizedUser) {
          this.router.navigate(['view-profile', localizedUser.user.id]);
        }
      }, {
        key: "invite",
        value: function invite() {
          var _this = this;

          this.coffeeService.sendInvitation(this.invitationIds).subscribe(function (response) {
            _this.toastService.alert('invitation_sent');

            var lights = document.getElementsByClassName("card-selected");

            while (lights.length) {
              lights[0].classList.remove("card-selected");
            }

            _this.compose = false;
          });
        }
      }, {
        key: "distanceFromUser",
        value: function distanceFromUser(localizedUser) {
          return Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["getFormattedDistance"])(localizedUser.distance);
        }
      }, {
        key: "add",
        value: function add($event, localizedUser) {
          $event.preventDefault();
          var element = $event.target.parentElement;

          if (element.classList.contains('localized-user-card')) {
            if (element.classList.contains('card-selected')) {
              element.classList.remove('card-selected');
              this.invitationIds = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["removeObjectFromArray"])(this.invitationIds, localizedUser.user.id);
            } else {
              element.classList.add('card-selected');
              this.invitationIds.push(localizedUser.user.id);
            }
          }
        }
      }]);

      return LocalizedUsersComponent;
    }();

    LocalizedUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LocalizedUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-localized-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./localized-users.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/localized-users/localized-users.page.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadein', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 1
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slidelefttitle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        opacity: 0,
        transform: 'translateX(150%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('900ms 300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        transform: 'translateX(0%)',
        opacity: 1
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./localized-users.page.scss */
      "./src/app/_pages/localized-users/localized-users.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LocalizedUsersComponent);
    /***/
  }
}]); //# sourceMappingURL=_pages-localized-users-localized-users-module-es2015.js.map
//# sourceMappingURL=_pages-localized-users-localized-users-module-es5.js.map