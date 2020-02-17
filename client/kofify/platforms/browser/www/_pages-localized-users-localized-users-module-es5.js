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


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"filter()\">\n      <ion-icon name=\"ios-options\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"none-found-lbl\" *ngIf=\"!localizedUsers || localizedUsers.length <= 0\">\n    {{ 'no_localized_users_were_found' | translate }}\n  </div>\n  \n  <ion-grid *ngIf=\"localizedUsers && localizedUsers.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button fill=\"clear\" [class.compose]=\"compose\" class=\"compose-btn\" (click)=\"compose = !compose\">\n          <ion-label>{{ 'coffee_group' | translate }}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-grid>\n        <ion-row>\n          <ion-col [class.compose]=\"compose\" class=\"localized-user-col\" size=\"6\" *ngFor=\"let localizedUser of localizedUsers\">\n            <ion-card style=\"--background: black\" class=\"white localized-user-card\" (click)=\"onLocalizedUserTap($event, localizedUser)\">\n              <span *ngIf=\"isOnline(localizedUser)\" class=\"online-badge\"></span>\n              <img \n              (load)=\"loadImg($event)\" \n              src=\"{{localizedUser.user.profileImg}}\" />\n              <div class=\"localized-user-img-shadow-layer\"></div>\n              <div class=\"card-title localized-user-info localized-user-name\">\n                <p class=\"name-lbl\">{{localizedUser.user.name}}, {{localizedUser.user.age}}</p>\n                <p class=\"distance-lbl\">{{distanceFromUser(localizedUser)}}</p>\n              </div>\n              \n              <!-- <div class=\"card-subtitle localized-user-info localized-user-age\"></div> -->\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-button [class.compose]=\"compose\" class=\"multiple-invitation-btn\" (click)=\"invite()\">\n    <ion-icon name=\"cafe\"></ion-icon>\n  </ion-button>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".localized-user-img {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  margin: 0 auto;\n  z-index: 7; }\n\n.localized-user-card {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: auto; }\n\n.localized-user-img-shadow-layer {\n  width: 100%;\n  height: 30%;\n  z-index: 8;\n  position: absolute;\n  bottom: 0;\n  opacity: 0.8;\n  background: -webkit-gradient(linear, left bottom, left top, from(#020202), to(transparent));\n  background: linear-gradient(to top, #020202, transparent);\n  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.8);\n  -webkit-transition: height 0.5s ease-in-out;\n  transition: height 0.5s ease-in-out; }\n\n.localized-user-info {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  position: absolute;\n  text-shadow: 0px 5px 10px #000;\n  bottom: 0;\n  padding: 15px;\n  text-align: center;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  color: #fff; }\n\n.none-found-lbl {\n  text-align: center; }\n\n.localized-user-name {\n  font-size: 15px; }\n\n.online-badge {\n  position: absolute;\n  top: 5%;\n  right: 5%; }\n\nion-content {\n  margin-bottom: 30px; }\n\n.multiple-invitation-btn {\n  z-index: 99999999;\n  --border-radius: 50%;\n  position: fixed;\n  bottom: 25px;\n  width: 0px;\n  height: 0px;\n  left: 0;\n  right: 0;\n  font-size: 0px;\n  margin: 0 auto;\n  -webkit-transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out;\n  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out; }\n\n.compose-btn {\n  --background: transparent;\n  --color: #222;\n  margin: 0 auto;\n  border: 1px solid;\n  display: block; }\n\n.name-lbl {\n  margin: 0;\n  font-size: 3vw;\n  font-weight: bold; }\n\n.distance-lbl {\n  margin: 0;\n  font-size: 3vw; }\n\n.compose.compose-btn {\n  font-weight: bold;\n  --background: #956f5a;\n  --color: #fff; }\n\n.compose .card-selected .localized-user-img-shadow-layer {\n  background: -webkit-gradient(linear, left bottom, left top, from(#f5ece1), to(transparent));\n  background: linear-gradient(to top, #f5ece1, transparent);\n  height: 100%;\n  opacity: 1; }\n\n.compose.multiple-invitation-btn {\n  width: 100px;\n  height: 100px;\n  font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9zcmMvYXBwL19wYWdlcy9sb2NhbGl6ZWQtdXNlcnMvbG9jYWxpemVkLXVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVE7RUFDUixZQUFZO0VBQ1osMkZBQXlEO0VBQXpELHlEQUF5RDtFQUN6RCxpREFBNkM7RUFDN0MsMkNBQW1DO0VBQW5DLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUyxFQUFBOztBQUViO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjO0VBRWQsY0FBYztFQUNkLCtGQUErRjtFQUcvRix1RkFBdUYsRUFBQTs7QUFFM0Y7RUFDSSx5QkFBYTtFQUNiLGFBQVE7RUFDUixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxTQUFTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFNBQVM7RUFDVCxjQUFjLEVBQUE7O0FBRWxCO0VBRVEsaUJBQWlCO0VBQ2pCLHFCQUFhO0VBQ2IsYUFBUSxFQUFBOztBQUpoQjtFQVdZLDJGQUF5RDtFQUF6RCx5REFBeUQ7RUFDekQsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFidEI7RUFpQlEsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fcGFnZXMvbG9jYWxpemVkLXVzZXJzL2xvY2FsaXplZC11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDc7XG59XG4ubG9jYWxpemVkLXVzZXItY2FyZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG59XG5cbi5sb2NhbGl6ZWQtdXNlci1pbWctc2hhZG93LWxheWVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIHotaW5kZXg6IDg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDIwMjAyLCB0cmFuc3BhcmVudCk7IFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDAsMCwwLC44KTsgXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1pbmZve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCA1cHggMTBweCAjMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ubm9uZS1mb3VuZC1sYmx7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvY2FsaXplZC11c2VyLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ub25saW5lLWJhZGdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbn1cbmlvbi1jb250ZW50e1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubXVsdGlwbGUtaW52aXRhdGlvbi1idG57XG4gICAgei1pbmRleDogOTk5OTk5OTk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb21wb3NlLWJ0bntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tY29sb3I6ICMyMjI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubmFtZS1sYmx7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpc3RhbmNlLWxibHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAzdnc7XG59XG4uY29tcG9zZSB7XG4gICAgJi5jb21wb3NlLWJ0bntcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzk1NmY1YTtcbiAgICAgICAgLS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmNhcmQtc2VsZWN0ZWR7IFxuICAgICAgICAvLyAubG9jYWxpemVkLXVzZXItbmFtZXtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMjRweDsgICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICAubG9jYWxpemVkLXVzZXItaW1nLXNoYWRvdy1sYXllcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmNWVjZTEsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5tdWx0aXBsZS1pbnZpdGF0aW9uLWJ0bntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuXG4vLyAuaW1nTG9hZGVkIHtcbi8vICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4vLyAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxczsgLyogRmlyZWZveCA8IDE2ICovXG4vLyAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAxczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbi8vICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzOyAvKiBPcGVyYSA8IDEyLjEgKi9cbi8vICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuLy8gfVxuXG5cbi8vIC5pbWdJbkxvYWRpbmd7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vIH1cbiJdfQ== */";
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
    /* harmony import */


    var src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/_components/filter/filter.component */
    "./src/app/_components/filter/filter.component.ts"); // import { FilterComponent } from 'src/app/_components/filter/filter.component';


    var LocalizedUsersComponent =
    /*#__PURE__*/
    function () {
      function LocalizedUsersComponent(location, coffeeService, modalCtrl, toastService, router, modalController, zone) {
        _classCallCheck(this, LocalizedUsersComponent);

        this.location = location;
        this.coffeeService = coffeeService;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.router = router;
        this.modalController = modalController;
        this.zone = zone;
        this.invitationIds = [];
        this.compose = false;
      }

      _createClass(LocalizedUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localizedUsers = this.coffeeService.localizedUsers;
        }
      }, {
        key: "loadImg",
        value: function loadImg($event) {
          console.log($event); // this.zone.run(()=>{
          //   $event.target.classList.remove('imgInLoading')
          //   $event.target.classList.add('imgLoaded')
          // })
        }
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this = this;

          setTimeout(function () {
            _this.coffeeService.moreUsersOnLastUsers().subscribe();

            infiniteScroll.target.complete();
          }, 1000);
        }
      }, {
        key: "filter",
        value: function filter() {
          this.modalCtrl.create({
            component: src_app_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"]
          }).then(function (modal) {
            modal.present();
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "isOnline",
        value: function isOnline(localizedUser) {
          return localizedUser.user.online;
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
          var _this2 = this;

          if (this.invitationIds.length != 0) {
            this.coffeeService.sendInvitation(this.invitationIds).subscribe(function (response) {
              _this2.toastService.alert('invitation_sent');

              var lights = document.getElementsByClassName("card-selected");

              while (lights.length) {
                lights[0].classList.remove("card-selected");
              }

              _this2.compose = false;
            });
          } else {
            console.error("this.invitationIds is empty, unable to send invitation");
          }
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
          var element = $event.target.querySelector('ion-card');

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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_3__["CoffeeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], LocalizedUsersComponent);
    /***/
  }
}]);
//# sourceMappingURL=_pages-localized-users-localized-users-module-es5.js.map