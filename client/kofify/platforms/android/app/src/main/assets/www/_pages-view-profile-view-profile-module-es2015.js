(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-view-profile-view-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <!-- <ion-title class=\"ion-text-center\">\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n      <ion-icon class=\"dots\" (click)=\"userPopover($event)\" name=\"more\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class=\"userInfo\" *ngIf=\"user\">\n    <ion-avatar id=\"profileImage\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      [src]=\"user.profileImg\" />\n    </ion-avatar>\n    <ion-label class=\"user-name\">{{user.name}}</ion-label>\n  </div> -->\n  <ion-slides *ngIf=\"!user\" #slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-skeleton-text class=\"fake-slide\" animated></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides>\n  <ion-slides *ngIf=\"user\">\n    <ion-slide *ngFor=\"let img of user.images\" class=\"user-img\">\n      <div class=\"slide-container\">\n          <img [src]=\"img\"/>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <!-- <div class=\"userInfo\" *ngIf=\"!user\">\n    <ion-avatar class=\"profileImageSkeleton\" slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    <ion-skeleton-text class=\"user-name skeleton\" animated></ion-skeleton-text>\n  </div> -->\n  <div class=\"half-page-wrapper\">\n    <div class=\"localized-user-btn-wrp\">\n      <ion-button slot=\"start\" (click)=\"invite()\" class=\"invite-btn localized-user-btn\">\n        <ion-icon name=\"cafe\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" (click)=\"chat()\" class=\"send-btn localized-user-btn\">\n        <ion-icon name=\"chatbubbles\"></ion-icon>\n      </ion-button>\n    </div>\n    \n    <ion-label *ngIf=\"user\" class=\"user-info-text\">\n        <div class=\"user-info-text-name\">{{user?.name +  ( user?.age ? ',' : '' ) }}<p class=\"user-info-text-age\">{{user?.age}}</p></div> \n      </ion-label>\n    <ion-label *ngIf=\"distance\" class=\"user-info-text\">\n      <ion-icon name=\"pin\"></ion-icon>{{ distance }}\n    </ion-label>\n    <ion-label class=\"user-info-text\" *ngIf=\"isOnline\">\n      <ion-icon class=\"online-badge\"></ion-icon> Online\n    </ion-label>\n    <ion-label class=\"user-info-text\">\n        <p>{{user?.bio}}</p>\n    </ion-label>\n    \n  </div>\n  <!-- <span class=\"coffee-stain\" *ngIf=\"user && ( !user.images || user.images.length == 0 )\"></span> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/_pages/view-profile/view-profile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/_pages/view-profile/view-profile.module.ts ***!
  \************************************************************/
/*! exports provided: ViewProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-profile.page */ "./src/app/_pages/view-profile/view-profile.page.ts");







const routes = [
    {
        path: '',
        component: _view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileComponent"]
    }
];
let ViewProfilePageModule = class ViewProfilePageModule {
};
ViewProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_view_profile_page__WEBPACK_IMPORTED_MODULE_6__["ViewProfileComponent"]]
    })
], ViewProfilePageModule);



/***/ }),

