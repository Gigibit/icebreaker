(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/user-profile/user-profile.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons> -->\n    <!-- <ion-title text-center>\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n    <!-- <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide  *ngIf=\"!userInfo\">\n      <ion-skeleton-text class=\"fake-slide\" animated></ion-skeleton-text>\n    </ion-slide>\n    <ion-slide class=\"user-img\"  *ngFor=\"let img of userInfo?.images\">\n      <img [src]=\"img\">\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"half-page-wrapper\">\n    <ion-icon class=\"dots\" (click)=\"userPopover($event)\" name=\"more\"></ion-icon>    \n    <div>\n      <ion-label class=\"user-info-text\">\n       <div *ngIf=\"userInfo\" class=\"user-info-text-name\">{{ userInfo?.name +  ( userInfo?.age ? ',' : '' )}}\n         <p class=\"user-info-text-age\">{{userInfo?.age}}</p>\n        </div> \n      </ion-label>\n      <ion-label class=\"user-info-text\">\n          <p>{{userInfo?.bio}}</p>\n      </ion-label>\n      \n    </div>\n    <!-- <span class=\"coffee-stain\" *ngIf=\"userInfo?.images?.length == 0\"></span> -->\n  </div>\n  <ion-button class=\"edit-btn\" (click)=\"editProfile()\">\n    {{'edit' | translate}}\n  </ion-button>\n  \n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block;\n}\n\n.userInfo {\n  border-bottom: 2px solid;\n  border-radius: 50%;\n  padding: 0px 30px 30px 30px;\n  background: #FDF9F1;\n  box-shadow: 0 4px 2px -2px gray;\n  -webkit-box-shadow: 0 4px 2px -2px gray;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n.dots {\n  float: right;\n  font-size: 50px;\n  color: #222;\n  z-index: 99999;\n}\n\nion-content {\n  --background: #fff;\n}\n\n.user-gallery {\n  /* Safari prior 6.1 */\n  transition: height 2s ease-out;\n}\n\n.user-name {\n  text-align: center;\n  font-size: 19px;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block;\n}\n\n.user-info-text-age {\n  font-size: 15px;\n  display: table-cell;\n  padding-left: 15px;\n}\n\n.gallery {\n  padding: 30px;\n}\n\n.user-info-text-name {\n  font-size: 30px;\n  display: table;\n}\n\n.half-page-wrapper {\n  position: relative;\n  padding-top: 25px;\n  height: 20%;\n  width: 100%;\n  bottom: 0;\n  background: #fff;\n  z-index: 999999999;\n  border-top-left-radius: 3%;\n  border-top-right-radius: 3%;\n  margin-top: -15px;\n}\n\n.user-info-text {\n  padding-left: 15px;\n  display: block;\n}\n\n.user-image {\n  width: 100%;\n  border-radius: 15px;\n  height: 100%;\n}\n\n.image-container-wrapper {\n  height: 33vw;\n}\n\n.image-container {\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 100%;\n  position: relative;\n}\n\n.localized-user-img {\n  background: #fff;\n  border-radius: 25%;\n  border: 2px solid #222;\n}\n\n.fake-slide {\n  height: 500px;\n  width: 100%;\n}\n\n.user-name.skeleton {\n  width: 53%;\n}\n\n.localized-user-btn-wrp {\n  position: relative;\n  text-align: center;\n}\n\n.image-container {\n  background-size: cover;\n}\n\n.online-badge {\n  background: greenyellow;\n  width: 5px;\n  height: 5px;\n}\n\n.maxFontSize {\n  font-size: 50px;\n}\n\n.edit-btn {\n  width: 30%;\n  text-align: center;\n  display: block;\n  bottom: 15px;\n  margin: 50px auto;\n}\n\n.user-img {\n  height: 57vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmNoaW1lZGlhL3Byb2plY3RzL2tva2lmeS9pY2VicmVha2VyL2NsaWVudC9rb2ZpZnkva29maWZ5L3NyYy9hcHAvX3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9fcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRko7O0FESUE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURJQTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNGSjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FES0E7RUFDMkMscUJBQUE7RUFDdkMsOEJBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUNHLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0g7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDTUo7O0FESEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBQ0ksVUFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRExBO0VBQ0ksc0JBQUE7QUNRSjs7QUROQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNTSjs7QUROQTtFQUNJLGVBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNVSjs7QURSQTtFQUNJLFlBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi51c2VyLW5hbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi51c2VySW5mb3tcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRGOUYxO1xuXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZG90c3tcblxuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnVzZXItZ2FsbGVyeXtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLWluOyAvKiBTYWZhcmkgcHJpb3IgNi4xICovXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDJzIGVhc2Utb3V0O1xufVxuLnVzZXItbmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnVzZXItaW5mby10ZXh0LWFnZXtcbiAgIGZvbnQtc2l6ZTogMTVweDtcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbn1cblxuLmdhbGxlcnl7XG4gICAgcGFkZGluZzogMzBweFxufVxuLnVzZXItaW5mby10ZXh0LW5hbWV7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi5oYWxmLXBhZ2Utd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMlO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzJTtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbi51c2VyLWluZm8tdGV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udXNlci1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1hZ2UtY29udGFpbmVyLXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAzM3Z3OyAgICBcbn1cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG5cbi5mYWtlLXNsaWRle1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1uYW1lLnNrZWxldG9ue1xuICAgIHdpZHRoOiA1MyU7XG59XG4ubG9jYWxpemVkLXVzZXItYnRuLXdycHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm9ubGluZS1iYWRnZXtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xufVxuXG4ubWF4Rm9udFNpemV7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuLmVkaXQtYnRue1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi51c2VyLWltZ3tcbiAgICBoZWlnaHQ6IDU3dmg7XG59IiwiLnVzZXItbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlckluZm8ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkRGOUYxO1xuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5kb3RzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjMjIyO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi51c2VyLWdhbGxlcnkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLWluO1xuICAvKiBTYWZhcmkgcHJpb3IgNi4xICovXG4gIHRyYW5zaXRpb246IGhlaWdodCAycyBlYXNlLW91dDtcbn1cblxuLnVzZXItbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXNlci1pbmZvLXRleHQtYWdlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5nYWxsZXJ5IHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnVzZXItaW5mby10ZXh0LW5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uaGFsZi1wYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMlO1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLnVzZXItaW5mby10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVzZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDMzdnc7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvY2FsaXplZC11c2VyLWltZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cblxuLmZha2Utc2xpZGUge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItbmFtZS5za2VsZXRvbiB7XG4gIHdpZHRoOiA1MyU7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1idG4td3JwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ub25saW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xufVxuXG4ubWF4Rm9udFNpemUge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5lZGl0LWJ0biB7XG4gIHdpZHRoOiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMTVweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi51c2VyLWltZyB7XG4gIGhlaWdodDogNTd2aDtcbn0iXX0= */");

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









const COLUMN_COUNT = 4;
let UserProfilePage = class UserProfilePage {
    constructor(location, toastController, modalController, 
    // private loadingController: LoadingController,
    // private ref: ChangeDetectorRef, 
    // private chatService: ChatService,
    popoverController, userService, authService) {
        this.location = location;
        this.toastController = toastController;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.userService = userService;
        this.authService = authService;
    }
    ngOnInit() {
        this.userInfo = this.authService.currentUserValue;
        this.authService.currentUser.subscribe(user => {
            this.userInfo = user;
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
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
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=_pages-user-profile-user-profile-module-es2015.js.map