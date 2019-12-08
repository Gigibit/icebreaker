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


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    \n    <ion-buttons slot=\"end\"  (click)=\"location.back()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  \n  <div class=\"none-found-lbl\" *ngIf=\"!localizedUsers || localizedUsers.length <= 0\">\n    {{ 'no_localized_users_were_found' | translate }}\n  </div>\n\n    <ion-grid *ngIf=\"localizedUsers && localizedUsers.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button fill=\"clear\" [class.compose]=\"compose\" class=\"compose-btn\" (click)=\"compose = !compose\">\n            <ion-label>{{ 'coffee_group' | translate }}</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [class.compose]=\"compose\" class=\"localized-user-col\" size=\"6\" *ngFor=\"let localizedUser of localizedUsers\">\n          <ion-card class=\"white localized-user-card\" (click)=\"onLocalizedUserTap($event, localizedUser)\">\n            <span *ngIf=\"isOnline(localizedUser)\" class=\"online-badge\"></span>\n            <img class=\"localized-user-img\" \n            (load)=\"loadImg(localizedUser)\" \n            [class.imgInLoading]=\"!loaded[localizedUser.user.id]\" \n            [class.imgLoaded]=\"loaded[localizedUser.user.id]\" \n            onError=\"this.src='../../assets/imgs/user.svg';\" \n            [src]=\"localizedUser.user.profileImg\">\n            <div class=\"localized-user-img-shadow-layer\"></div>\n            <div class=\"card-title localized-user-info localized-user-name\">\n              <p class=\"name-lbl\">{{localizedUser.user.name}}, {{localizedUser.user.age}}</p>\n              <p class=\"distance-lbl\">{{distanceFromUser(localizedUser)}}</p>\n            </div>\n            \n            <!-- <div class=\"card-subtitle localized-user-info localized-user-age\"></div> -->\n          </ion-card>\n        </ion-col>                                                                                                                                                                                                                                                                                          \n        \n      </ion-row>\n    </ion-grid>\n    <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n<ion-button [class.compose]=\"compose\" class=\"multiple-invitation-btn\" (click)=\"invite()\">\n  <ion-icon name=\"cafe\"></ion-icon>\n</ion-button>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".localized-user-img {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  margin: 0 auto;\n  z-index: 7; }\n\n.localized-user-card {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: auto; }\n\n.localized-user-img-shadow-layer {\n  width: 100%;\n  height: 30%;\n  z-index: 8;\n  position: absolute;\n  bottom: 0;\n  opacity: 0.8;\n  background: linear-gradient(to top, #020202, transparent);\n  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.8);\n  transition: height 0.5s ease-in-out; }\n\n.localized-user-info {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  position: absolute;\n  text-shadow: 0px 5px 10px #000;\n  bottom: 0;\n  padding: 15px;\n  text-align: center;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  color: #fff; }\n\n.none-found-lbl {\n  text-align: center; }\n\n.localized-user-name {\n  font-size: 15px; }\n\n.online-badge {\n  position: absolute;\n  top: 5%;\n  right: 5%; }\n\n.multiple-invitation-btn {\n  z-index: 99999999;\n  --border-radius: 50%;\n  position: fixed;\n  bottom: 25px;\n  width: 0px;\n  height: 0px;\n  left: 0;\n  right: 0;\n  font-size: 0px;\n  margin: 0 auto;\n  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, font-size 0.3s ease-in-out; }\n\n.compose-btn {\n  --background: transparent;\n  --color: #222;\n  margin: 0 auto;\n  border: 1px solid;\n  display: block; }\n\n.name-lbl {\n  margin: 0;\n  font-size: 3vw;\n  font-weight: bold; }\n\n.distance-lbl {\n  margin: 0;\n  font-size: 3vw; }\n\n.compose.compose-btn {\n  font-weight: bold;\n  --background: #956f5a;\n  --color: #fff; }\n\n.compose .card-selected .localized-user-img-shadow-layer {\n  background: linear-gradient(to top, #f5ece1, transparent);\n  height: 100%;\n  opacity: 1; }\n\n.compose.multiple-invitation-btn {\n  width: 100px;\n  height: 100px;\n  font-size: 24px; }\n\n.imgLoaded {\n  -webkit-animation: fadein 1s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 1s; }\n\n.imgInLoading {\n  opacity: 0; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvbG9jYWxpemVkLXVzZXJzL2xvY2FsaXplZC11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUVkO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFRO0VBQ1IsWUFBWTtFQUNaLHlEQUF5RDtFQUN6RCxpREFBNkM7RUFDN0MsbUNBQW1DLEVBQUE7O0FBR3ZDO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTLEVBQUE7O0FBRWI7RUFDSSxpQkFBaUI7RUFDakIsb0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFFZCxjQUFjO0VBSWQsdUZBQXVGLEVBQUE7O0FBRTNGO0VBQ0kseUJBQWE7RUFDYixhQUFRO0VBQ1IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxTQUFTO0VBQ1QsY0FBYyxFQUFBOztBQUVsQjtFQUVRLGlCQUFpQjtFQUNqQixxQkFBYTtFQUNiLGFBQVEsRUFBQTs7QUFKaEI7RUFXWSx5REFBeUQ7RUFDekQsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFidEI7RUFpQlEsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksNEJBQTRCO0VBQUUsb0NBQUE7RUFDSCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDdEIsb0JBQW9CLEVBQUE7O0FBRTdCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0k7SUFBTyxVQUFVLEVBQUE7RUFDakI7SUFBTyxVQUFVLEVBQUEsRUFBQTs7QUFHckIsaUJBQUE7O0FBTUEsb0NBQUE7O0FBQ0E7RUFDSTtJQUFPLFVBQVUsRUFBQTtFQUNqQjtJQUFPLFVBQVUsRUFBQSxFQUFBOztBQUdyQixzQkFBQTs7QUFNQSxpQkFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy9sb2NhbGl6ZWQtdXNlcnMvbG9jYWxpemVkLXVzZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhbGl6ZWQtdXNlci1pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgei1pbmRleDogNztcbn1cbi5sb2NhbGl6ZWQtdXNlci1jYXJke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWctc2hhZG93LWxheWVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIHotaW5kZXg6IDg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTowO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDIwMjAyLCB0cmFuc3BhcmVudCk7IFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDAsMCwwLC44KTsgXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1pbmZve1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCA1cHggMTBweCAjMDAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ubm9uZS1mb3VuZC1sYmx7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvY2FsaXplZC11c2VyLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ub25saW5lLWJhZGdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIHJpZ2h0OiA1JTtcbn1cbi5tdWx0aXBsZS1pbnZpdGF0aW9uLWJ0bntcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0LCBmb250LXNpemUgMC4zcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgd2lkdGggMC4zcyBlYXNlLWluLW91dCwgZm9udC1zaXplIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQsIGZvbnQtc2l6ZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNvbXBvc2UtYnRue1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1jb2xvcjogIzIyMjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYW1lLWxibHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGlzdGFuY2UtbGJse1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDN2dztcbn1cbi5jb21wb3NlIHtcbiAgICAmLmNvbXBvc2UtYnRue1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjOTU2ZjVhO1xuICAgICAgICAtLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zZWxlY3RlZHsgXG4gICAgICAgIC8vIC5sb2NhbGl6ZWQtdXNlci1uYW1le1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAyNHB4OyAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIC5sb2NhbGl6ZWQtdXNlci1pbWctc2hhZG93LWxheWVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Y1ZWNlMSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm11bHRpcGxlLWludml0YXRpb24tYnRue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5cbi5pbWdMb2FkZWR7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAxczsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgICAtby1hbmltYXRpb246IGZhZGVpbiAxczsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICBhbmltYXRpb246IGZhZGVpbiAxcztcbn1cbi5pbWdJbkxvYWRpbmd7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBPcGVyYSA8IDEyLjEgKi9cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59Il19 */";
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
        this.loaded = {};
        this.compose = false;
      }

      _createClass(LocalizedUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localizedUsers = this.coffeeService.localizedUsers;
        }
      }, {
        key: "loadImg",
        value: function loadImg(localizedUser) {
          this.loaded[localizedUser.user.id] = true;
          console.log(this.loaded);
        }
      }, {
        key: "loadData",
        value: function loadData(infiniteScroll) {
          var _this = this;

          console.log('Begin async operation');
          setTimeout(function () {
            console.log('loaddata');

            _this.coffeeService.moreUsersOnLastUsers().subscribe(function (response) {
              console.log(response);
              response.map(function (it) {
                _this.localizedUsers.push(it);
              });
            });

            console.log('Async operation has ended');
            infiniteScroll.target.complete();
          }, 1000);
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
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
          var _this2 = this;

          this.coffeeService.sendInvitation(this.invitationIds).subscribe(function (response) {
            _this2.toastService.alert('invitation_sent');

            var lights = document.getElementsByClassName("card-selected");

            while (lights.length) {
              lights[0].classList.remove("card-selected");
            }

            _this2.compose = false;
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