/***/ "./src/app/_pages/view-profile/view-profile.page.scss":
/*!************************************************************!*\
  !*** ./src/app/_pages/view-profile/view-profile.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profileImage {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\nion-content {\n  --background: #fff; }\n\n.user-gallery {\n  -webkit-transition: height 2s ease-in;\n  /* Safari prior 6.1 */\n  -webkit-transition: height 2s ease-out;\n  transition: height 2s ease-out; }\n\n.user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.userInfo {\n  border-bottom: 2px solid;\n  border-radius: 50%;\n  padding: 0px 30px 30px 30px;\n  background: #FDF9F1;\n  box-shadow: 0 4px 2px -2px gray;\n  -webkit-box-shadow: 0 4px 2px -2px gray;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  margin-bottom: 20px;\n  padding-bottom: 20px; }\n\n.dots {\n  float: right; }\n\n.gallery {\n  padding: 30px; }\n\n.half-page-wrapper {\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  z-index: 999999999;\n  border-top-left-radius: 3%;\n  border-top-right-radius: 3%;\n  margin-top: -15px; }\n\n.user-info-text {\n  padding-left: 15px;\n  padding-right: 15px;\n  display: block; }\n\n.user-image {\n  width: 100%;\n  border-radius: 15px;\n  height: 100%; }\n\n.image-container-wrapper {\n  height: 33vw; }\n\n.image-container {\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 100%;\n  position: relative; }\n\n.localized-user-img {\n  background: #fff;\n  border-radius: 25%;\n  border: 2px solid #222; }\n\n.profileImageSkeleton {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\n.fake-slide {\n  height: 450px;\n  width: 100%; }\n\n.user-name.skeleton {\n  width: 53%; }\n\n.localized-user-btn-wrp {\n  position: relative;\n  text-align: center; }\n\n.image-container {\n  background-size: cover; }\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  background: #fff;\n  border-radius: 50%;\n  border: 2px solid #222;\n  margin: 0 auto; }\n\n.localized-user-name {\n  font-size: 15px;\n  text-align: center;\n  margin: 0 auto;\n  display: block; }\n\n.user-img {\n  height: 57vh; }\n\n.localized-user-btn {\n  padding: 15px;\n  top: 0;\n  --border-radius: 50%;\n  width: 80px;\n  height: 80px; }\n\n.localized-user-btn.send-btn {\n  left: 21%; }\n\n.localized-user-btn.invite-btn {\n  left: 5%; }\n\n.user-info-text-age {\n  font-size: 15px;\n  display: table-cell;\n  padding-left: 15px; }\n\n.user-info-text-name {\n  font-size: 30px;\n  display: table; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX3BhZ2VzL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBSzFCO0VBQ0ksa0JBQWEsRUFBQTs7QUFFakI7RUFDSSxxQ0FBcUM7RUFBRSxxQkFBQTtFQUN2QyxzQ0FBOEI7RUFBOUIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUV4QjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxhQUNKLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksWUFBWSxFQUFBOztBQUloQjtFQUNJLGFBQWE7RUFDYixNQUFNO0VBQ04sb0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ0ksUUFBUSxFQUFBOztBQUdaO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHckI7RUFDSSxlQUFjO0VBQ2QsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL3ZpZXctcHJvZmlsZS92aWV3LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGVJbWFnZXtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cbi51c2VyLW1lc3NhZ2UtaW1ne1xuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4udXNlci1nYWxsZXJ5e1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2UtaW47IC8qIFNhZmFyaSBwcmlvciA2LjEgKi9cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMnMgZWFzZS1vdXQ7XG59XG4udXNlci1uYW1le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlckluZm97XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZERjlGMTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5kb3Rze1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5nYWxsZXJ5e1xuICAgIHBhZGRpbmc6IDMwcHhcbn1cbi5oYWxmLXBhZ2Utd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzJTtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi51c2VyLWluZm8tdGV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2VyLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5pbWFnZS1jb250YWluZXItd3JhcHBlcntcbiAgICBoZWlnaHQ6IDMzdnc7ICAgIFxufVxuLmltYWdlLWNvbnRhaW5lcntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWd7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cbi5wcm9maWxlSW1hZ2VTa2VsZXRvbntcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cbi5mYWtlLXNsaWRle1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1uYW1lLnNrZWxldG9ue1xuICAgIHdpZHRoOiA1MyU7XG59XG4ubG9jYWxpemVkLXVzZXItYnRuLXdycHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmxvY2FsaXplZC11c2VyLW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2VyLWltZ3tcbiAgICBoZWlnaHQ6IDU3dmg7XG59XG5cblxuLmxvY2FsaXplZC11c2VyLWJ0bntcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHRvcDogMDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgXG59XG4ubG9jYWxpemVkLXVzZXItYnRuLnNlbmQtYnRue1xuICAgIGxlZnQ6IDIxJTtcbn1cblxuLmxvY2FsaXplZC11c2VyLWJ0bi5pbnZpdGUtYnRue1xuICAgIGxlZnQ6IDUlO1xufVxuXG4udXNlci1pbmZvLXRleHQtYWdle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiB9XG5cbiAudXNlci1pbmZvLXRleHQtbmFtZXtcbiAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgIGRpc3BsYXk6IHRhYmxlO1xuIH1cbiAiXX0= */");

/***/ }),

/***/ "./src/app/_pages/view-profile/view-profile.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/_pages/view-profile/view-profile.page.ts ***!
  \**********************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/chat.service */ "./src/app/_services/chat.service.ts");
/* harmony import */ var src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/coffe.service */ "./src/app/_services/coffe.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/toast.service */ "./src/app/_services/toast.service.ts");
/* harmony import */ var src_app_models_chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_models/chat */ "./src/app/_models/chat.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/_utils/functions */ "./src/app/_utils/functions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");














const INVITATION_SENT = 'invitation_sent';
const OF_DISTANCE_KEY = "of_distance";
let ViewProfileComponent = class ViewProfileComponent {
    constructor(modalCtrl, chatService, coffeeService, loaderCtrl, toastService, location, userService, router, translateService, route) {
        this.modalCtrl = modalCtrl;
        this.chatService = chatService;
        this.coffeeService = coffeeService;
        this.loaderCtrl = loaderCtrl;
        this.toastService = toastService;
        this.location = location;
        this.userService = userService;
        this.router = router;
        this.translateService = translateService;
        this.route = route;
        this.distance = '';
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
            this.userService.getUserById(this.id).subscribe(response => {
                this.user = src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["UserMapper"].fromJson(response['user']);
                if (response['user']['distance']) {
                    const distance = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_12__["getFormattedDistance"])(response['user']['distance']);
                    if (distance.length > 0)
                        this.translateService.get(OF_DISTANCE_KEY).subscribe(value => {
                            this.distance = `${distance} ${value}`;
                        });
                }
                this.isOnline = this.user.online;
            });
        });
    }
    invite() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loaderCtrl.create();
            loader.present();
            this.coffeeService
                .sendInvitation([this.id])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => loader.dismiss()))
                .subscribe(response => {
                this.toastService.toastSuccess(INVITATION_SENT);
            });
        });
    }
    chat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loaderCtrl.create();
            loader.present();
            this.chatService
                .findOrCreate([this.id])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => loader.dismiss()))
                .subscribe(data => {
                let chat = src_app_models_chat__WEBPACK_IMPORTED_MODULE_9__["ChatMapper"].fromJson(data['chat']);
                this.chatService.setActiveChat(chat);
                this.router.navigate(['/chat', chat.id]);
            });
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ViewProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"] },
    { type: src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__["CoffeeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
ViewProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/view-profile/view-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-profile.page.scss */ "./src/app/_pages/view-profile/view-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"],
        src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_7__["CoffeeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
], ViewProfileComponent);



/***/ })

}]);
//# sourceMappingURL=_pages-view-profile-view-profile-module-es2015.js.map