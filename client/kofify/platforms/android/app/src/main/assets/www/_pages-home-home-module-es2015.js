(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  *ngIf=\"flipped\" (click)=\"flipIt()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"profile()\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      class=\"profile-img-btn\" [src]=\"userImg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding no-scroll\">\n  <h1 class=\"range-title\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"ios-pin\"></ion-icon>\n    {{maxDistance}} m\n  </h1>\n  <!-- <app-autocomplete-input [static]=\"true\" *ngIf=\"!useMyPosition\" ngDefaultControl  [placeholder]=\"'district'\" (onSearchResult)=\"onZoneSelected($event)\" [region]=\"selectedCity\" ></app-autocomplete-input> -->\n  <div class=\"range-wrapper\">\n    <ion-range *ngIf=\"!flipped\" (mouseup)=\"onRangeChanged()\" (touchend)=\"onRangeChanged()\" pin=\"true\" [(ngModel)]=\"maxDistance\"  min=\"50\" max=\"5000\" step=\"50\">\n    </ion-range>\n  </div>  \n\n  <div class=\"player border-radius-50\" [ngClass]=\"flipped ?'height-0':''\" [class.voted]=\"flipped\" color=\"primary\">\n    <div class=\"front flippable\" (click)=\"flipIt()\">\n      <div id=\"container flippable\" >\n        <div class=\"coffee-container flippable\">\n          <div [class]=\"'coffee-mug' + ' ' + coffeeContainerVisibilitiy\" >\n            <div class=\"coffee-container\">\n              <div [class]=\"'coffee' + ' ' + loadClass\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"back flippable\">\n      <div class=\"localized-users flippable\">\n        <div class=\"localized-users-wrapper\">\n          <!-- <h3>{{localizedUsers?.length}} {{'close_to_you' | translate}}</h3>\n            <ion-avatar *ngFor=\"let localizedUser of localizedUsers; let i = index\" class=\"localized-user-img\" \n            [style.z-index]=\"i+1\"\n            [style.margin-left]=\"( 31*(i + 1) /localizedUsers.length ) + 'px'\">\n            <img \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            class=\"localized-user-img-src\" [src]=\"localizedUser?.user?.profileImg\">\n          </ion-avatar> -->\n          \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"src-btn-main\">\n    <div class=\"src-button-container\" [ngClass]=\"flipped ?'width-20':''\">\n      <div class=\"src-btn-wrapper\">\n        <ion-button class=\"src-btn\" (click)=\"flipIt()\" class=\"src-btn\">\n          <ion-icon class=\"src-icon\" name=\"search\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  <!-- <span class=\"coffee-stain\"></span> -->\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background: #b09891; }\n\nlabel {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  display: block;\n  width: 320px;\n  height: 320px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  cursor: pointer; }\n\n.player {\n  box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  -webkit-box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  -moz-box-shadow: 0 4px 15px -2px rgba(0, 0, 0, 0.08);\n  /* background: #fff; */\n  position: relative;\n  height: 250px;\n  width: 250px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 600ms;\n  transition: all 600ms;\n  z-index: 20;\n  margin: 0 auto; }\n\n.player .flippable {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 50%;\n  margin: auto;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.player img {\n  border-radius: 50%; }\n\n.coffy-img-container {\n  z-index: 1;\n  -webkit-animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n.player .back {\n  color: #FFF;\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg); }\n\ninput {\n  display: none; }\n\n.player.voted {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg); }\n\n.circle {\n  border-radius: 50%;\n  background-color: #fff;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32); }\n\n@-webkit-keyframes scaleIn {\n  from {\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    -webkit-transform: scale(2.5, 2.5);\n            transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@keyframes scaleIn {\n  from {\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5);\n    opacity: .5; }\n  to {\n    -webkit-transform: scale(2.5, 2.5);\n            transform: scale(2.5, 2.5);\n    opacity: 0; } }\n\n@-webkit-keyframes scaleInWithoutDisapear {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 1; } }\n\n@keyframes scaleInWithoutDisapear {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: .8; }\n  50% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n    opacity: 0.5; }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 1; } }\n\n.profile-img-btn {\n  width: 32px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #222; }\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  left: 0;\n  right: 0; }\n\n.localized-users-wrapper {\n  position: relative;\n  width: 45%;\n  display: block;\n  text-align: center; }\n\n.localized-user-img-src {\n  background: white;\n  border: 2px solid #222; }\n\n.coffee-mug {\n  position: relative;\n  margin: 0 auto;\n  top: 34%;\n  width: 110px;\n  height: 100px;\n  border-radius: 2px 2px 50% 50%;\n  box-shadow: 0 0 0 3px #D1B378; }\n\n.coffee-mug:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 100%;\n    top: 10px;\n    width: 24px;\n    height: 42px;\n    box-shadow: 0 0 0 3px #D1B378;\n    margin-left: 2px;\n    border-radius: 0 20px 20px 0; }\n\n.coffee-mug .coffee-container {\n    position: absolute;\n    z-index: 10;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #FDF9F1;\n    border-radius: 2px 2px 50% 50%; }\n\n.coffee-mug .coffee-load {\n    -webkit-animation: coffee-load 3.3s infinite;\n            animation: coffee-load 3.3s infinite; }\n\n.coffee-mug .coffee-load:before {\n      -webkit-animation: coffee-wave .9s ease-in-out infinite;\n              animation: coffee-wave .9s ease-in-out infinite; }\n\n.coffee-mug .coffee {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: #6e4228;\n    -webkit-transform: translateY(80%);\n            transform: translateY(80%); }\n\n.coffee-mug .coffee:before {\n      content: '';\n      display: block;\n      width: 200%;\n      height: 1em;\n      position: absolute;\n      left: -50%;\n      top: -.5em;\n      background: #FDF9F1;\n      border-radius: 50%; }\n\n@-webkit-keyframes coffee-load {\n  0% {\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  70% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  90% {\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%); }\n  95% {\n    -webkit-transform: translateY(10%);\n            transform: translateY(10%); }\n  100% {\n    -webkit-transform: translateY(5%);\n            transform: translateY(5%); } }\n\n@keyframes coffee-load {\n  0% {\n    -webkit-transform: translateY(70%);\n            transform: translateY(70%); }\n  70% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  90% {\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%); }\n  95% {\n    -webkit-transform: translateY(10%);\n            transform: translateY(10%); }\n  100% {\n    -webkit-transform: translateY(5%);\n            transform: translateY(5%); } }\n\n.src-btn {\n  text-align: center;\n  display: block;\n  bottom: 15px;\n  margin: 50px auto;\n  --border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-top: 0px; }\n\n.src-button-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 13px;\n  -webkit-transition: width 600ms ease;\n  transition: width 600ms ease;\n  margin: 0 auto; }\n\n.src-btn-wrapper {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  border: 8px solid #FDF9F1;\n  box-shadow: 8px 0 21px rgba(0, 0, 0, 0.08); }\n\n.src-btn-main {\n  position: absolute;\n  bottom: 0;\n  height: 200px;\n  width: 100%;\n  bottom: -115px;\n  left: 0;\n  right: 0; }\n\n@-webkit-keyframes coffee-wave {\n  0% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  50% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  100% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); } }\n\n@keyframes coffee-wave {\n  0% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); }\n  50% {\n    -webkit-transform: rotate(-2deg);\n            transform: rotate(-2deg); }\n  100% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg); } }\n\n.range-title {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBaUIsRUFBQTs7QUFHckI7RUFDSSwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBSW5CO0VBRUksK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxvREFBb0Q7RUFDcEQsc0JBQUE7RUFDQSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDZCQUFxQjtFQUFyQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUVuQywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVTtFQUNWLDJGQUErRTtVQUEvRSxtRkFBK0UsRUFBQTs7QUFJbkY7RUFDSSxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSwwQkFBMEI7RUFDMUIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtF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QUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUE0QjtFQUE1Qiw0QkFBNEI7RUFDNUIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsMENBQTBDLEVBQUE7O0FBRTlDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUdaO0VBQ0k7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUFFM0I7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7RUFFNUI7SUFDSSwrQkFBdUI7WUFBdkIsdUJBQXVCLEVBQUEsRUFBQTs7QUFSL0I7RUFDSTtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUUzQjtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQSxFQUFBOztBQUsvQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kOiAjYjA5ODkxO1xufVxuXG5sYWJlbCB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4ucGxheWVyIHtcblxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAxNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XG4gICAgei1pbmRleDogMjA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuLnBsYXllciAuZmxpcHBhYmxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4ucGxheWVyIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvZmZ5LWltZy1jb250YWluZXJ7XG4gICAgei1pbmRleDogMTtcbiAgICBhbmltYXRpb246IHNjYWxlSW5XaXRob3V0RGlzYXBlYXIgMThzIGluZmluaXRlIGN1YmljLWJlemllciguMzYsIC4xMSwgLjg5LCAuMzIpO1xuICAgIFxufVxuXG4ucGxheWVyIC5iYWNrIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG5pbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYXllci52b3RlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGFuaW1hdGlvbjogc2NhbGVJbiA0cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcbn1cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjUsIC41KTtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUsIDIuNSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBzY2FsZUluV2l0aG91dERpc2FwZWFyIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4ucHJvZmlsZS1pbWctYnRue1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWd7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4ubG9jYWxpemVkLXVzZXJzLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0NSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvY2FsaXplZC11c2VyLWltZy1zcmN7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbn1cblxuXG5cblxuXG5cblxuXG4kY29sb3Itd2hpdGU6ICNGREY5RjE7XG4kY29sb3ItbXVnOiAjRDFCMzc4O1xuJGNvbG9yLWNvZmZlZTogIzZlNDIyODtcblxuLmNvZmZlZS1tdWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDM0JTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDUwJSA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICRjb2xvci1tdWc7XG4gICAgXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAkY29sb3ItbXVnO1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xuICAgIH1cbiAgICBcbiAgICAuY29mZmVlLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDUwJSA1MCU7XG4gICAgfVxuICAgIFxuICAgIC5jb2ZmZWUtbG9hZHtcbiAgICAgICAgYW5pbWF0aW9uOiBjb2ZmZWUtbG9hZCAzLjNzIGluZmluaXRlO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBhbmltYXRpb246IGNvZmZlZS13YXZlIC45cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY29mZmVlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1jb2ZmZWU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4MCUpO1xuICAgICAgICBcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAtNTAlO1xuICAgICAgICAgICAgdG9wOiAtLjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIGNvZmZlZS1sb2FkIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gICAgfVxuICAgIDk1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcbiAgICB9XG59XG5cbi5zcmMtYnRue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3R0b206IDE1cHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnNyYy1idXR0b24tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA2MDBtcyBlYXNlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLnNyYy1idG4td3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjRkRGOUYxO1xuICAgIGJveC1zaGFkb3c6IDhweCAwIDIxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5zcmMtYnRuLW1haW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogLTExNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbkBrZXlmcmFtZXMgY29mZmVlLXdhdmUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgIH1cbn1cblxuXG4ucmFuZ2UtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
    constructor(coffeeService, userService, geolocation, platform, popoverController, ngZone, oneSignal, router, authService, toastService, nativeGeocoder) {
        this.coffeeService = coffeeService;
        this.userService = userService;
        this.geolocation = geolocation;
        this.platform = platform;
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
            this.platform.ready().then(() => {
                this.getGeolocation();
                this.onEnter();
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
        });
    }
    //Get current coordinates of device
    getGeolocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('getting current position method');
            let self = this;
            navigator.geolocation.getCurrentPosition(function (resp) {
                console.log('promise');
                self.useMyPosition = true;
                self.geoLatitude = resp.coords.latitude;
                self.geoLongitude = resp.coords.longitude;
                self.geoAccuracy = resp.coords.accuracy;
                self.getGeoencoder(self.geoLatitude, self.geoLongitude);
            }, function (error) {
                self.useMyPosition = false;
                console.log('error while getting position', error);
            }, {
                enableHighAccuracy: false,
                timeout: 15000,
                maximumAge: 0
            });
        });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude, longitude) {
        console.log('reverse gocode');
        this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
            .then((result) => {
            console.log('updating position');
            this.geoAddress = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_8__["joinWithCommaOrEmpty"])(/* result[0].thoroughfare,*/ result[0].locality, result[0].subLocality, /* result[0].administrativeArea ,*/ result[0].countryName);
            this.userService.updateAddress(this.geoAddress, latitude, longitude).subscribe(response => console.log(response));
        })
            .catch((error) => {
            console.log(error);
            this.userService.updateAddress(null, latitude, longitude).subscribe(response => console.log(response));
        });
    }
    onUseMyPositionStatusChanged() {
        this.geoLatitude = null;
        this.geoLongitude = null;
        if (this.useMyPosition) {
            console.log('getting geolocation');
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
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