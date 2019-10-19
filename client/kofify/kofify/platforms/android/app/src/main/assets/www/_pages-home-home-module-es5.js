function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  *ngIf=\"flipped\" (click)=\"flipIt()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"profile()\">\n      <img \n      onError=\"this.src='../../assets/imgs/user.svg';\"       \n      class=\"profile-img-btn\" [src]=\"userImg\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content class=\"ion-padding\">\n  <!-- <app-autocomplete-input [static]=\"true\" *ngIf=\"!useMyPosition\" ngDefaultControl  [placeholder]=\"'district'\" (onSearchResult)=\"onZoneSelected($event)\" [region]=\"selectedCity\" ></app-autocomplete-input> -->\n  <ion-range *ngIf=\"!flipped\" (mouseup)=\"onRangeChanged()\" (touchend)=\"onRangeChanged()\" pin=\"true\" [(ngModel)]=\"maxDistance\"  min=\"50\" max=\"5000\" step=\"2\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"walk\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"walk\"></ion-icon>\n  </ion-range>\n  \n    <div class=\"player border-radius-50\" [ngClass]=\"flipped ?'height-0':''\" [class.voted]=\"flipped\" color=\"primary\">\n      <div class=\"front flippable\" (click)=\"flipIt()\" >\n        <div id=\"container flippable\" >\n          <div class=\"coffee-container flippable\">\n            <!-- <img src=\"/src/assets/imgs/coffee.svg\"> -->\n          <div [class]=\"'coffee-mug' + ' ' + coffeeContainerVisibilitiy\" >\n            <div class=\"coffee-container\">\n              <div [class]=\"'coffee' + ' ' + loadClass\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      <div class=\"back flippable\">\n        <div class=\"localized-users flippable\">\n          <div class=\"localized-users-wrapper\">\n            <!-- <h3>{{localizedUsers?.length}} {{'close_to_you' | translate}}</h3>\n            <ion-avatar *ngFor=\"let localizedUser of localizedUsers; let i = index\" class=\"localized-user-img\" \n            [style.z-index]=\"i+1\"\n            [style.margin-left]=\"( 31*(i + 1) /localizedUsers.length ) + 'px'\">\n            <img \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            class=\"localized-user-img-src\" [src]=\"localizedUser?.user?.profileImg\">\n          </ion-avatar> -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-button (click)=\"flipIt()\" class=\"src-btn\">{{'find' | translate}}</ion-button>\n\n<!-- <span class=\"coffee-stain\"></span> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/_pages/home/home.module.ts":
  /*!********************************************!*\
    !*** ./src/app/_pages/home/home.module.ts ***!
    \********************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcApp_pagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/_pages/home/home.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/_pages/home/home.page.scss":
  /*!********************************************!*\
    !*** ./src/app/_pages/home/home.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --ion-background: #b09891;\n}\n\nlabel {\n  perspective: 1000px;\n  transform-style: preserve-3d;\n  display: block;\n  width: 320px;\n  height: 320px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n\n.player {\n  box-shadow: 0 4px 2px -2px grey;\n  -webkit-box-shadow: 0 4px 2px -2px grey;\n  -moz-box-shadow: 0 4px 2px -2px gray;\n  /* background: #fff; */\n  position: relative;\n  height: 250px;\n  width: 250px;\n  transform-style: preserve-3d;\n  transition: all 600ms;\n  z-index: 20;\n  margin: 0 auto;\n}\n\n.player .flippable {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 50%;\n  margin: auto;\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.player img {\n  border-radius: 50%;\n}\n\n.coffy-img-container {\n  z-index: 1;\n  -webkit-animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleInWithoutDisapear 18s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n}\n\n.player .back {\n  color: #FFF;\n  transform: rotateY(180deg);\n}\n\ninput {\n  display: none;\n}\n\n.player.voted {\n  transform: rotateY(180deg);\n  -webkit-transform: rotateY(180deg);\n}\n\n.circle {\n  border-radius: 50%;\n  background-color: #fff;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  -webkit-animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n          animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n}\n\n@-webkit-keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0;\n  }\n}\n\n@keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n}\n\n@keyframes scaleInWithoutDisapear {\n  0% {\n    transform: scale(1, 1);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.2, 1.2);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n}\n\n.profile-img-btn {\n  width: 32px;\n  height: 32px;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #222;\n}\n\n.localized-user-img {\n  width: 90px;\n  height: 90px;\n  left: 0;\n  right: 0;\n}\n\n.localized-users-wrapper {\n  position: relative;\n  width: 45%;\n  display: block;\n  text-align: center;\n}\n\n.localized-user-img-src {\n  background: white;\n  border: 2px solid #222;\n}\n\n.coffee-mug {\n  position: relative;\n  margin: 0 auto;\n  top: 34%;\n  width: 110px;\n  height: 100px;\n  border-radius: 2px 2px 50% 50%;\n  box-shadow: 0 0 0 3px #D1B378;\n}\n\n.coffee-mug:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 100%;\n  top: 10px;\n  width: 24px;\n  height: 42px;\n  box-shadow: 0 0 0 3px #D1B378;\n  margin-left: 2px;\n  border-radius: 0 20px 20px 0;\n}\n\n.coffee-mug .coffee-container {\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #FDF9F1;\n  border-radius: 2px 2px 50% 50%;\n}\n\n.coffee-mug .coffee-load {\n  -webkit-animation: coffee-load 3.3s infinite;\n          animation: coffee-load 3.3s infinite;\n}\n\n.coffee-mug .coffee-load:before {\n  -webkit-animation: coffee-wave 0.9s ease-in-out infinite;\n          animation: coffee-wave 0.9s ease-in-out infinite;\n}\n\n.coffee-mug .coffee {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #6e4228;\n  transform: translateY(80%);\n}\n\n.coffee-mug .coffee:before {\n  content: \"\";\n  display: block;\n  width: 200%;\n  height: 1em;\n  position: absolute;\n  left: -50%;\n  top: -0.5em;\n  background: #FDF9F1;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes coffee-load {\n  0% {\n    transform: translateY(70%);\n  }\n  70% {\n    transform: translateY(50%);\n  }\n  90% {\n    transform: translateY(20%);\n  }\n  95% {\n    transform: translateY(10%);\n  }\n  100% {\n    transform: translateY(5%);\n  }\n}\n\n@keyframes coffee-load {\n  0% {\n    transform: translateY(70%);\n  }\n  70% {\n    transform: translateY(50%);\n  }\n  90% {\n    transform: translateY(20%);\n  }\n  95% {\n    transform: translateY(10%);\n  }\n  100% {\n    transform: translateY(5%);\n  }\n}\n\nion-button.src-btn {\n  height: 50px;\n  z-index: 9999999999;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  width: 20%;\n  margin: 0 auto;\n}\n\n@-webkit-keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg);\n  }\n  50% {\n    transform: rotate(-2deg);\n  }\n  100% {\n    transform: rotate(2deg);\n  }\n}\n\n@keyframes coffee-wave {\n  0% {\n    transform: rotate(2deg);\n  }\n  50% {\n    transform: rotate(-2deg);\n  }\n  100% {\n    transform: rotate(2deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmNoaW1lZGlhL3Byb2plY3RzL2tva2lmeS9pY2VicmVha2VyL2NsaWVudC9rb2ZpZnkva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL19wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUVJLG1CQUFBO0VBRUEsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFFQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksVUFBQTtFQUNBLDJGQUFBO1VBQUEsbUZBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7RUFFQSwwQkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7RUFDQSxrQ0FBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NKOztBRENBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLFlBQUE7RUNFTjtFREFFO0lBQ0ksMEJBQUE7SUFDQSxVQUFBO0VDRU47QUFDRjs7QURWQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSxZQUFBO0VDRU47RURBRTtJQUNJLDBCQUFBO0lBQ0EsVUFBQTtFQ0VOO0FBQ0Y7O0FEQUE7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsWUFBQTtFQ0VOO0VEQUU7SUFDSSwwQkFBQTtJQUNBLFlBQUE7RUNFTjtFREFFO0lBQ0ksc0JBQUE7SUFDQSxVQUFBO0VDRU47QUFDRjs7QURkQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxZQUFBO0VDRU47RURBRTtJQUNJLDBCQUFBO0lBQ0EsWUFBQTtFQ0VOO0VEQUU7SUFDSSxzQkFBQTtJQUNBLFVBQUE7RUNFTjtBQUNGOztBREFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ05KOztBRFFJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNOUjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQWxDTTtFQW1DTiw4QkFBQTtBQ1BSOztBRFVJO0VBQ0ksNENBQUE7VUFBQSxvQ0FBQTtBQ1JSOztBRFNRO0VBQ0ksd0RBQUE7VUFBQSxnREFBQTtBQ1BaOztBRFdJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBakRPO0VBa0RQLDBCQUFBO0FDVFI7O0FEV1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQTlERTtFQStERixrQkFBQTtBQ1RaOztBRGVBO0VBQ0k7SUFDSSwwQkFBQTtFQ1pOO0VEY0U7SUFDSSwwQkFBQTtFQ1pOO0VEY0U7SUFDSSwwQkFBQTtFQ1pOO0VEY0U7SUFDSSwwQkFBQTtFQ1pOO0VEY0U7SUFDSSx5QkFBQTtFQ1pOO0FBQ0Y7O0FESEE7RUFDSTtJQUNJLDBCQUFBO0VDWk47RURjRTtJQUNJLDBCQUFBO0VDWk47RURjRTtJQUNJLDBCQUFBO0VDWk47RURjRTtJQUNJLDBCQUFBO0VDWk47RURjRTtJQUNJLHlCQUFBO0VDWk47QUFDRjs7QURjQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNaSjs7QURjQTtFQUNJO0lBQ0ksdUJBQUE7RUNYTjtFRGFFO0lBQ0ksd0JBQUE7RUNYTjtFRGFFO0lBQ0ksdUJBQUE7RUNYTjtBQUNGOztBREVBO0VBQ0k7SUFDSSx1QkFBQTtFQ1hOO0VEYUU7SUFDSSx3QkFBQTtFQ1hOO0VEYUU7SUFDSSx1QkFBQTtFQ1hOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9fcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQ6ICNiMDk4OTE7XG59XG5cbmxhYmVsIHtcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGxheWVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmV5O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JleTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gICAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5cbi5wbGF5ZXIgLmZsaXBwYWJsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwMHB4O1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnBsYXllciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jb2ZmeS1pbWctY29udGFpbmVye1xuICAgIHotaW5kZXg6IDE7XG4gICAgYW5pbWF0aW9uOiBzY2FsZUluV2l0aG91dERpc2FwZWFyIDE4cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoLjM2LCAuMTEsIC44OSwgLjMyKTtcbiAgICBcbn1cblxuLnBsYXllciAuYmFjayB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wbGF5ZXIudm90ZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IHNjYWxlSW4gNHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4zNiwgLjExLCAuODksIC4zMik7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41LCAuNSk7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41LCAyLjUpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGVJbldpdGhvdXREaXNhcGVhciB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuLnByb2ZpbGUtaW1nLWJ0bntcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMjI7XG59XG4ubG9jYWxpemVkLXVzZXItaW1ne1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmxvY2FsaXplZC11c2Vycy13cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2NhbGl6ZWQtdXNlci1pbWctc3Jje1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG5cblxuXG5cblxuXG5cblxuJGNvbG9yLXdoaXRlOiAjRkRGOUYxO1xuJGNvbG9yLW11ZzogI0QxQjM3ODtcbiRjb2xvci1jb2ZmZWU6ICM2ZTQyMjg7XG5cbi5jb2ZmZWUtbXVnIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAzNCU7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA1MCUgNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAkY29sb3ItbXVnO1xuICAgIFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggJGNvbG9yLW11ZztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgICB9XG4gICAgXG4gICAgLmNvZmZlZS1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA1MCUgNTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29mZmVlLWxvYWR7XG4gICAgICAgIGFuaW1hdGlvbjogY29mZmVlLWxvYWQgMy4zcyBpbmZpbml0ZTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBjb2ZmZWUtd2F2ZSAuOXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNvZmZlZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItY29mZmVlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKTtcbiAgICAgICAgXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMjAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgICAgIHRvcDogLS41ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBjb2ZmZWUtbG9hZCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzAlKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgIH1cbiAgICA5NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XG4gICAgfVxufVxuaW9uLWJ1dHRvbi5zcmMtYnRue1xuICAgIGhlaWdodDogNTBweDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogNTBweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuQGtleWZyYW1lcyBjb2ZmZWUtd2F2ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kOiAjYjA5ODkxO1xufVxuXG5sYWJlbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wbGF5ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmV5O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyZXk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggMnB4IC0ycHggZ3JheTtcbiAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xuICB6LWluZGV4OiAyMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wbGF5ZXIgLmZsaXBwYWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjAwcHg7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLnBsYXllciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb2ZmeS1pbWctY29udGFpbmVyIHtcbiAgei1pbmRleDogMTtcbiAgYW5pbWF0aW9uOiBzY2FsZUluV2l0aG91dERpc2FwZWFyIDE4cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zNiwgMC4xMSwgMC44OSwgMC4zMik7XG59XG5cbi5wbGF5ZXIgLmJhY2sge1xuICBjb2xvcjogI0ZGRjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBsYXllci52b3RlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDRzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM2LCAwLjExLCAwLjg5LCAwLjMyKTtcbn1cblxuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuNSk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSwgMi41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNjYWxlSW5XaXRob3V0RGlzYXBlYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ucHJvZmlsZS1pbWctYnRuIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbn1cblxuLmxvY2FsaXplZC11c2VyLWltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9jYWxpemVkLXVzZXJzLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2NhbGl6ZWQtdXNlci1pbWctc3JjIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjI7XG59XG5cbi5jb2ZmZWUtbXVnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiAzNCU7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA1MCUgNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggI0QxQjM3ODtcbn1cbi5jb2ZmZWUtbXVnOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggI0QxQjM3ODtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbn1cbi5jb2ZmZWUtbXVnIC5jb2ZmZWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjRkRGOUYxO1xuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDUwJSA1MCU7XG59XG4uY29mZmVlLW11ZyAuY29mZmVlLWxvYWQge1xuICBhbmltYXRpb246IGNvZmZlZS1sb2FkIDMuM3MgaW5maW5pdGU7XG59XG4uY29mZmVlLW11ZyAuY29mZmVlLWxvYWQ6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBjb2ZmZWUtd2F2ZSAwLjlzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuLmNvZmZlZS1tdWcgLmNvZmZlZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNmU0MjI4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODAlKTtcbn1cbi5jb2ZmZWUtbXVnIC5jb2ZmZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTAlO1xuICB0b3A6IC0wLjVlbTtcbiAgYmFja2dyb3VuZDogI0ZERjlGMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5Aa2V5ZnJhbWVzIGNvZmZlZS1sb2FkIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MCUpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XG4gIH1cbn1cbmlvbi1idXR0b24uc3JjLWJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1MHB4O1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQGtleWZyYW1lcyBjb2ZmZWUtd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_pages/home/home.page.ts":
  /*!******************************************!*\
    !*** ./src/app/_pages/home/home.page.ts ***!
    \******************************************/

  /*! exports provided: HomePage */

  /***/
  function srcApp_pagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_coffe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/coffe.service */
    "./src/app/_services/coffe.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _utils_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../_utils/functions */
    "./src/app/_utils/functions.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../_services/toast.service */
    "./src/app/_services/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var USE_OWN_LOCATION = 'useMyPosition';
    var USE_OWN_LANGUAGE = 'useMyLanguage';
    var ENABLE_LOCALIZATION_KEY = 'enable_localization'; // for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(coffeeService, userService, geolocation, popoverController, ngZone, oneSignal, router, authService, toastService, nativeGeocoder) {
        _classCallCheck(this, HomePage);

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
          header: 'filter'
        };
        this.filter = [USE_OWN_LOCATION, USE_OWN_LANGUAGE];
        this.flipped = false;
        this.coffeeContainerVisibilitiy = 'visibile';
        this.useMyPosition = true;
        this.useMyLanguage = true;
        this.maxDistance = 2500;
        this.loadClass = ''; //Geocoder configuration

        this.geoencoderOptions = {
          useLocale: true,
          maxResults: 5
        }; //todo: remove mock parameters

        this.geoLongitude = 9.164747499999999;
        this.geoLatitude = 45.480588499999996;

        var _this = this;

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

      _createClass(HomePage, [{
        key: "flipIt",
        value: function flipIt() {
          if (this.flipped == false) {
            console.log('finding...');
            this.findClosestUsers();
          } else {
            this.flipped = true;
            this.coffeeContainerVisibilitiy = 'visibile';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.getGeolocation();
                    _context.next = 3;
                    return this.onEnter();

                  case 3:
                    this.navSubscription = this.router.events.subscribe(function (event) {
                      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"] && event.url === '/tabs/home') {
                        _this2.onEnter();
                      }
                    });
                    this.authService.userInfo().subscribe(function (data) {
                      console.log(data);
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["from"])(this.oneSignal.getIds()).subscribe(function (data) {
                      _this2.userService.subscribeToPushNotifications(data.userId, data.pushToken).subscribe();
                    });
                    this.authService.currentUser.subscribe(function (user) {
                      _this2.userImg = user && user.profileImg;
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //Get current coordinates of device

      }, {
        key: "getGeolocation",
        value: function getGeolocation() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.geolocation.getCurrentPosition().then(function (resp) {
                      _this3.useMyPosition = true;
                      _this3.geoLatitude = resp.coords.latitude;
                      _this3.geoLongitude = resp.coords.longitude;
                      _this3.geoAccuracy = resp.coords.accuracy;

                      _this3.getGeoencoder(_this3.geoLatitude, _this3.geoLongitude);
                    }).catch(function (error) {
                      _this3.useMyPosition = false;
                      console.log('error while getting position', error);
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } //geocoder method to fetch address from coordinates passed as arguments

      }, {
        key: "getGeoencoder",
        value: function getGeoencoder(latitude, longitude) {
          var _this4 = this;

          this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions).then(function (result) {
            _this4.geoAddress = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_8__["joinWithCommaOrEmpty"])(
            /* result[0].thoroughfare,*/
            result[0].locality, result[0].subLocality,
            /* result[0].administrativeArea ,*/
            result[0].countryName);

            _this4.userService.updateAddress(_this4.geoAddress, latitude, longitude).subscribe();
          }).catch(function (error) {
            console.log(error);

            _this4.userService.updateAddress(null, latitude, longitude).subscribe();
          });
        }
      }, {
        key: "onUseMyPositionStatusChanged",
        value: function onUseMyPositionStatusChanged() {
          this.geoLatitude = null;
          this.geoLongitude = null;

          if (this.useMyPosition) {
            this.getGeolocation();
          } else if (this.lastSelectedZone) {
            this.geoLatitude = Number.parseFloat(this.lastSelectedZone.y);
            this.geoLongitude = Number.parseFloat(this.lastSelectedZone.x);
          }
        }
      }, {
        key: "onFilterChanged",
        value: function onFilterChanged() {
          var useMyPosition = this.filter.indexOf(USE_OWN_LOCATION) != -1;
          this.useMyLanguage = this.filter.indexOf(USE_OWN_LANGUAGE) != -1;

          if (useMyPosition != this.useMyPosition) {
            this.useMyPosition = useMyPosition;
            this.onUseMyPositionStatusChanged();
          }
        }
      }, {
        key: "onZoneSelected",
        value: function onZoneSelected(zone) {
          this.lastSelectedZone = zone;
          this.geoLatitude = Number.parseFloat(zone.y);
          this.geoLongitude = Number.parseFloat(zone.x);
        } //Return Comma saperated address

      }, {
        key: "generateAddress",
        value: function generateAddress(addressObj) {
          var obj = [];
          var address = "";

          for (var key in addressObj) {
            obj.push(addressObj[key]);
          }

          obj.reverse();

          for (var val in obj) {
            if (obj[val].length) address += obj[val] + ', ';
          }

          return address.slice(0, -2);
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // do your on enter page stuff here
                    setTimeout(function () {
                      _this5.coffeeContainerVisibilitiy = 'visible';
                      _this5.flipped = false;
                    }, 100);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navSubscription.unsubscribe();
        }
      }, {
        key: "findClosestUsers",
        value: function findClosestUsers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.geoLatitude && this.geoLongitude) {
                      this.ngZone.run(function () {
                        return _this6.loadClass = 'coffee-load';
                      });
                      console.log('fiiiii...');
                      this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance).subscribe(function (response) {
                        _this6.coffeeContainerVisibilitiy = 'gone';

                        _this6.ngZone.run(function () {
                          return _this6.loadClass = '';
                        });

                        _this6.flipped = true;

                        _this6.openLocalizedUsersModal();
                      }, function (error) {
                        console.log('found (error ahah, nothing to laught)' + error);
                        _this6.loadClass = '';
                        console.log(error);

                        _this6.toastService.somethingWentWrong();
                      });
                    } else {
                      this.toastService.alert(ENABLE_LOCALIZATION_KEY);
                      this.getGeolocation();
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openLocalizedUsersModal",
        value: function openLocalizedUsersModal() {
          this.router.navigate(['localized-users']);
        }
      }, {
        key: "onRangeChanged",
        value: function onRangeChanged() {
          this.getGeolocation();
        } // async presentPopover(ev: any, proposal: Proposal) {
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

      }, {
        key: "distanceInPercentage",
        value: function distanceInPercentage() {
          return this.maxDistance / 5000 * 100;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/_pages/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_11__["OneSignal"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeGeocoder"]])], HomePage);
    /***/
  }
}]); //# sourceMappingURL=_pages-home-home-module-es2015.js.map
//# sourceMappingURL=_pages-home-home-module-es5.js.map