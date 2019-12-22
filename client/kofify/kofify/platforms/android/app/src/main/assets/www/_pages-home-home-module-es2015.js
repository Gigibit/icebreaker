(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  *ngIf=\"flipped\" (click)=\"flipIt()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"profile()\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      class=\"profile-img-btn\" [src]=\"userImg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding no-scroll\">\n  <h1 class=\"range-title\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"ios-pin\"></ion-icon>\n    {{maxDistance}} m</h1>\n  <!-- <app-autocomplete-input [static]=\"true\" *ngIf=\"!useMyPosition\" ngDefaultControl  [placeholder]=\"'district'\" (onSearchResult)=\"onZoneSelected($event)\" [region]=\"selectedCity\" ></app-autocomplete-input> -->\n  <ion-range *ngIf=\"!flipped\" (mouseup)=\"onRangeChanged()\" (touchend)=\"onRangeChanged()\" pin=\"true\" [(ngModel)]=\"maxDistance\"  min=\"50\" max=\"5000\" step=\"50\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"ios-walk\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"ios-walk\"></ion-icon>\n  </ion-range>\n  \n  <div class=\"player border-radius-50\" [ngClass]=\"flipped ?'height-0':''\" [class.voted]=\"flipped\" color=\"primary\">\n    <div class=\"front flippable\" (click)=\"flipIt()\" >\n      <div id=\"container flippable\" >\n        <div class=\"coffee-container flippable\">\n          <!-- <img src=\"/src/assets/imgs/coffee.svg\"> -->\n          <div [class]=\"'coffee-mug' + ' ' + coffeeContainerVisibilitiy\" >\n            <div class=\"coffee-container\">\n              <div [class]=\"'coffee' + ' ' + loadClass\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"back flippable\">\n      <div class=\"localized-users flippable\">\n        <div class=\"localized-users-wrapper\">\n          <!-- <h3>{{localizedUsers?.length}} {{'close_to_you' | translate}}</h3>\n            <ion-avatar *ngFor=\"let localizedUser of localizedUsers; let i = index\" class=\"localized-user-img\" \n            [style.z-index]=\"i+1\"\n            [style.margin-left]=\"( 31*(i + 1) /localizedUsers.length ) + 'px'\">\n            <img \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            class=\"localized-user-img-src\" [src]=\"localizedUser?.user?.profileImg\">\n          </ion-avatar> -->\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"src-btn-main\">\n    <div class=\"src-button-container\" [ngClass]=\"flipped ?'width-20':''\">\n      <div class=\"src-btn-wrapper\">\n        <ion-button class=\"src-btn\" (click)=\"flipIt()\" class=\"src-btn\">\n          <ion-icon class=\"src-icon\" name=\"search\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  <!-- <span class=\"coffee-stain\"></span> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/_pages/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/_pages/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/_pages/home/home.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/_pages/home/home.page.scss":
/*!********************************************!*\
  !*** ./src/app/_pages/home/home.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background: #b09891; }\n\nlabel {\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  width: 320px;\n  height: 320px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer; }\n\n.player {\n  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  -webkit-box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  -moz-box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  /* background: #fff; */\n  position: relative;\n  height: 250px;\n  width: 250px;\n  transform-style: preserve-3d;\n  transition: all 600ms;\n  z-index: 20;\n  margin: 0 auto; }\n\n.player .flippable {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 50%;\n  margin: auto;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.player img {\n  border-radius: 50%; }\n\n.coffy-img-container {\n  z-index: 1;\n  -webkit-animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n.player .back {\n  color: #FFF;\n  transform: rotateY(180deg); }\n\ninput {\n  display: none; }\n\n.player.voted {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg); }\n\n.circle {\n  border-radius: 50%;\n  background-color: #fff;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n@-webkit-keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@-webkit-keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.profile-img-btn {\n  width: 32px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #222; }\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  left: 0;\n  right: 0; }\n\n.localized-users-wrapper {\n  position: relative;\n  width: 45%;\n  display: block;\n  text-align: center; }\n\n.localized-user-img-src {\n  background: white;\n  border: 2px solid #222; }\n\n.coffee-mug {\n  position: relative;\n  margin: 0 auto;\n  top: 34%;\n  width: 110px;\n  height: 100px;\n  border-radius: 2px 2px 50% 50%;\n  box-shadow: 0 0 0 3px #D1B378; }\n\n.coffee-mug:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 10px;\n    width: 24px;\n    height: 42px;\n    box-shadow: 0 0 0 3px #D1B378;\n    margin-left: 2px;\n    border-radius: 0 20px 20px 0; }\n\n.coffee-mug .coffee-container {\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #FDF9F1;\n    border-radius: 2px 2px 50% 50%; }\n\n.coffee-mug .coffee-load {\n    -webkit-animation: coffee-load 3.3s infinite;\n            animation: coffee-load 3.3s infinite; }\n\n.coffee-mug .coffee-load:before {\n      -webkit-animation: coffee-wave .9s ease-in-out infinite;\n              animation: coffee-wave .9s ease-in-out infinite; }\n\n.coffee-mug .coffee {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #6e4228;\n    transform: translateY(80%); }\n\n.coffee-mug .coffee:before {\n      content: '';\n      display: block;\n      width: 200%;\n      height: 1em;\n      position: absolute;\n      left: -50%;\n      top: -.5em;\n      background: #FDF9F1;\n      border-radius: 50%; }\n\n@-webkit-keyframes coffee-load {\n  0% {\n    transform: translateY(70%); }\n  70% {\n    transform: translateY(50%); }\n  90% {\n    transform: translateY(20%); }\n  95% {\n    transform: translateY(10%); }\n  100% {\n    transform: translateY(5%); } }\n\n@keyframes coffee-load {\n  0% {\n    transform: translateY(70%); }\n  70% {\n    transform: translateY(50%); }\n  90% {\n    transform: translateY(20%); }\n  95% {\n    transform: translateY(10%); }\n  100% {\n    transform: translateY(5%); } }\n\n.src-btn {\n  text-align: center;\n  display: block;\n  bottom: 15px;\n  margin: 50px auto;\n  --border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-top: 0px; }\n\n.src-button-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 13px;\n  transition: width 600ms ease;\n  margin: 0 auto; }\n\n.src-btn-wrapper {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border: 8px solid #FDF9F1;\n  box-shadow: 8px 0 21px rgba(0, 0, 0, 0.08); }\n\n.src-btn-main {\n  position: absolute;\n  bottom: 0;\n  height: 200px;\n  width: 100%;\n  bottom: -115px;\n  left: 0;\n  right: 0; }\n\n@-webkit-keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg); }\n  50% {\n    transform: rotate(-2deg); }\n  100% {\n    transform: rotate(2deg); } }\n\n@keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg); }\n  50% {\n    transform: rotate(-2deg); }\n  100% {\n    transform: rotate(2deg); } }\n\n.range-title {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFpQixFQUFBOztBQUdyQjtFQUVJLG1CQUFtQjtFQUVuQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBRVIsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFJbkI7RUFFSSwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCxzQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUVaLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUVuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVTtFQUNWLDJGQUErRTtVQUEvRSxtRkFBK0UsRUFBQTs7QUFJbkY7RUFDSSxXQUFXO0VBRVgsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLDBCQUEwQjtFQUMxQixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwyRUFBK0Q7VUFBL0QsbUVBQStELEVBQUE7O0FBRW5FO0VB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YTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVEsRUFBQTs7QUFHWjtFQUNJO0lBQ0ksdUJBQXVCLEVBQUE7RUFFM0I7SUFDSSx3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLHVCQUF1QixFQUFBLEVBQUE7O0FBUi9CO0VBQ0k7SUFDSSx1QkFBdUIsRUFBQTtFQUUzQjtJQUNJLHdCQUF3QixFQUFBO0VBRTVCO0lBQ0ksdUJBQXVCLEVBQUEsRUFBQTs7QUFLL0I7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZDogI2IwOTg5MTtcbn1cblxubGFiZWwge1xuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnBsYXllciB7XG5cbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbi5wbGF5ZXIgLmZsaXBwYWJsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwMHB4O1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnBsYXllciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb2ZmeS1pbWctY29udGFpbmVye1xuICAgIHotaW5kZXg6IDE7XG4gICAgYW5pbWF0aW9uOiBzY2FsZUluV2l0aG91dERpc2FwZWFyIDE4cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcbiAgICBcbn1cblxuLnBsYXllciAuYmFjayB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wbGF5ZXIudm90ZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNjYWxlSW4gNHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4zNiwgLjExLCAuODksIC4zMik7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41LCAuNSk7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41LCAyLjUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGVJbldpdGhvdXREaXNhcGVhciB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuLnByb2ZpbGUtaW1nLWJ0bntcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjI7XG59XG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmxvY2FsaXplZC11c2Vycy13cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWctc3Jje1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG5cblxuXG5cblxuXG5cblxuJGNvbG9yLXdoaXRlOiAjRkRGOUYxO1xuJGNvbG9yLW11ZzogI0QxQjM3ODtcbiRjb2xvci1jb2ZmZWU6ICM2ZTQyMjg7XG5cbi5jb2ZmZWUtbXVnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAzNCU7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA1MCUgNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAkY29sb3ItbXVnO1xuICAgIFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggJGNvbG9yLW11ZztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgICB9XG4gICAgXG4gICAgLmNvZmZlZS1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA1MCUgNTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29mZmVlLWxvYWR7XG4gICAgICAgIGFuaW1hdGlvbjogY29mZmVlLWxvYWQgMy4zcyBpbmZpbml0ZTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2ZmZWUtd2F2ZSAuOXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNvZmZlZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItY29mZmVlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKTtcbiAgICAgICAgXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMjAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgICAgIHRvcDogLS41ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBjb2ZmZWUtbG9hZCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgIH1cbiAgICA5NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XG4gICAgfVxufVxuXG4uc3JjLWJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5zcmMtYnV0dG9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggNjAwbXMgZWFzZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5zcmMtYnRuLXdyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiA4cHggc29saWQgI0ZERjlGMTtcbiAgICBib3gtc2hhZG93OiA4cHggMCAyMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uc3JjLWJ0bi1tYWlue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IC0xMTVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIGNvZmZlZS13YXZlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICB9XG59XG5cblxuLnJhbmdlLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/_pages/home/home.page.ts":
/*!******************************************!*\
  !*** ./src/app/_pages/home/home.page.ts ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_coffe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/coffe.service */ "./src/app/_services/coffe.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_utils/functions */ "./src/app/_utils/functions.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_services/toast.service */ "./src/app/_services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");













const USE_OWN_LOCATION = 'useMyPosition';
const USE_OWN_LANGUAGE = 'useMyLanguage';
const ENABLE_LOCALIZATION_KEY = 'enable_localization';
// for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
let HomePage = class HomePage {
    constructor(coffeeService, userService, geolocation, popoverController, ngZone, oneSignal, router, authService, toastService, nativeGeocoder) {
        this.coffeeService = coffeeService;
        this.userService = userService;
        this.geolocation = geolocation;
        this.popoverController = popoverController;
        this.ngZone = ngZone;
        this.oneSignal = oneSignal;
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.nativeGeocoder = nativeGeocoder;
        this.filterSelectOptions = {
            header: 'filter',
        };
        this.filter = [USE_OWN_LOCATION, USE_OWN_LANGUAGE];
        this.flipped = false;
        this.coffeeContainerVisibilitiy = 'visibile';
        this.useMyPosition = true;
        this.useMyLanguage = true;
        this.maxDistance = 2500;
        this.loadClass = '';
        //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        //todo: remove mock parameters
        this.geoLongitude = 9.164747499999999;
        this.geoLatitude = 45.480588499999996;
        const _this = this;
        window['ackSetLat'] = function (o) {
            _this.geoLatitude = o;
        };
        window['ackSetLon'] = function (o) {
            _this.geoLongitude = o;
        };
        window['ackMaxD'] = function (o) {
            _this.maxDistance = o;
        };
    }
    flipIt() {
        if (this.flipped == false || this.flipped == true) {
            console.log('finding...');
            this.findClosestUsers();
        }
        else {
            this.flipped = true;
            this.coffeeContainerVisibilitiy = 'visibile';
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getGeolocation();
            yield this.onEnter();
            this.navSubscription = this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"] && event.url === '/tabs/home') {
                    this.onEnter();
                }
            });
            this.authService.userInfo().subscribe(data => {
                console.log(data);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.oneSignal.getIds()).subscribe(data => {
                this.userService
                    .subscribeToPushNotifications(data.userId, data.pushToken)
                    .subscribe();
            });
            this.authService.currentUser.subscribe(user => {
                this.userImg = user && user.profileImg;
            });
        });
    }
    //Get current coordinates of device
    getGeolocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.geolocation.getCurrentPosition().then((resp) => {
                this.useMyPosition = true;
                this.geoLatitude = resp.coords.latitude;
                this.geoLongitude = resp.coords.longitude;
                this.geoAccuracy = resp.coords.accuracy;
                this.getGeoencoder(this.geoLatitude, this.geoLongitude);
            }).catch((error) => {
                this.useMyPosition = false;
                console.log('error while getting position', error);
            });
        });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude) {
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then((result) => {
            this.geoAddress = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_8__["joinWithCommaOrEmpty"])(/* result[0].thoroughfare,*/ result[0].locality, result[0].subLocality, /* result[0].administrativeArea ,*/ result[0].countryName);
            this.userService.updateAddress(this.geoAddress, latitude, longitude).subscribe();
        })
            .catch((error) => {
            console.log(error);
            this.userService.updateAddress(null, latitude, longitude).subscribe();
        });
    }
    onUseMyPositionStatusChanged() {
        this.geoLatitude = null;
        this.geoLongitude = null;
        if (this.useMyPosition) {
            this.getGeolocation();
        }
        else if (this.lastSelectedZone) {
            this.geoLatitude = Number.parseFloat(this.lastSelectedZone.y);
            this.geoLongitude = Number.parseFloat(this.lastSelectedZone.x);
        }
    }
    onFilterChanged() {
        let useMyPosition = this.filter.indexOf(USE_OWN_LOCATION) != -1;
        this.useMyLanguage = this.filter.indexOf(USE_OWN_LANGUAGE) != -1;
        if (useMyPosition != this.useMyPosition) {
            this.useMyPosition = useMyPosition;
            this.onUseMyPositionStatusChanged();
        }
    }
    onZoneSelected(zone) {
        this.lastSelectedZone = zone;
        this.geoLatitude = Number.parseFloat(zone.y);
        this.geoLongitude = Number.parseFloat(zone.x);
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // do your on enter page stuff here
            setTimeout(() => {
                this.coffeeContainerVisibilitiy = 'visible';
                this.flipped = false;
            }, 100);
        });
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    findClosestUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.geoLatitude && this.geoLongitude) {
                this.ngZone.run(() => this.loadClass = 'coffee-load');
                this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance)
                    .subscribe(response => {
                    this.coffeeContainerVisibilitiy = 'gone';
                    this.ngZone.run(() => this.loadClass = '');
                    this.flipped = true;
                    this.openLocalizedUsersModal();
                }, error => {
                    this.loadClass = '';
                    console.log(error);
                    this.toastService.somethingWentWrong();
                });
            }
            else {
                this.toastService.alert(ENABLE_LOCALIZATION_KEY);
                this.getGeolocation();
            }
        });
    }
    openLocalizedUsersModal() {
        this.router.navigate(['localized-users']);
    }
    onRangeChanged() {
        this.getGeolocation();
    }
    // async presentPopover(ev: any, proposal: Proposal) {
    //   const popover = await this.popoverController.create({
    //     component: ProposalThreeDotsPopoverComponent,
    //     event: ev,
    //     translucent: true,
    //     componentProps:{
    //       userId : proposal.createdBy
    //     }
    //   });
    //   popover.onDidDismiss().then((hasDoneSomethingOverlay:OverlayEventDetail)=>{
    //     if(hasDoneSomethingOverlay.data){
    //       this.getGeolocation()
    //     }
    //   })
    //   return await popover.present();
    // }
    distanceInPercentage() {
        return this.maxDistance / 5000 * 100;
    }
};
HomePage.ctorParameters = () => [
    { type: _services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/_pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=_pages-home-home-module-es2015.js.map