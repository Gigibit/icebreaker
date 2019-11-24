(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  *ngIf=\"flipped\" (click)=\"flipIt()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"profile()\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      class=\"profile-img-btn\" [src]=\"userImg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding\">\n  <!-- <app-autocomplete-input [static]=\"true\" *ngIf=\"!useMyPosition\" ngDefaultControl  [placeholder]=\"'district'\" (onSearchResult)=\"onZoneSelected($event)\" [region]=\"selectedCity\" ></app-autocomplete-input> -->\n  <ion-range *ngIf=\"!flipped\" (mouseup)=\"onRangeChanged()\" (touchend)=\"onRangeChanged()\" pin=\"true\" [(ngModel)]=\"maxDistance\"  min=\"50\" max=\"5000\" step=\"2\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"walk\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"walk\"></ion-icon>\n  </ion-range>\n  \n    <div class=\"player border-radius-50\" [ngClass]=\"flipped ?'height-0':''\" [class.voted]=\"flipped\" color=\"primary\">\n      <div class=\"front flippable\" (click)=\"flipIt()\" >\n        <div id=\"container flippable\" >\n          <div class=\"coffee-container flippable\">\n            <!-- <img src=\"/src/assets/imgs/coffee.svg\"> -->\n          <div [class]=\"'coffee-mug' + ' ' + coffeeContainerVisibilitiy\" >\n            <div class=\"coffee-container\">\n              <div [class]=\"'coffee' + ' ' + loadClass\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      <div class=\"back flippable\">\n        <div class=\"localized-users flippable\">\n          <div class=\"localized-users-wrapper\">\n            <!-- <h3>{{localizedUsers?.length}} {{'close_to_you' | translate}}</h3>\n            <ion-avatar *ngFor=\"let localizedUser of localizedUsers; let i = index\" class=\"localized-user-img\" \n            [style.z-index]=\"i+1\"\n            [style.margin-left]=\"( 31*(i + 1) /localizedUsers.length ) + 'px'\">\n            <img \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            class=\"localized-user-img-src\" [src]=\"localizedUser?.user?.profileImg\">\n          </ion-avatar> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-button (click)=\"flipIt()\" class=\"src-btn\">{{'find' | translate}}</ion-button>\n\n<!-- <span class=\"coffee-stain\"></span> -->\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background: #b09891; }\n\nlabel {\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  width: 320px;\n  height: 320px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer; }\n\n.player {\n  box-shadow: 0 4px 2px -2px grey;\n  -webkit-box-shadow: 0 4px 2px -2px grey;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  /* background: #fff; */\n  position: relative;\n  height: 250px;\n  width: 250px;\n  transform-style: preserve-3d;\n  transition: all 600ms;\n  z-index: 20;\n  margin: 0 auto; }\n\n.player .flippable {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 50%;\n  margin: auto;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.player img {\n  border-radius: 50%; }\n\n.coffy-img-container {\n  z-index: 1;\n  -webkit-animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n.player .back {\n  color: #FFF;\n  transform: rotateY(180deg); }\n\ninput {\n  display: none; }\n\n.player.voted {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg); }\n\n.circle {\n  border-radius: 50%;\n  background-color: #fff;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n@-webkit-keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@-webkit-keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1; } }\n\n.profile-img-btn {\n  width: 32px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #222; }\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  left: 0;\n  right: 0; }\n\n.localized-users-wrapper {\n  position: relative;\n  width: 45%;\n  display: block;\n  text-align: center; }\n\n.localized-user-img-src {\n  background: white;\n  border: 2px solid #222; }\n\n.coffee-mug {\n  position: relative;\n  margin: 0 auto;\n  top: 34%;\n  width: 110px;\n  height: 100px;\n  border-radius: 2px 2px 50% 50%;\n  box-shadow: 0 0 0 3px #D1B378; }\n\n.coffee-mug:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 10px;\n    width: 24px;\n    height: 42px;\n    box-shadow: 0 0 0 3px #D1B378;\n    margin-left: 2px;\n    border-radius: 0 20px 20px 0; }\n\n.coffee-mug .coffee-container {\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #FDF9F1;\n    border-radius: 2px 2px 50% 50%; }\n\n.coffee-mug .coffee-load {\n    -webkit-animation: coffee-load 3.3s infinite;\n            animation: coffee-load 3.3s infinite; }\n\n.coffee-mug .coffee-load:before {\n      -webkit-animation: coffee-wave .9s ease-in-out infinite;\n              animation: coffee-wave .9s ease-in-out infinite; }\n\n.coffee-mug .coffee {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #6e4228;\n    transform: translateY(80%); }\n\n.coffee-mug .coffee:before {\n      content: '';\n      display: block;\n      width: 200%;\n      height: 1em;\n      position: absolute;\n      left: -50%;\n      top: -.5em;\n      background: #FDF9F1;\n      border-radius: 50%; }\n\n@-webkit-keyframes coffee-load {\n  0% {\n    transform: translateY(70%); }\n  70% {\n    transform: translateY(50%); }\n  90% {\n    transform: translateY(20%); }\n  95% {\n    transform: translateY(10%); }\n  100% {\n    transform: translateY(5%); } }\n\n@keyframes coffee-load {\n  0% {\n    transform: translateY(70%); }\n  70% {\n    transform: translateY(50%); }\n  90% {\n    transform: translateY(20%); }\n  95% {\n    transform: translateY(10%); }\n  100% {\n    transform: translateY(5%); } }\n\nion-button.src-btn {\n  height: 50px;\n  z-index: 9999999999;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  width: 20%;\n  margin: 0 auto; }\n\n@-webkit-keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg); }\n  50% {\n    transform: rotate(-2deg); }\n  100% {\n    transform: rotate(2deg); } }\n\n@keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg); }\n  50% {\n    transform: rotate(-2deg); }\n  100% {\n    transform: rotate(2deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFpQixFQUFBOztBQUdyQjtFQUVJLG1CQUFtQjtFQUVuQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBRVIsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwrQkFBK0I7RUFDL0IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxzQkFBQTtFQUNBLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUVaLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUVuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVTtFQUNWLDJGQUErRTtVQUEvRSxtRkFBK0UsRUFBQTs7QUFJbkY7RUFDSSxXQUFXO0VBRVgsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLDBCQUEwQjtFQUMxQixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwyRUFBK0Q7VUFBL0QsbUVBQStELEVBQUE7O0FBRW5FO0VBQ0k7SUFDSSwwQkFBd0I7SUFDeEIsV0FBVyxFQUFBO0VBRWY7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7O0FBUGxCO0VBQ0k7SUFDSSwwQkFBd0I7SUFDeEIsV0FBVyxFQUFBO0VBRWY7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7O0FBR2xCO0VBQ0k7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBRWY7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWSxFQUFBO0VBRWhCO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVUsRUFBQSxFQUFBOztBQVhsQjtFQUNJO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQUVmO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVksRUFBQTtFQUVoQjtJQUNJLHNCQUFzQjtJQUN0QixVQUFVLEVBQUEsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUVaO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQWMxQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQVZlLEVBQUE7O0FBR25CO0lBVVEsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQXBCVztJQXFCWCxnQkFBZ0I7SUFDaEIsNEJBQTRCLEVBQUE7O0FBbkJwQztJQXVCUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBbENhO0lBbUNiLDhCQUE4QixFQUFBOztBQS9CdEM7SUFtQ1EsNENBQW9DO1lBQXBDLG9DQUFvQyxFQUFBOztBQW5DNUM7TUFxQ1ksdURBQStDO2NBQS9DLCtDQUErQyxFQUFBOztBQXJDM0Q7SUEwQ1Esa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixtQkFqRGM7SUFrRGQsMEJBQTBCLEVBQUE7O0FBaERsQztNQW1EWSxXQUFXO01BQ1gsY0FBYztNQUNkLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixVQUFVO01BQ1YsbUJBOURTO01BK0RULGtCQUFrQixFQUFBOztBQU05QjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7SUFDSSx5QkFBeUIsRUFBQSxFQUFBOztBQWRqQztFQUNJO0lBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksMEJBQTBCLEVBQUE7RUFFOUI7SUFDSSx5QkFBeUIsRUFBQSxFQUFBOztBQUdqQztFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBRWxCO0VBQ0k7SUFDSSx1QkFBdUIsRUFBQTtFQUUzQjtJQUNJLHdCQUF3QixFQUFBO0VBRTVCO0lBQ0ksdUJBQXVCLEVBQUEsRUFBQTs7QUFSL0I7RUFDSTtJQUNJLHVCQUF1QixFQUFBO0VBRTNCO0lBQ0ksd0JBQXdCLEVBQUE7RUFFNUI7SUFDSSx1QkFBdUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kOiAjYjA5ODkxO1xufVxuXG5sYWJlbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBsYXllciB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JleTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyZXk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcbiAgICB6LWluZGV4OiAyMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4ucGxheWVyIC5mbGlwcGFibGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG59XG5cbi5wbGF5ZXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY29mZnktaW1nLWNvbnRhaW5lcntcbiAgICB6LWluZGV4OiAxO1xuICAgIGFuaW1hdGlvbjogc2NhbGVJbldpdGhvdXREaXNhcGVhciAxOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4zNiwgLjExLCAuODksIC4zMik7XG4gICAgXG59XG5cbi5wbGF5ZXIgLmJhY2sge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGxheWVyLnZvdGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmNpcmNsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYW5pbWF0aW9uOiBzY2FsZUluIDRzIGluZmluaXRlIGN1YmljLWJlemllciguMzYsIC4xMSwgLjg5LCAuMzIpO1xufVxuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSwgLjUpO1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSwgMi41KTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlSW5XaXRob3V0RGlzYXBlYXIge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cbi5wcm9maWxlLWltZy1idG57XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xufVxuLmxvY2FsaXplZC11c2VyLWltZ3tcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cbi5sb2NhbGl6ZWQtdXNlcnMtd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9jYWxpemVkLXVzZXItaW1nLXNyY3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjIyO1xufVxuXG5cblxuXG5cblxuXG5cbiRjb2xvci13aGl0ZTogI0ZERjlGMTtcbiRjb2xvci1tdWc6ICNEMUIzNzg7XG4kY29sb3ItY29mZmVlOiAjNmU0MjI4O1xuXG4uY29mZmVlLW11ZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRvcDogMzQlO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggNTAlIDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggJGNvbG9yLW11ZztcbiAgICBcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICRjb2xvci1tdWc7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XG4gICAgfVxuICAgIFxuICAgIC5jb2ZmZWUtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggNTAlIDUwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvZmZlZS1sb2Fke1xuICAgICAgICBhbmltYXRpb246IGNvZmZlZS1sb2FkIDMuM3MgaW5maW5pdGU7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogY29mZmVlLXdhdmUgLjlzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jb2ZmZWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWNvZmZlZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDgwJSk7XG4gICAgICAgIFxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IC01MCU7XG4gICAgICAgICAgICB0b3A6IC0uNWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBrZXlmcmFtZXMgY29mZmVlLWxvYWQge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwJSk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgICB9XG4gICAgOTUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpO1xuICAgIH1cbn1cbmlvbi1idXR0b24uc3JjLWJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbkBrZXlmcmFtZXMgY29mZmVlLXdhdmUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIH1cbn1cbiJdfQ== */");

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