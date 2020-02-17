(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-title class=\"ion-text-center\">\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content class=\"no-scroll\">\n  <ion-slides *ngIf=\"!userInfo?.images\" #slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide >\n      <ion-skeleton-text class=\"fake-slide\" animated></ion-skeleton-text>\n    </ion-slide>\n  </ion-slides>\n    <ion-slides *ngIf=\"userInfo\" >\n    <ion-slide *ngFor=\"let img of userInfo.images\" class=\"user-img\">\n      <div class=\"slide-container\">\n        <img src=\"{{img}}\"/>\n      </div>\n    </ion-slide>\n    \n  </ion-slides>\n  \n  <div class=\"half-page-wrapper\">\n    <ion-icon class=\"dots\" (click)=\"userPopover($event)\" name=\"more\"></ion-icon>    \n    <div>\n      <ion-label class=\"user-info-text\">\n        <div *ngIf=\"userInfo\" class=\"user-info-text-name\">{{ userInfo?.name +  ( userInfo?.age ? ',' : '' )}}\n          <p class=\"user-info-text-age\">{{userInfo?.age}}</p>\n        </div> \n      </ion-label>\n      <ion-label class=\"user-info-text\">\n        <p>{{userInfo?.bio}}</p>\n      </ion-label>\n      <ion-label class=\"user-info-credits\" (click)=\"manageCredits()\">\n        <p>{{credits}}</p>\n        <ion-icon name=\"card\"></ion-icon>\n      </ion-label>\n      \n    </div>\n    <!-- <span class=\"coffee-stain\" *ngIf=\"userInfo?.images?.length == 0\"></span> -->\n  </div>\n  <div class=\"edit-btn-main\">\n    <div class=\"edit-button-container\">\n      <div class=\"edit-btn-wrapper\">\n        <ion-button class=\"edit-btn\" (click)=\"editProfile()\">\n          <ion-icon class=\"edit-icon\" name=\"create\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/_pages/user-profile/user-profile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/_pages/user-profile/user-profile.module.ts ***!
  \************************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/_pages/user-profile/user-profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }
];
let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/_pages/user-profile/user-profile.page.scss":
/*!************************************************************!*\
  !*** ./src/app/_pages/user-profile/user-profile.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.userInfo {\n  border-bottom: 2px solid;\n  border-radius: 50%;\n  padding: 0px 30px 30px 30px;\n  background: #FDF9F1;\n  box-shadow: 0 4px 2px -2px gray;\n  -webkit-box-shadow: 0 4px 2px -2px gray;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  margin-bottom: 20px;\n  padding-bottom: 20px; }\n\n.dots {\n  float: right;\n  font-size: 50px;\n  color: #222;\n  z-index: 99999; }\n\nion-content {\n  --background: #fff; }\n\n.user-gallery {\n  -webkit-transition: height 2s ease-in;\n  /* Safari prior 6.1 */\n  -webkit-transition: height 2s ease-out;\n  transition: height 2s ease-out; }\n\n.user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block; }\n\n.user-info-text-age {\n  font-size: 15px;\n  display: table-cell;\n  padding-left: 15px; }\n\n.gallery {\n  padding: 30px; }\n\n.user-info-text-name {\n  font-size: 30px;\n  display: table; }\n\n.half-page-wrapper {\n  position: relative;\n  padding-top: 25px;\n  height: 20%;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  z-index: 999999999;\n  border-top-left-radius: 3%;\n  border-top-right-radius: 3%;\n  margin-top: -15px; }\n\n.user-info-text {\n  padding-left: 15px;\n  display: block; }\n\n.user-image {\n  width: 100%;\n  border-radius: 15px;\n  height: 100%; }\n\n.image-container-wrapper {\n  height: 33vw; }\n\n.image-container {\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 100%;\n  position: relative; }\n\n.localized-user-img {\n  background: #fff;\n  border-radius: 25%;\n  border: 2px solid #222; }\n\n.profileImageSkeleton {\n  width: 80px;\n  height: 80px;\n  margin: 30px auto;\n  border: 2px solid #222; }\n\n.fake-slide {\n  height: 450px;\n  width: 100%; }\n\n.user-name.skeleton {\n  width: 53%; }\n\n.localized-user-btn-wrp {\n  position: relative;\n  text-align: center; }\n\n.image-container {\n  background-size: cover; }\n\n.online-badge {\n  width: 5px;\n  height: 5px; }\n\n.maxFontSize {\n  font-size: 50px; }\n\n.edit-btn {\n  text-align: center;\n  display: block;\n  bottom: 15px;\n  margin: 50px auto;\n  --border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-top: 0px; }\n\n.edit-button-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 13px;\n  margin: 0 auto; }\n\n.edit-btn-wrapper {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border: 8px solid #FDF9F1;\n  box-shadow: 8px 0 21px rgba(0, 0, 0, 0.08); }\n\n.edit-btn-main {\n  position: absolute;\n  bottom: 0;\n  height: 200px;\n  width: 100%;\n  bottom: -115px;\n  left: 0;\n  right: 0; }\n\n.user-img {\n  height: 57vh; }\n\n.user-info-credits {\n  text-align: right;\n  color: #ffd700; }\n\n.user-info-credits p {\n  font-size: 21px;\n  font-weight: bold;\n  padding-right: 20px;\n  color: #ffd700; }\n\n.user-info-credits {\n  position: absolute;\n  top: 90%;\n  bottom: 0;\n  right: 0; }\n\n.user-info-credits ion-icon {\n  font-size: 21px;\n  float: right;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9zcmMvYXBwL19wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBRW5CLCtCQUErQjtFQUMvQix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFFSSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWEsRUFBQTs7QUFFakI7RUFDSSxxQ0FBcUM7RUFBRSxxQkFBQTtFQUN2QyxzQ0FBOEI7RUFBOUIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFFbEI7RUFDRyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUlyQjtFQUNJLGFBQ0osRUFBQTs7QUFDQTtFQUNJLGVBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QiwwQ0FBMEMsRUFBQTs7QUFFOUM7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBRVo7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUVaO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi51c2VyLW5hbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2VySW5mb3tcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGOUYxO1xuXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZG90c3tcblxuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnVzZXItZ2FsbGVyeXtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLWluOyAvKiBTYWZhcmkgcHJpb3IgNi4xICovXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2Utb3V0O1xufVxuLnVzZXItbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXItaW5mby10ZXh0LWFnZXtcbiAgIGZvbnQtc2l6ZTogMTVweDtcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbn1cblxuLmdhbGxlcnl7XG4gICAgcGFkZGluZzogMzBweFxufVxuLnVzZXItaW5mby10ZXh0LW5hbWV7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi5oYWxmLXBhZ2Utd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzJTtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi51c2VyLWluZm8tdGV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2UtY29udGFpbmVyLXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAzM3Z3OyAgICBcbn1cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG4ucHJvZmlsZUltYWdlU2tlbGV0b257XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG4uZmFrZS1zbGlkZXtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItbmFtZS5za2VsZXRvbntcbiAgICB3aWR0aDogNTMlO1xufVxuLmxvY2FsaXplZC11c2VyLWJ0bi13cnB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5vbmxpbmUtYmFkZ2V7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDVweDtcbn1cblxuLm1heEZvbnRTaXple1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cbi5lZGl0LWJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5lZGl0LWJ1dHRvbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmVkaXQtYnRuLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI0ZERjlGMTtcbiAgICBib3gtc2hhZG93OiA4cHggMCAyMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uZWRpdC1idG4tbWFpbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAtMTE1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbi51c2VyLWltZ3tcbiAgICBoZWlnaHQ6IDU3dmg7XG59XG4udXNlci1pbmZvLWNyZWRpdHN7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmQ3MDA7XG59XG4udXNlci1pbmZvLWNyZWRpdHMgcHtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZDcwMDtcbn1cbi51c2VyLWluZm8tY3JlZGl0c3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLnVzZXItaW5mby1jcmVkaXRzIGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/_pages/user-profile/user-profile.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/_pages/user-profile/user-profile.page.ts ***!
  \**********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/image-modal/image-modal.component */ "./src/app/_components/image-modal/image-modal.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_components/user-profile-popover/user-profile-popover.component */ "./src/app/_components/user-profile-popover/user-profile-popover.component.ts");
/* harmony import */ var src_app_components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_components/edit-user-profile/edit-user-profile.component */ "./src/app/_components/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var src_app_components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_components/manage-credits/manage-credits.component */ "./src/app/_components/manage-credits/manage-credits.component.ts");










const COLUMN_COUNT = 4;
let UserProfilePage = class UserProfilePage {
    constructor(location, toastController, modalController, 
    // private loadingController: LoadingController,
    // private ref: ChangeDetectorRef, 
    popoverController, userService, authService, 
    // private router: Router
    modalCtrl) {
        this.location = location;
        this.toastController = toastController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.userService = userService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
        this.authService.currentUser.subscribe(user => {
            this.userInfo = user;
            this.credits = user.credits;
        });
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    userPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_7__["UserProfilePopoverComponent"],
                event: event
            });
            return yield popover.present();
        });
    }
    ionViewWillEnter() {
        this.userService.getCredits().subscribe(credits => this.credits = credits);
    }
    openPreview(img) {
        this.modalController.create({
            component: _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_5__["ImageModalComponent"],
            componentProps: {
                img: img
            }
        }).then(modal => {
            modal.present();
        });
    }
    manageCredits() {
        this.modalCtrl.create({
            component: src_app_components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_9__["ManageCreditsComponent"],
        }).then(modal => {
            modal.present();
        });
    }
    editProfile() {
        this.modalController.create({
            component: src_app_components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditUserProfileComponent"],
        }).then(modal => {
            modal.present();
        });
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/_pages/user-profile/user-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=_pages-user-profile-user-profile-module-es2015.js.map