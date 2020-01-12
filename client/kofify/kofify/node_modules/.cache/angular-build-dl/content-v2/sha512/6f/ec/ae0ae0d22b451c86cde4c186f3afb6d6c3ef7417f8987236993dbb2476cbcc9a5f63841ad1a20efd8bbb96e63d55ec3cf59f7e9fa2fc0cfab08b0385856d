function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-user-profile-user-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesUserProfileUserProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-title class=\"ion-text-center\">\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content class=\"no-scroll\">\n  <ion-slides #slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide  *ngIf=\"!userInfo?.images\">\n      <ion-skeleton-text class=\"fake-slide\" animated></ion-skeleton-text>\n    </ion-slide>\n    \n    <div class=\"user-img\">\n      <div *ngIf=\"userInfo\" class=\"slide-container\">\n        <ion-slide *ngFor=\"let img of userInfo.images\">\n          <img src=\"{{img}}\"/>\n        </ion-slide>\n      </div>\n    </div>\n  </ion-slides>\n  \n  <div class=\"half-page-wrapper\">\n    <ion-icon class=\"dots\" (click)=\"userPopover($event)\" name=\"more\"></ion-icon>    \n    <div>\n      <ion-label class=\"user-info-text\">\n        <div *ngIf=\"userInfo\" class=\"user-info-text-name\">{{ userInfo?.name +  ( userInfo?.age ? ',' : '' )}}\n          <p class=\"user-info-text-age\">{{userInfo?.age}}</p>\n        </div> \n      </ion-label>\n      <ion-label class=\"user-info-text\">\n        <p>{{userInfo?.bio}}</p>\n      </ion-label>\n      \n    </div>\n    <!-- <span class=\"coffee-stain\" *ngIf=\"userInfo?.images?.length == 0\"></span> -->\n  </div>\n  <div class=\"edit-btn-main\">\n    <div class=\"edit-button-container\">\n      <div class=\"edit-btn-wrapper\">\n        <ion-button class=\"edit-btn\" (click)=\"editProfile()\">\n          <ion-icon class=\"edit-icon\" name=\"create\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/_pages/user-profile/user-profile.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/_pages/user-profile/user-profile.module.ts ***!
    \************************************************************/

  /*! exports provided: UserProfilePageModule */

  /***/
  function srcApp_pagesUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function () {
      return UserProfilePageModule;
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


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/_pages/user-profile/user-profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }];

    var UserProfilePageModule = function UserProfilePageModule() {
      _classCallCheck(this, UserProfilePageModule);
    };

    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })], UserProfilePageModule);
    /***/
  },

  /***/
  "./src/app/_pages/user-profile/user-profile.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/_pages/user-profile/user-profile.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesUserProfileUserProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.userInfo {\n  border-bottom: 2px solid;\n  border-radius: 50%;\n  padding: 0px 30px 30px 30px;\n  background: #FDF9F1;\n  box-shadow: 0 4px 2px -2px gray;\n  -webkit-box-shadow: 0 4px 2px -2px gray;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  margin-bottom: 20px;\n  padding-bottom: 20px; }\n\n.dots {\n  float: right;\n  font-size: 50px;\n  color: #222;\n  z-index: 99999; }\n\nion-content {\n  --background: #fff; }\n\n.user-gallery {\n  -webkit-transition: height 2s ease-in;\n  /* Safari prior 6.1 */\n  -webkit-transition: height 2s ease-out;\n  transition: height 2s ease-out; }\n\n.user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.user-info-text-age {\n  font-size: 15px;\n  display: table-cell;\n  padding-left: 15px; }\n\n.gallery {\n  padding: 30px; }\n\n.user-info-text-name {\n  font-size: 30px;\n  display: table; }\n\n.half-page-wrapper {\n  position: relative;\n  padding-top: 25px;\n  height: 20%;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  z-index: 999999999;\n  border-top-left-radius: 3%;\n  border-top-right-radius: 3%;\n  margin-top: -15px; }\n\n.user-info-text {\n  padding-left: 15px;\n  display: block; }\n\n.user-image {\n  width: 100%;\n  border-radius: 15px;\n  height: 100%; }\n\n.image-container-wrapper {\n  height: 33vw; }\n\n.image-container {\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 100%;\n  position: relative; }\n\n.localized-user-img {\n  background: #fff;\n  border-radius: 25%;\n  border: 2px solid #222; }\n\n.profileImageSkeleton {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\n.fake-slide {\n  height: 450px;\n  width: 100%; }\n\n.user-name.skeleton {\n  width: 53%; }\n\n.localized-user-btn-wrp {\n  position: relative;\n  text-align: center; }\n\n.image-container {\n  background-size: cover; }\n\n.online-badge {\n  width: 5px;\n  height: 5px; }\n\n.maxFontSize {\n  font-size: 50px; }\n\n.edit-btn {\n  text-align: center;\n  display: block;\n  bottom: 15px;\n  margin: 50px auto;\n  --border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-top: 0px; }\n\n.edit-button-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 13px;\n  margin: 0 auto; }\n\n.edit-btn-wrapper {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border: 8px solid #FDF9F1;\n  box-shadow: 8px 0 21px rgba(0, 0, 0, 0.08); }\n\n.edit-btn-main {\n  position: absolute;\n  bottom: 0;\n  height: 200px;\n  width: 100%;\n  bottom: -115px;\n  left: 0;\n  right: 0; }\n\n.user-img {\n  height: 57vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUVuQiwrQkFBK0I7RUFDL0IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBRUksWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUlsQjtFQUNJLGtCQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUNBQXFDO0VBQUUscUJBQUE7RUFDdkMsc0NBQThCO0VBQTlCLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0csZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFJckI7RUFDSSxhQUNKLEVBQUE7O0FBQ0E7RUFDSSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsMENBQTBDLEVBQUE7O0FBRTlDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUVaO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLnVzZXItbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXJJbmZve1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGREY5RjE7XG5cbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5kb3Rze1xuXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogIzIyMjtcbiAgICB6LWluZGV4OiA5OTk5OTtcbn1cblxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4udXNlci1nYWxsZXJ5e1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2UtaW47IC8qIFNhZmFyaSBwcmlvciA2LjEgKi9cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZS1vdXQ7XG59XG4udXNlci1uYW1le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1pbmZvLXRleHQtYWdle1xuICAgZm9udC1zaXplOiAxNXB4O1xuICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgIHBhZGRpbmctbGVmdDogMTVweDtcblxufVxuXG4uZ2FsbGVyeXtcbiAgICBwYWRkaW5nOiAzMHB4XG59XG4udXNlci1pbmZvLXRleHQtbmFtZXtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmhhbGYtcGFnZS13cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMyU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMlO1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLnVzZXItaW5mby10ZXh0e1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2VyLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5pbWFnZS1jb250YWluZXItd3JhcHBlcntcbiAgICBoZWlnaHQ6IDMzdnc7ICAgIFxufVxuLmltYWdlLWNvbnRhaW5lcntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWd7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cbi5wcm9maWxlSW1hZ2VTa2VsZXRvbntcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cbi5mYWtlLXNsaWRle1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1uYW1lLnNrZWxldG9ue1xuICAgIHdpZHRoOiA1MyU7XG59XG4ubG9jYWxpemVkLXVzZXItYnRuLXdycHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm9ubGluZS1iYWRnZXtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xufVxuXG4ubWF4Rm9udFNpemV7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuLmVkaXQtYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3R0b206IDE1cHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmVkaXQtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uZWRpdC1idG4td3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjRkRGOUYxO1xuICAgIGJveC1zaGFkb3c6IDhweCAwIDIxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5lZGl0LWJ0bi1tYWlue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IC0xMTVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLnVzZXItaW1ne1xuICAgIGhlaWdodDogNTd2aDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_pages/user-profile/user-profile.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_pages/user-profile/user-profile.page.ts ***!
    \**********************************************************/

  /*! exports provided: UserProfilePage */

  /***/
  function srcApp_pagesUserProfileUserProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePage", function () {
      return UserProfilePage;
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


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_components/image-modal/image-modal.component */
    "./src/app/_components/image-modal/image-modal.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var src_app_components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_components/user-profile-popover/user-profile-popover.component */
    "./src/app/_components/user-profile-popover/user-profile-popover.component.ts");
    /* harmony import */


    var src_app_components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_components/edit-user-profile/edit-user-profile.component */
    "./src/app/_components/edit-user-profile/edit-user-profile.component.ts");

    var COLUMN_COUNT = 4;

    var UserProfilePage =
    /*#__PURE__*/
    function () {
      function UserProfilePage(location, toastController, modalController, // private loadingController: LoadingController,
      // private ref: ChangeDetectorRef, 
      popoverController, userService, authService) {
        _classCallCheck(this, UserProfilePage);

        this.location = location;
        this.toastController = toastController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.userService = userService;
        this.authService = authService; //requestedProposals: Proposal[]
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.

        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(UserProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.currentUser.subscribe(function (user) {
            _this.userInfo = user;
            console.log(_this.userInfo);
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: text,
                      position: 'bottom',
                      duration: 3000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "userPopover",
        value: function userPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__["UserProfilePopoverComponent"],
                      event: event
                    });

                  case 2:
                    popover = _context2.sent;
                    _context2.next = 5;
                    return popover.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openPreview",
        value: function openPreview(img) {
          this.modalController.create({
            component: _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_5__["ImageModalComponent"],
            componentProps: {
              img: img
            }
          }).then(function (modal) {
            modal.present();
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.modalController.create({
            component: src_app_components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditUserProfileComponent"]
          }).then(function (modal) {
            modal.present();
          });
        }
      }]);

      return UserProfilePage;
    }();

    UserProfilePage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.page.scss */
      "./src/app/_pages/user-profile/user-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], UserProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=_pages-user-profile-user-profile-module-es5.js.map