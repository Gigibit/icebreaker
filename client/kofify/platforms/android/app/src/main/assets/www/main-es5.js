function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "../_pages/home/home.module": ["./src/app/_pages/home/home.module.ts", "_pages-home-home-module"],
      "../_pages/messages/messages.module": ["./src/app/_pages/messages/messages.module.ts", "_pages-messages-messages-module"],
      "../_pages/user-profile/user-profile.module": ["./src/app/_pages/user-profile/user-profile.module.ts", "_pages-user-profile-user-profile-module"],
      "./_pages/chat/chat.module": ["./src/app/_pages/chat/chat.module.ts"],
      "./_pages/landing/landing.module": ["./src/app/_pages/landing/landing.module.ts", "_pages-landing-landing-module"],
      "./_pages/localized-users/localized-users.module": ["./src/app/_pages/localized-users/localized-users.module.ts", "_pages-localized-users-localized-users-module"],
      "./_pages/login/login.module": ["./src/app/_pages/login/login.module.ts"],
      "./_pages/register/register.module": ["./src/app/_pages/register/register.module.ts"],
      "./_pages/view-profile/view-profile.module": ["./src/app/_pages/view-profile/view-profile.module.ts", "_pages-view-profile-view-profile-module"],
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts", "tabs-tabs-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/edit-user-profile/edit-user-profile.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/edit-user-profile/edit-user-profile.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsEditUserProfileEditUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"dismiss()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      {{'edit-profile-info'| translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\"  (click)=\"done(bio)\">\n      <ion-icon class=\"done-btn\" ios=\"ios-checkmark\" md=\"ios-checkmark\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"no-scroll\">\n  \n  <h3 *ngIf=\"userInfo?.images?.length == 0\" class=\"ion-text-center\">{{ 'please_add_image' | translate }}</h3>\n  <ion-grid>\n    <!-- <ion-row *ngFor=\"let rowData of images; index as pos\">\n      <ion-col col-6 col-md-4 col-xl-3 *ngFor=\"let img of rowData; index as pos\">\n        <div class=\"image-container\">\n          <img *ngIf=\"img\" [src]=\"img\" (click)=\"openPreview(img)\"/>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row dragula=\"VAMPIRES\" [(dragulaModel)]=\"imagesSorting\">\n      \n      <ion-col *ngFor=\"let i of imagesSorting\" \n            [attr.data-imageId]=\"userInfo?.imageIds && userInfo?.imageIds.length > i-1 && userInfo?.imageIds[i-1]\" \n            [attr.data-position]=\"userInfo?.images && userInfo?.images.length > i-1 && userInfo?.images[i-1] && i\" \n            class=\"image-container-wrapper\" (click)=\"clickOnBox(i)\" >\n        <div class=\"image-container\">\n          <img *ngIf=\"userInfo?.images && userInfo?.images.length > i-1 && userInfo?.images[i-1]\" class=\"user-image\" [src]=\"userInfo?.images[i-1]\">\n          <ion-icon *ngIf=\"!userInfo?.images[i-1]\" class=\"edit-icon\" name=\"create\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-title>{{'about_me' | translate }}</ion-title>\n  <ion-item>\n    <ion-textarea class=\"bio-textarea\" placeholder=\"{{'about_me_placeholder' | translate }}\" [(ngModel)]=\"bio\"></ion-textarea>\n  </ion-item>\n\n  <ion-button (click)=\"deleteAccount()\" class=\"delete-account-btn\">{{'delete_account' | translate}}</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/filter/filter.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/filter/filter.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsFilterFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"dismiss()\">\n      <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      {{'edit_filter_configuration'| translate}}\n    </ion-title>\n    <ion-buttons slot=\"end\"  (click)=\"done()\">\n      <ion-icon class=\"done-btn\" ios=\"ios-checkmark\" md=\"ios-checkmark\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div class=\"gender-box\">\n        <h3>{{ 'men' | translate}}</h3>\n        <ion-checkbox [(ngModel)]=\"queryFilter.enableMen\"></ion-checkbox>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"gender-box\">\n        <h3>{{ 'women' | translate}}</h3>\n        <ion-checkbox [(ngModel)]=\"queryFilter.enableWomen\"></ion-checkbox>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div class=\"gender-box\">\n        <h3>{{ 'age_between' | translate }} {{ queryFilter.ageRange.lower }} - {{ queryFilter.ageRange.upper }}</h3>\n        <ion-range pin=\"true\" min=\"19\" [max]=\"122\" dualKnobs=\"true\" step=\"1\" snaps=\"true\" [(ngModel)]=\"queryFilter.ageRange\"></ion-range>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div class=\"gender-box\">\n        <h3>{{ 'only_online_people' | translate}}</h3>\n        <ion-checkbox [(ngModel)]=\"queryFilter.onlyOnline\"></ion-checkbox>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/image-modal/image-modal.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/image-modal/image-modal.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsImageModalImageModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  image-modal works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/manage-credits/manage-credits.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/manage-credits/manage-credits.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsManageCreditsManageCreditsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar transparent>\n      \n      <ion-buttons slot=\"end\"  (click)=\"close()\">\n        <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <h1 class=\"ion-text-center\" *ngIf=\"credits\">you have {{ credits }} credits.</h1>\n  <ion-icon class=\"cafe-icon\" name=\"cafe\"></ion-icon>\n\n  <ion-button class=\"get-credits-btn\" (click)=\"onBuyMoreCreditsTap()\"> buy more credits </ion-button>\n  <ion-button [disabled]=\"!rewardButtonEnabled\" class=\"get-credits-btn\" (click)=\"rewardAvailable ? onRewardTap() : toastNoRewardAvailable()\"> see a video </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/select-plan/select-plan.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/select-plan/select-plan.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsSelectPlanSelectPlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header no-border>\n    <ion-toolbar transparent>\n      <ion-buttons slot=\"end\"  (click)=\"dismiss()\">\n        <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let plan of plans; let i = index\" centeredSlides=\"true\">\n        <ion-card class=\"plan-card\" (click)=\"onPlanChoosen(i)\">\n          <ion-card-header>\n            <ion-card-title class=\"plan-name\">\n              {{plan.name}}\n            </ion-card-title>\n            <ion-card-content>\n              <p>{{plan.description}}</p>\n            </ion-card-content>\n            <h4 class=\"plan-price\">{{plan.price}}</h4>\n          </ion-card-header>\n        </ion-card>\n      </ion-item>\n    </ion-list>\n    \n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/user-profile-popover/user-profile-popover.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_components/user-profile-popover/user-profile-popover.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_componentsUserProfilePopoverUserProfilePopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"options-list\">\n  <ion-item lines=\"none\">\n    <ion-label  (click)=\"credits()\">manage credits</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"danger\" (click)=\"logout()\">logout</ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/chat/chat.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/chat/chat.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesChatChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n  <ion-header no-border>\n      <ion-toolbar transparent>\n        <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n          <ion-icon name=\"ios-arrow-back\"></ion-icon>\n        </ion-buttons>\n        <h3 \n        (click) = \"viewProfile(chat.users[0].user.id)\"\n        *ngIf=\"chat\" class=\"chat-name\">{{chat.name}}</h3>\n        <!-- <ion-title class=\"ion-text-center\">\n          {{'register_page_title'| translate}}\n        </ion-title> -->\n        <ion-buttons slot=\"end\">\n          <ion-icon class=\"dots\" (click)=\"sendInvitation()\" name=\"cafe\"></ion-icon>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n  <ion-content padding class=\"container\" #messagesContent>\n    <div class=\"vertical-space message right\"></div>\n    <div *ngFor=\"let msg of messages\" class=\"message\" [class.right]=\"this.id == msg.user.id\" [class.left]=\"this.id != msg.user.id\">\n      <img \n      (click) = \"viewProfile(msg.user.id)\"\n      onError=\"this.src='../../assets/imgs/user.svg';\"      \n      class=\"user-img\"  alt=\"\" src=\"{{msg.user.profileImg}}\">\n      \n      <div class=\"msg-detail\">\n        <div class=\"msg-content\">\n          <span class=\"triangle\"></span>\n          <div class=\"coffee-wrapper\" *ngIf=\"msg.type == 'INVITATION'\">\n            <img class=\"coffee\" src=\"../../../assets/imgs/coffee.svg\">\n            <!-- <p class=\"question-mark\">?</p> -->\n          </div>\n          <p class=\"line-breaker \">{{msg.content}}</p>\n          <div class=\"created-at\">{{ getTime(msg.createdAt) }}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"vertical-space message right\"></div>\n  </ion-content>\n  <ion-footer no-border>\n    <div class=\"input-wrap\">\n      <textarea #messageInput placeholder=\"Enter your message!\" [(ngModel)]=\"message\" (keyup.enter)=\"sendMessage()\">\n      </textarea>\n      <button class=\"send-btn\" ion-button clear icon-only item-right (click)=\"sendMessage()\">\n        <div class=\"icon-wrapper\">\n          <ion-icon class=\"send-icon\" name=\"md-send\"></ion-icon>\n        </div>\n      </button>\n    </div>\n  </ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/login/login.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/login/login.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <!-- <ion-title class=\"ion-text-center\">\n      {{'register_page_title'| translate}}\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"logo\"></div>\n  <form #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div class=\"ion-text-center\">\n            <h1>Login</h1>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\"  type=\"submit\" [disabled]=\"f.invalid\" expand=\"block\">login</ion-button>\n          </div>\n          <ion-label class=\"register-btn\" expand=\"block\" routerLink=\"/register\" routerDirection=\"forward\">don't you have an account? <a>register</a></ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n  <!-- <span class=\"coffee-stain\"></span> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/register/register.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/register/register.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons slot=\"start\"  (click)=\"location.back()\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #f=\"ngForm\" (ngSubmit)=\"register(f)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          \n          <div padding>\n            <ion-item lines=\"none\">\n              <ion-select slot=\"end\" interface=\"popover\" #languageSelect placeholder=\"{{ 'language' | translate}}\" name=\"language\" [(ngModel)]=\"language\">\n                <ion-select-option *ngFor=\"let language of languages | keyvalue\" [value]=\"language.value.name\">{{language.value.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          <ion-item>\n            <ion-input name=\"firstName\" type=\"text\" placeholder=\"{{ 'insert_name' | translate }}\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label class=\"ion-dt-1-lbl birthday-label\">{{'birthday' | translate }}</ion-label>\n              <ion-datetime \n              value=\"1992-07-25\" \n              role=\"combobox\" \n              aria-expanded=\"false\" \n              aria-haspopup=\"true\" \n              #bdayPicker\n              (ionChange)=\"updateBirtday()\"\n              aria-labelledby=\"ion-dt-1-lbl\"\n              class=\"ios in-item hydrated\">\n            </ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input name=\"confirm_password\" type=\"password\" placeholder=\"{{ 'confirm_password' | translate }}\" ngModel required></ion-input>\n          </ion-item>\n          \n        </div>\n        <div padding>\n          <ion-button size=\"large\" type=\"submit\" [disabled]=\"f.invalid\" expand=\"block\">{{ 'register' | translate }}</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-app id=\"ion-app\" style=\"opacity: 0;\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-account/delete-account.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delete-account/delete-account.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeleteAccountDeleteAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar transparent>\n      <ion-buttons slot=\"end\"  (click)=\"dismiss()\">\n        <ion-icon ios=\"ios-close\" md=\"ios-close\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"ion-padding\">\n  <h1 class=\"ion-text-center\">{{'tell_the_reason' | translate}}</h1>\n  <div class=\"sad\" ></div>\n  <ion-textarea class=\"delete-account-txtarea\" [(ngModel)]=\"reason\" placeholder=\"beh,...\"></ion-textarea>\n  <ion-button class=\"delete-account-btn\" (click)=\"deleteAccount()\">{{ 'continue' | translate }}</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/_components/edit-user-profile/edit-user-profile.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/_components/edit-user-profile/edit-user-profile.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsEditUserProfileEditUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-container-wrapper {\n  height: 120px;\n  overflow: hidden; }\n\n.image-container img {\n  height: 100px;\n  width: 100px; }\n\n.image-container {\n  background-size: cover;\n  overflow: hidden;\n  border-radius: 10px;\n  border: 2px solid #222;\n  height: 103px;\n  width: 100px;\n  position: relative; }\n\n.gallery {\n  width: 100%; }\n\n.delete-account-btn {\n  width: 100%;\n  --background: transparent;\n  color: #cccccc;\n  bottom: 0;\n  margin-top: 50%;\n  z-index: 9999;\n  opacity: 0.8;\n  --border: none;\n  --box-shadow: none; }\n\n.bio-textarea {\n  margin-bottom: 50px; }\n\n.edit-icon {\n  position: absolute;\n  top: 40%;\n  border-radius: 50%;\n  background: #f1f1f1;\n  border: 1px solid #222;\n  color: #222;\n  z-index: 2;\n  height: 15px;\n  width: 15px;\n  padding: 5px;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto; }\n\n.about-me-txtarea {\n  border: 2px solid lightgrey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX2NvbXBvbmVudHMvZWRpdC11c2VyLXByb2ZpbGUvZWRpdC11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gseUJBQWE7RUFDYixjQUFjO0VBQ2QsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQVM7RUFDVCxrQkFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fY29tcG9uZW50cy9lZGl0LXVzZXItcHJvZmlsZS9lZGl0LXVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jb250YWluZXItd3JhcHBlcntcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1hZ2UtY29udGFpbmVyIGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbn1cbi5pbWFnZS1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIyMjtcbiAgICBoZWlnaHQ6IDEwM3B4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ2FsbGVyeXtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5kZWxldGUtYWNjb3VudC1idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2NjY2NjYztcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIC0tYm9yZGVyOiBub25lO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJpby10ZXh0YXJlYXtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uZWRpdC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYWJvdXQtbWUtdHh0YXJlYXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/edit-user-profile/edit-user-profile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/_components/edit-user-profile/edit-user-profile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EditUserProfileComponent */

  /***/
  function srcApp_componentsEditUserProfileEditUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function () {
      return EditUserProfileComponent;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/ngx/index.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var src_app_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/delete-account/delete-account.component */
    "./src/app/delete-account/delete-account.component.ts");

    var EditUserProfileComponent =
    /*#__PURE__*/
    function () {
      function EditUserProfileComponent(authService, loadingCtrl, translateService, modalCtrl, actionSheetController, userService, dragulaService) {
        var _this2 = this;

        _classCallCheck(this, EditUserProfileComponent);

        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        this.actionSheetController = actionSheetController;
        this.userService = userService;
        this.dragulaService = dragulaService;
        this.imagesDraggingSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"]();
        this.imagesSorting = [1, 2, 3];

        try {
          this.dragulaService.createGroup('VAMPIRES', {
            revertOnSpill: true,
            moves: function moves(el, container, handle, sibling) {
              var value = el.getAttribute('data-position');
              return value !== 'false';
            },
            accepts: function accepts(el, target, source, sibling) {
              var position = new Number(el.getAttribute('data-position'));
              var elementListPositions = Array.prototype.slice.call(target.children).map(function (el) {
                return el.getAttribute('data-position');
              });
              var firstFalse = elementListPositions.findIndex(function (el) {
                return el == 'false';
              });
              console.log(firstFalse);
              var valid = true;

              for (var i = firstFalse; i < elementListPositions.length; i++) {
                if (elementListPositions[i] != 'false') valid = false;
              }

              return _this2.userInfo && position <= _this2.userInfo.images.length && valid;
            }
          });
        } catch (ex) {}
      }

      _createClass(EditUserProfileComponent, [{
        key: "deleteAccount",
        value: function deleteAccount() {
          this.modalCtrl.create({
            component: src_app_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAccountComponent"]
          }).then(function (modal) {
            modal.present();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imagesDraggingSubscription.add(this.dragulaService.dropModel("VAMPIRES").subscribe(function (_ref) {
            var sourceModel = _ref.sourceModel,
                targetModel = _ref.targetModel,
                item = _ref.item;
          }));
          this.userInfo = this.authService.currentUserValue;
          this.bio = this.userInfo.bio;
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(cameraHandler, libraryHandler) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var selectImageSourceString, loadFromLibrariString, useCameraString, cancelString, actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.translateService.get('select_image_source').toPromise();

                  case 2:
                    selectImageSourceString = _context.sent;
                    _context.next = 5;
                    return this.translateService.get('load_from_library').toPromise();

                  case 5:
                    loadFromLibrariString = _context.sent;
                    _context.next = 8;
                    return this.translateService.get('use_camera').toPromise();

                  case 8:
                    useCameraString = _context.sent;
                    _context.next = 11;
                    return this.translateService.get('cancel').toPromise();

                  case 11:
                    cancelString = _context.sent;
                    _context.next = 14;
                    return this.actionSheetController.create({
                      header: selectImageSourceString,
                      buttons: [{
                        text: loadFromLibrariString,
                        handler: libraryHandler
                      }, {
                        text: useCameraString,
                        handler: cameraHandler
                      }, {
                        text: cancelString,
                        role: 'cancel'
                      }]
                    });

                  case 14:
                    actionSheet = _context.sent;
                    actionSheet.present();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deletePopover",
        value: function deletePopover(deleteHandler) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var deleteImage, cancelString, actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.translateService.get('delete_image').toPromise();

                  case 2:
                    deleteImage = _context2.sent;
                    _context2.next = 5;
                    return this.translateService.get('cancel').toPromise();

                  case 5:
                    cancelString = _context2.sent;
                    _context2.next = 8;
                    return this.actionSheetController.create({
                      buttons: [{
                        text: deleteImage,
                        cssClass: 'danger-icon',
                        handler: deleteHandler,
                        role: 'destructive'
                      }, {
                        text: cancelString,
                        role: 'cancel'
                      }]
                    });

                  case 8:
                    actionSheet = _context2.sent;
                    actionSheet.present();

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "clickOnBox",
        value: function clickOnBox(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var image, loader, _loader;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    image = this.userInfo.imageIds[index - 1];

                    if (!image) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 4;
                    return this.loadingCtrl.create();

                  case 4:
                    loader = _context3.sent;
                    this.deletePopover(function () {
                      _this3.userService.deleteImage(image).then(function () {
                        _this3.userInfo.images[index - 1] = null;
                        _this3.userInfo.imageIds[index - 1] = null;
                      }).then(function () {
                        return loader.dismiss();
                      }).catch(function () {
                        return loader.dismiss();
                      });
                    });
                    _context3.next = 12;
                    break;

                  case 8:
                    _context3.next = 10;
                    return this.loadingCtrl.create();

                  case 10:
                    _loader = _context3.sent;
                    this.uploadImage(function () {
                      _loader.present();

                      _this3.userService.uploadImage(index, _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__["PictureSourceType"].CAMERA).then(function () {
                        return _loader.dismiss();
                      }).catch(function () {
                        return _loader.dismiss();
                      });
                    }, function () {
                      _loader.present();

                      _this3.userService.uploadImage(index, _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__["PictureSourceType"].PHOTOLIBRARY).then(function () {
                        return _loader.dismiss();
                      }).catch(function () {
                        return _loader.dismiss();
                      });
                    });

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "done",
        value: function done(bio) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var somethingChanged, sorting, elements, i, element, id, loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    somethingChanged = false;
                    sorting = [];
                    if (bio != this.userInfo.bio) somethingChanged = true;

                    if (JSON.stringify(this.imagesSorting) != JSON.stringify([1, 2, 3])) {
                      somethingChanged = true;
                      elements = document.getElementsByClassName('image-container-wrapper');

                      for (i = 0; i < elements.length; i++) {
                        element = elements[i];
                        id = element.getAttribute('data-imageId');
                        if (id != 'false') sorting.push(new Number(id));
                      }
                    } else sorting = null;

                    if (!somethingChanged) {
                      _context4.next = 12;
                      break;
                    }

                    _context4.next = 7;
                    return this.loadingCtrl.create();

                  case 7:
                    loader = _context4.sent;
                    loader.present();
                    this.userService.updateInfo({
                      bio: bio,
                      imageIds: sorting
                    }).subscribe(function (response) {
                      loader.dismiss();

                      _this4.dismiss();
                    }, function (throwable) {
                      loader.dismiss();

                      _this4.dismiss();
                    });
                    _context4.next = 13;
                    break;

                  case 12:
                    this.dismiss();

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return EditUserProfileComponent;
    }();

    EditUserProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: ng2_dragula__WEBPACK_IMPORTED_MODULE_8__["DragulaService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"])], EditUserProfileComponent.prototype, "photosRow", void 0);
    EditUserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/edit-user-profile/edit-user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-user-profile.component.scss */
      "./src/app/_components/edit-user-profile/edit-user-profile.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_8__["DragulaService"]])], EditUserProfileComponent);
    /***/
  },

  /***/
  "./src/app/_components/filter/filter.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/_components/filter/filter.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsFilterFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".gender-box {\n  margin: 0 auto;\n  text-align: center; }\n\nion-range {\n  --knob-size: 25px;\n  --bar-height: 4px;\n  --height: 50px;\n  /* --knob-background: #D1B378; */\n  /* --bar-background-active: #956f5a; */\n  --bar-background: #F5ECE1;\n  --bar-background-active: #6e4228;\n  /* --pin-background: transparent; */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBWTtFQUNaLGlCQUFhO0VBQ2IsY0FBUztFQUNULGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBaUI7RUFDakIsZ0NBQXdCO0VBQ3hCLG1DQUFBLEVBQW9DIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5kZXItYm94e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1yYW5nZSB7XG4gICAgLS1rbm9iLXNpemU6IDI1cHg7XG4gICAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gICAgLS1oZWlnaHQ6IDUwcHg7XG4gICAgLyogLS1rbm9iLWJhY2tncm91bmQ6ICNEMUIzNzg7ICovXG4gICAgLyogLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6ICM5NTZmNWE7ICovXG4gICAgLS1iYXItYmFja2dyb3VuZDogI0Y1RUNFMTtcbiAgICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogIzZlNDIyODtcbiAgICAvKiAtLXBpbi1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgKi9cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/filter/filter.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/_components/filter/filter.component.ts ***!
    \********************************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcApp_componentsFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
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


    var src_app_models_queryFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_models/queryFilter */
    "./src/app/_models/queryFilter.ts");
    /* harmony import */


    var src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/coffe.service */
    "./src/app/_services/coffe.service.ts");

    var FilterComponent =
    /*#__PURE__*/
    function () {
      function FilterComponent(loaderCtrl, modalCtrl, coffeeService) {
        _classCallCheck(this, FilterComponent);

        this.loaderCtrl = loaderCtrl;
        this.modalCtrl = modalCtrl;
        this.coffeeService = coffeeService;
        this.queryFilter = src_app_models_queryFilter__WEBPACK_IMPORTED_MODULE_3__["QueryFilterUtils"].default();
        var preferences = localStorage.getItem(src_app_models_queryFilter__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES_KEY"]);
        if (preferences) this.queryFilter = JSON.parse(preferences);
      }

      _createClass(FilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "done",
        value: function done() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loaderCtrl.create();

                  case 2:
                    loader = _context5.sent;
                    loader.present();
                    localStorage.setItem(src_app_models_queryFilter__WEBPACK_IMPORTED_MODULE_3__["FILTER_PREFERENCES_KEY"], JSON.stringify(this.queryFilter));
                    this.coffeeService.reload().subscribe(function () {
                      loader.dismiss();

                      _this5.modalCtrl.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }]);

      return FilterComponent;
    }();

    FilterComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"]
      }];
    };

    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/filter/filter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filter.component.scss */
      "./src/app/_components/filter/filter.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_coffe_service__WEBPACK_IMPORTED_MODULE_4__["CoffeeService"]])], FilterComponent);
    /***/
  },

  /***/
  "./src/app/_components/image-modal/image-modal.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/_components/image-modal/image-modal.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsImageModalImageModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2ltYWdlLW1vZGFsL2ltYWdlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/_components/image-modal/image-modal.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_components/image-modal/image-modal.component.ts ***!
    \******************************************************************/

  /*! exports provided: ImageModalComponent */

  /***/
  function srcApp_componentsImageModalImageModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageModalComponent", function () {
      return ImageModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImageModalComponent =
    /*#__PURE__*/
    function () {
      function ImageModalComponent() {
        _classCallCheck(this, ImageModalComponent);
      }

      _createClass(ImageModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImageModalComponent;
    }();

    ImageModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/image-modal/image-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-modal.component.scss */
      "./src/app/_components/image-modal/image-modal.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ImageModalComponent);
    /***/
  },

  /***/
  "./src/app/_components/manage-credits/manage-credits.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/_components/manage-credits/manage-credits.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsManageCreditsManageCreditsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".get-credits-btn {\n  width: 80%;\n  margin: 15px auto;\n  display: block; }\n\n.cafe-icon {\n  display: block;\n  margin: 60px auto;\n  font-size: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX2NvbXBvbmVudHMvbWFuYWdlLWNyZWRpdHMvbWFuYWdlLWNyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvbWFuYWdlLWNyZWRpdHMvbWFuYWdlLWNyZWRpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LWNyZWRpdHMtYnRue1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FmZS1pY29ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNjBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/_components/manage-credits/manage-credits.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/_components/manage-credits/manage-credits.component.ts ***!
    \************************************************************************/

  /*! exports provided: ManageCreditsComponent */

  /***/
  function srcApp_componentsManageCreditsManageCreditsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCreditsComponent", function () {
      return ManageCreditsComponent;
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


    var _services_admob_free_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/admob-free.service */
    "./src/app/_services/admob-free.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../select-plan/select-plan.component */
    "./src/app/_components/select-plan/select-plan.component.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");

    var rewardNotAvailableKey = 'reward_not_available_come_back_tomorrow';

    var ManageCreditsComponent =
    /*#__PURE__*/
    function () {
      function ManageCreditsComponent(modalCtrl, loadingCtrl, userService, toastService, admobService, authService) {
        var _this6 = this;

        _classCallCheck(this, ManageCreditsComponent);

        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.toastService = toastService;
        this.admobService = admobService;
        this.authService = authService; //let the user press button first we have to notify user, regardless of whether the videos are available or not

        this.rewardButtonEnabled = true;
        this.rewardAvailable = false;
        authService.currentUser.subscribe(function (user) {
          console.log(user);
          _this6.credits = user.credits;
          _this6.rewardAvailable = user.rewardAvailable;
        });
      }

      _createClass(ManageCreditsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "onBuyMoreCreditsTap",
        value: function onBuyMoreCreditsTap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create({
                      duration: 7000
                    });

                  case 2:
                    loader = _context6.sent;
                    loader.present();
                    this.userService.listPlans().subscribe(function (plans) {
                      _this7.modalCtrl.create({
                        cssClass: 'plans-modal',
                        component: _select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_4__["SelectPlanComponent"]
                      }).then(function (modal) {
                        loader.dismiss();
                        modal.present();
                      });
                    }, function (error) {
                      console.log(error);
                      loader.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "toastNoRewardAvailable",
        value: function toastNoRewardAvailable() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.toastService.alert('reward_not_available_come_back_tomorrow');
                    this.rewardButtonEnabled = false;

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onRewardTap",
        value: function onRewardTap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.loadingCtrl.create({
                      duration: 20000
                    });

                  case 2:
                    loader = _context8.sent;
                    loader.present();
                    this.admobService.rewardVideo().with({
                      onReward: function onReward() {
                        loader.dismiss();

                        _this8.userService.notifyVideoReward().subscribe(function (data) {
                          console.log(data);
                          var admobCredit = data['credit'] && data['credit']['admobCredits'];
                          var admobRewardAvailable = admobCredit && admobCredit['count'] < admobCredit['countMax'];
                          _this8.credits = data && data['credit'] && data['credit']['credits'];
                          _this8.rewardAvailable = admobRewardAvailable;
                          _this8.authService.currentUserValue.credits = _this8.credits;

                          _this8.authService.contextRefresh(_this8.authService.currentUserValue);
                        });
                      },
                      onFail: function onFail(e) {
                        _this8.toastService.somethingWentWrong();

                        loader.dismiss();
                        console.log(e);
                      }
                    });

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return ManageCreditsComponent;
    }();

    ManageCreditsComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
      }, {
        type: _services_admob_free_service__WEBPACK_IMPORTED_MODULE_2__["AdmobFreeService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ManageCreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-credits',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-credits.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/manage-credits/manage-credits.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-credits.component.scss */
      "./src/app/_components/manage-credits/manage-credits.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _services_admob_free_service__WEBPACK_IMPORTED_MODULE_2__["AdmobFreeService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], ManageCreditsComponent);
    /***/
  },

  /***/
  "./src/app/_components/select-plan/select-plan.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/_components/select-plan/select-plan.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsSelectPlanSelectPlanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".plan-card {\n  width: 100%; }\n\n.swiper-zoom-container {\n  -webkit-transition: padding-bottom 1s ease-in-out;\n  transition: padding-bottom 1s ease-in-out; }\n\n.swiper-slide-active {\n  padding-bottom: 25px; }\n\n.plan-name {\n  text-align: center; }\n\n.plan-price {\n  font-size: 20px;\n  text-align: center;\n  width: 40%;\n  margin: 0 auto;\n  border: 1px solid #cccccc;\n  border-radius: 25px;\n  background: #D1B378;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX2NvbXBvbmVudHMvc2VsZWN0LXBsYW4vc2VsZWN0LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBSWY7RUFDSSxpREFBeUM7RUFBekMseUNBQXlDLEVBQUE7O0FBRTdDO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3NlbGVjdC1wbGFuL3NlbGVjdC1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYW4tY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uc3dpcGVyLXpvb20tY29udGFpbmVye1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctYm90dG9tIDFzIGVhc2UtaW4tb3V0O1xufVxuLnN3aXBlci1zbGlkZS1hY3RpdmV7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4ucGxhbi1uYW1le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wbGFuLXByaWNle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI0QxQjM3ODtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/_components/select-plan/select-plan.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/_components/select-plan/select-plan.component.ts ***!
    \******************************************************************/

  /*! exports provided: SelectPlanComponent */

  /***/
  function srcApp_componentsSelectPlanSelectPlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPlanComponent", function () {
      return SelectPlanComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/in-app-purchase/ngx */
    "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");

    var SelectPlanComponent =
    /*#__PURE__*/
    function () {
      function SelectPlanComponent(platform, iap, modalCtrl, toastService, userService) {
        _classCallCheck(this, SelectPlanComponent);

        this.platform = platform;
        this.iap = iap;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.userService = userService;
        this.plans = [];
      }

      _createClass(SelectPlanComponent, [{
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.plans = this.userService.lastPlans;
          this.iap.getProducts(this.plans.map(function (d) {
            return d.id;
          })).then(function (products) {
            console.log(products);
            _this9.storeProducts = products;
            products.forEach(function (el, value) {
              var plan = _this9.plans.filter(function (d) {
                return d.id == el.productId;
              })[0];

              plan.price = el.price;
              plan.description = el.description;
              plan.name = el.title;
            });
          }).catch(function (err) {
            _this9.toastService.somethingWentWrong();

            console.log(err);
          });
        }
      }, {
        key: "onPlanChoosen",
        value: function onPlanChoosen(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this10 = this;

            var selectedPlanId;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.plans = this.userService.lastPlans;
                    console.log(index);
                    selectedPlanId = this.plans[index].id;
                    console.log(selectedPlanId);
                    this.iap.buy(selectedPlanId).then(function (data) {
                      console.log(data);

                      _this10.iap.consume(data.productType, data.receipt, data.signature).then(function () {
                        _this10.userService.finalizePayment(data).subscribe(function (data) {
                          console.log(data);
                        });
                      });

                      _this10.modalCtrl.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return SelectPlanComponent;
    }();

    SelectPlanComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    SelectPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-plan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-plan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/select-plan/select-plan.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-plan.component.scss */
      "./src/app/_components/select-plan/select-plan.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])], SelectPlanComponent);
    /***/
  },

  /***/
  "./src/app/_components/user-profile-popover/user-profile-popover.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/_components/user-profile-popover/user-profile-popover.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_componentsUserProfilePopoverUserProfilePopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options-list {\n  padding: 0;\n  margin: 0; }\n\nion-item {\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX2NvbXBvbmVudHMvdXNlci1wcm9maWxlLXBvcG92ZXIvdXNlci1wcm9maWxlLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUViO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvX2NvbXBvbmVudHMvdXNlci1wcm9maWxlLXBvcG92ZXIvdXNlci1wcm9maWxlLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ucy1saXN0e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuaW9uLWl0ZW17XG4gICAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_components/user-profile-popover/user-profile-popover.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/_components/user-profile-popover/user-profile-popover.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UserProfilePopoverComponent */

  /***/
  function srcApp_componentsUserProfilePopoverUserProfilePopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePopoverComponent", function () {
      return UserProfilePopoverComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var src_app_components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_components/manage-credits/manage-credits.component */
    "./src/app/_components/manage-credits/manage-credits.component.ts"); // import { AdmobFreeService } from 'src/app/_services/admob-free.service';


    var UserProfilePopoverComponent =
    /*#__PURE__*/
    function () {
      function UserProfilePopoverComponent(popoverCtrl, router, modalCtrl, authService) {
        _classCallCheck(this, UserProfilePopoverComponent);

        this.popoverCtrl = popoverCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
      }

      _createClass(UserProfilePopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "credits",
        value: function credits() {
          this.modalCtrl.create({
            component: src_app_components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_5__["ManageCreditsComponent"]
          }).then(function (modal) {
            modal.present();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout().subscribe(function (data) {
            console.log(data);
          }, function (error) {
            console.log(error);
          });
          this.popoverCtrl.dismiss();
          this.router.navigate(['/login']);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss(confirmed) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return this.popoverCtrl.dismiss(confirmed);

                  case 3:
                    _context10.next = 7;
                    break;

                  case 5:
                    _context10.prev = 5;
                    _context10.t0 = _context10["catch"](0);

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[0, 5]]);
          }));
        }
      }]);

      return UserProfilePopoverComponent;
    }();

    UserProfilePopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    UserProfilePopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile-popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_components/user-profile-popover/user-profile-popover.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile-popover.component.scss */
      "./src/app/_components/user-profile-popover/user-profile-popover.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], UserProfilePopoverComponent);
    /***/
  },

  /***/
  "./src/app/_datasources/languages.ts":
  /*!*******************************************!*\
    !*** ./src/app/_datasources/languages.ts ***!
    \*******************************************/

  /*! exports provided: languages, getLanguageByPrefix */

  /***/
  function srcApp_datasourcesLanguagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "languages", function () {
      return languages;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLanguageByPrefix", function () {
      return getLanguageByPrefix;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var languages = {
      "aa": {
        "name": "Afar",
        "native": "Afar"
      },
      "ab": {
        "name": "Abkhazian",
        "native": "Аҧсуа"
      },
      "af": {
        "name": "Afrikaans",
        "native": "Afrikaans"
      },
      "ak": {
        "name": "Akan",
        "native": "Akana"
      },
      "am": {
        "name": "Amharic",
        "native": "አማርኛ"
      },
      "an": {
        "name": "Aragonese",
        "native": "Aragonés"
      },
      "ar": {
        "name": "Arabic",
        "native": "العربية",
        "rtl": 1
      },
      "as": {
        "name": "Assamese",
        "native": "অসমীয়া"
      },
      "av": {
        "name": "Avar",
        "native": "Авар"
      },
      "ay": {
        "name": "Aymara",
        "native": "Aymar"
      },
      "az": {
        "name": "Azerbaijani",
        "native": "Azərbaycanca / آذربايجان"
      },
      "ba": {
        "name": "Bashkir",
        "native": "Башҡорт"
      },
      "be": {
        "name": "Belarusian",
        "native": "Беларуская"
      },
      "bg": {
        "name": "Bulgarian",
        "native": "Български"
      },
      "bh": {
        "name": "Bihari",
        "native": "भोजपुरी"
      },
      "bi": {
        "name": "Bislama",
        "native": "Bislama"
      },
      "bm": {
        "name": "Bambara",
        "native": "Bamanankan"
      },
      "bn": {
        "name": "Bengali",
        "native": "বাংলা"
      },
      "bo": {
        "name": "Tibetan",
        "native": "བོད་ཡིག / Bod skad"
      },
      "br": {
        "name": "Breton",
        "native": "Brezhoneg"
      },
      "bs": {
        "name": "Bosnian",
        "native": "Bosanski"
      },
      "ca": {
        "name": "Catalan",
        "native": "Català"
      },
      "ce": {
        "name": "Chechen",
        "native": "Нохчийн"
      },
      "ch": {
        "name": "Chamorro",
        "native": "Chamoru"
      },
      "co": {
        "name": "Corsican",
        "native": "Corsu"
      },
      "cr": {
        "name": "Cree",
        "native": "Nehiyaw"
      },
      "cs": {
        "name": "Czech",
        "native": "Česky"
      },
      "cu": {
        "name": "Old Church Slavonic / Old Bulgarian",
        "native": "словѣньскъ / slověnĭskŭ"
      },
      "cv": {
        "name": "Chuvash",
        "native": "Чăваш"
      },
      "cy": {
        "name": "Welsh",
        "native": "Cymraeg"
      },
      "da": {
        "name": "Danish",
        "native": "Dansk"
      },
      "de": {
        "name": "German",
        "native": "Deutsch"
      },
      "dv": {
        "name": "Divehi",
        "native": "ދިވެހިބަސް",
        "rtl": 1
      },
      "dz": {
        "name": "Dzongkha",
        "native": "ཇོང་ཁ"
      },
      "ee": {
        "name": "Ewe",
        "native": "Ɛʋɛ"
      },
      "el": {
        "name": "Greek",
        "native": "Ελληνικά"
      },
      "en": {
        "name": "English",
        "native": "English"
      },
      "eo": {
        "name": "Esperanto",
        "native": "Esperanto"
      },
      "es": {
        "name": "Spanish",
        "native": "Español"
      },
      "et": {
        "name": "Estonian",
        "native": "Eesti"
      },
      "eu": {
        "name": "Basque",
        "native": "Euskara"
      },
      "fa": {
        "name": "Persian",
        "native": "فارسی",
        "rtl": 1
      },
      "ff": {
        "name": "Peul",
        "native": "Fulfulde"
      },
      "fi": {
        "name": "Finnish",
        "native": "Suomi"
      },
      "fj": {
        "name": "Fijian",
        "native": "Na Vosa Vakaviti"
      },
      "fo": {
        "name": "Faroese",
        "native": "Føroyskt"
      },
      "fr": {
        "name": "French",
        "native": "Français"
      },
      "fy": {
        "name": "West Frisian",
        "native": "Frysk"
      },
      "ga": {
        "name": "Irish",
        "native": "Gaeilge"
      },
      "gd": {
        "name": "Scottish Gaelic",
        "native": "Gàidhlig"
      },
      "gl": {
        "name": "Galician",
        "native": "Galego"
      },
      "gn": {
        "name": "Guarani",
        "native": "Avañe'ẽ"
      },
      "gu": {
        "name": "Gujarati",
        "native": "ગુજરાતી"
      },
      "gv": {
        "name": "Manx",
        "native": "Gaelg"
      },
      "ha": {
        "name": "Hausa",
        "native": "هَوُسَ",
        "rtl": 1
      },
      "he": {
        "name": "Hebrew",
        "native": "עברית",
        "rtl": 1
      },
      "hi": {
        "name": "Hindi",
        "native": "हिन्दी"
      },
      "ho": {
        "name": "Hiri Motu",
        "native": "Hiri Motu"
      },
      "hr": {
        "name": "Croatian",
        "native": "Hrvatski"
      },
      "ht": {
        "name": "Haitian",
        "native": "Krèyol ayisyen"
      },
      "hu": {
        "name": "Hungarian",
        "native": "Magyar"
      },
      "hy": {
        "name": "Armenian",
        "native": "Հայերեն"
      },
      "hz": {
        "name": "Herero",
        "native": "Otsiherero"
      },
      "ia": {
        "name": "Interlingua",
        "native": "Interlingua"
      },
      "id": {
        "name": "Indonesian",
        "native": "Bahasa Indonesia"
      },
      "ie": {
        "name": "Interlingue",
        "native": "Interlingue"
      },
      "ig": {
        "name": "Igbo",
        "native": "Igbo"
      },
      "ii": {
        "name": "Sichuan Yi",
        "native": "ꆇꉙ / 四川彝语"
      },
      "ik": {
        "name": "Inupiak",
        "native": "Iñupiak"
      },
      "io": {
        "name": "Ido",
        "native": "Ido"
      },
      "is": {
        "name": "Icelandic",
        "native": "Íslenska"
      },
      "it": {
        "name": "Italian",
        "native": "Italiano"
      },
      "iu": {
        "name": "Inuktitut",
        "native": "ᐃᓄᒃᑎᑐᑦ"
      },
      "ja": {
        "name": "Japanese",
        "native": "日本語"
      },
      "jv": {
        "name": "Javanese",
        "native": "Basa Jawa"
      },
      "ka": {
        "name": "Georgian",
        "native": "ქართული"
      },
      "kg": {
        "name": "Kongo",
        "native": "KiKongo"
      },
      "ki": {
        "name": "Kikuyu",
        "native": "Gĩkũyũ"
      },
      "kj": {
        "name": "Kuanyama",
        "native": "Kuanyama"
      },
      "kk": {
        "name": "Kazakh",
        "native": "Қазақша"
      },
      "kl": {
        "name": "Greenlandic",
        "native": "Kalaallisut"
      },
      "km": {
        "name": "Cambodian",
        "native": "ភាសាខ្មែរ"
      },
      "kn": {
        "name": "Kannada",
        "native": "ಕನ್ನಡ"
      },
      "ko": {
        "name": "Korean",
        "native": "한국어"
      },
      "kr": {
        "name": "Kanuri",
        "native": "Kanuri"
      },
      "ks": {
        "name": "Kashmiri",
        "native": "कश्मीरी / كشميري",
        "rtl": 1
      },
      "ku": {
        "name": "Kurdish",
        "native": "Kurdî / كوردی",
        "rtl": 1
      },
      "kv": {
        "name": "Komi",
        "native": "Коми"
      },
      "kw": {
        "name": "Cornish",
        "native": "Kernewek"
      },
      "ky": {
        "name": "Kirghiz",
        "native": "Kırgızca / Кыргызча"
      },
      "la": {
        "name": "Latin",
        "native": "Latina"
      },
      "lb": {
        "name": "Luxembourgish",
        "native": "Lëtzebuergesch"
      },
      "lg": {
        "name": "Ganda",
        "native": "Luganda"
      },
      "li": {
        "name": "Limburgian",
        "native": "Limburgs"
      },
      "ln": {
        "name": "Lingala",
        "native": "Lingála"
      },
      "lo": {
        "name": "Laotian",
        "native": "ລາວ / Pha xa lao"
      },
      "lt": {
        "name": "Lithuanian",
        "native": "Lietuvių"
      },
      "lv": {
        "name": "Latvian",
        "native": "Latviešu"
      },
      "mg": {
        "name": "Malagasy",
        "native": "Malagasy"
      },
      "mh": {
        "name": "Marshallese",
        "native": "Kajin Majel / Ebon"
      },
      "mi": {
        "name": "Maori",
        "native": "Māori"
      },
      "mk": {
        "name": "Macedonian",
        "native": "Македонски"
      },
      "ml": {
        "name": "Malayalam",
        "native": "മലയാളം"
      },
      "mn": {
        "name": "Mongolian",
        "native": "Монгол"
      },
      "mo": {
        "name": "Moldovan",
        "native": "Moldovenească"
      },
      "mr": {
        "name": "Marathi",
        "native": "मराठी"
      },
      "ms": {
        "name": "Malay",
        "native": "Bahasa Melayu"
      },
      "mt": {
        "name": "Maltese",
        "native": "bil-Malti"
      },
      "my": {
        "name": "Burmese",
        "native": "မြန်မာစာ"
      },
      "na": {
        "name": "Nauruan",
        "native": "Dorerin Naoero"
      },
      "nd": {
        "name": "North Ndebele",
        "native": "Sindebele"
      },
      "ne": {
        "name": "Nepali",
        "native": "नेपाली"
      },
      "ng": {
        "name": "Ndonga",
        "native": "Oshiwambo"
      },
      "nl": {
        "name": "Dutch",
        "native": "Nederlands"
      },
      "nn": {
        "name": "Norwegian Nynorsk",
        "native": "Norsk (nynorsk)"
      },
      "no": {
        "name": "Norwegian",
        "native": "Norsk (bokmål / riksmål)"
      },
      "nr": {
        "name": "South Ndebele",
        "native": "isiNdebele"
      },
      "nv": {
        "name": "Navajo",
        "native": "Diné bizaad"
      },
      "ny": {
        "name": "Chichewa",
        "native": "Chi-Chewa"
      },
      "oc": {
        "name": "Occitan",
        "native": "Occitan"
      },
      "oj": {
        "name": "Ojibwa",
        "native": "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"
      },
      "om": {
        "name": "Oromo",
        "native": "Oromoo"
      },
      "or": {
        "name": "Oriya",
        "native": "ଓଡ଼ିଆ"
      },
      "os": {
        "name": "Ossetian / Ossetic",
        "native": "Иронау"
      },
      "pa": {
        "name": "Panjabi / Punjabi",
        "native": "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
      },
      "pi": {
        "name": "Pali",
        "native": "Pāli / पाऴि"
      },
      "pl": {
        "name": "Polish",
        "native": "Polski"
      },
      "ps": {
        "name": "Pashto",
        "native": "پښتو",
        "rtl": 1
      },
      "pt": {
        "name": "Portuguese",
        "native": "Português"
      },
      "qu": {
        "name": "Quechua",
        "native": "Runa Simi"
      },
      "rm": {
        "name": "Raeto Romance",
        "native": "Rumantsch"
      },
      "rn": {
        "name": "Kirundi",
        "native": "Kirundi"
      },
      "ro": {
        "name": "Romanian",
        "native": "Română"
      },
      "ru": {
        "name": "Russian",
        "native": "Русский"
      },
      "rw": {
        "name": "Rwandi",
        "native": "Kinyarwandi"
      },
      "sa": {
        "name": "Sanskrit",
        "native": "संस्कृतम्"
      },
      "sc": {
        "name": "Sardinian",
        "native": "Sardu"
      },
      "sd": {
        "name": "Sindhi",
        "native": "सिनधि"
      },
      "se": {
        "name": "Northern Sami",
        "native": "Sámegiella"
      },
      "sg": {
        "name": "Sango",
        "native": "Sängö"
      },
      "sh": {
        "name": "Serbo-Croatian",
        "native": "Srpskohrvatski / Српскохрватски"
      },
      "si": {
        "name": "Sinhalese",
        "native": "සිංහල"
      },
      "sk": {
        "name": "Slovak",
        "native": "Slovenčina"
      },
      "sl": {
        "name": "Slovenian",
        "native": "Slovenščina"
      },
      "sm": {
        "name": "Samoan",
        "native": "Gagana Samoa"
      },
      "sn": {
        "name": "Shona",
        "native": "chiShona"
      },
      "so": {
        "name": "Somalia",
        "native": "Soomaaliga"
      },
      "sq": {
        "name": "Albanian",
        "native": "Shqip"
      },
      "sr": {
        "name": "Serbian",
        "native": "Српски"
      },
      "ss": {
        "name": "Swati",
        "native": "SiSwati"
      },
      "st": {
        "name": "Southern Sotho",
        "native": "Sesotho"
      },
      "su": {
        "name": "Sundanese",
        "native": "Basa Sunda"
      },
      "sv": {
        "name": "Swedish",
        "native": "Svenska"
      },
      "sw": {
        "name": "Swahili",
        "native": "Kiswahili"
      },
      "ta": {
        "name": "Tamil",
        "native": "தமிழ்"
      },
      "te": {
        "name": "Telugu",
        "native": "తెలుగు"
      },
      "tg": {
        "name": "Tajik",
        "native": "Тоҷикӣ"
      },
      "th": {
        "name": "Thai",
        "native": "ไทย / Phasa Thai"
      },
      "ti": {
        "name": "Tigrinya",
        "native": "ትግርኛ"
      },
      "tk": {
        "name": "Turkmen",
        "native": "Туркмен / تركمن"
      },
      "tl": {
        "name": "Tagalog / Filipino",
        "native": "Tagalog"
      },
      "tn": {
        "name": "Tswana",
        "native": "Setswana"
      },
      "to": {
        "name": "Tonga",
        "native": "Lea Faka-Tonga"
      },
      "tr": {
        "name": "Turkish",
        "native": "Türkçe"
      },
      "ts": {
        "name": "Tsonga",
        "native": "Xitsonga"
      },
      "tt": {
        "name": "Tatar",
        "native": "Tatarça"
      },
      "tw": {
        "name": "Twi",
        "native": "Twi"
      },
      "ty": {
        "name": "Tahitian",
        "native": "Reo Mā`ohi"
      },
      "ug": {
        "name": "Uyghur",
        "native": "Uyƣurqə / ئۇيغۇرچە"
      },
      "uk": {
        "name": "Ukrainian",
        "native": "Українська"
      },
      "ur": {
        "name": "Urdu",
        "native": "اردو",
        "rtl": 1
      },
      "uz": {
        "name": "Uzbek",
        "native": "Ўзбек"
      },
      "ve": {
        "name": "Venda",
        "native": "Tshivenḓa"
      },
      "vi": {
        "name": "Vietnamese",
        "native": "Tiếng Việt"
      },
      "vo": {
        "name": "Volapük",
        "native": "Volapük"
      },
      "wa": {
        "name": "Walloon",
        "native": "Walon"
      },
      "wo": {
        "name": "Wolof",
        "native": "Wollof"
      },
      "xh": {
        "name": "Xhosa",
        "native": "isiXhosa"
      },
      "yi": {
        "name": "Yiddish",
        "native": "ייִדיש",
        "rtl": 1
      },
      "yo": {
        "name": "Yoruba",
        "native": "Yorùbá"
      },
      "za": {
        "name": "Zhuang",
        "native": "Cuengh / Tôô / 壮语"
      },
      "zh": {
        "name": "Chinese",
        "native": "中文"
      },
      "zu": {
        "name": "Zulu",
        "native": "isiZulu"
      }
    };

    function getLanguageByPrefix(prefix) {
      if (prefix != null) {
        prefix = prefix.split('-')[0].toLowerCase(); //avoid case it-IT

        if (languages[prefix] != null) {
          return languages[prefix].name;
        }
      }

      return "";
    }
    /***/

  },

  /***/
  "./src/app/_guards/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/_guards/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_guardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var accessToken = this.authenticationService.authToken;

          if (accessToken) {
            // authorised so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_components/select-plan/select-plan.component */
    "./src/app/_components/select-plan/select-plan.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _models_pricing_plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_models/pricing-plan */
    "./src/app/_models/pricing-plan.ts");

    var NOT_ACCETTABLE = 406;
    var UNAUTHORIZED = 401;

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService, userService, modalCtrl) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this11 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === UNAUTHORIZED) {
              // auto logout if 401 response returned from api
              _this11.authenticationService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                location.reload(true);
              })).subscribe();
            }

            if (err.status === NOT_ACCETTABLE) {
              var plans = err.body;

              if (plans && plans['products']) {
                _this11.userService.setPlans(_models_pricing_plan__WEBPACK_IMPORTED_MODULE_8__["PricingPlanMapper"].fromJsonArray(plans));

                _this11.modalCtrl.create({
                  cssClass: 'plans-modal',
                  component: _components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_6__["SelectPlanComponent"]
                }).then(function (modal) {
                  modal.present();
                });
              }
            }

            var error = (err.error ? err.error.message : '') || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts"); //TODO: check tokens inequality


    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService, platform) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
        this.platform = platform;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add authorization header with jwt token if available
          if (request.url.indexOf(_config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"]) !== -1) {
            var authToken = this.authenticationService.authToken;

            if (authToken) {
              var platforms = this.platform.platforms();
              request = request.clone({
                setHeaders: {
                  'Authorization': "Bearer ".concat(authToken),
                  'platforms': platforms ? JSON.stringify(platforms) : 'not_ready_yet'
                }
              });
            }
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_models/chat.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/chat.ts ***!
    \*********************************/

  /*! exports provided: ChatMapper */

  /***/
  function srcApp_modelsChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMapper", function () {
      return ChatMapper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./message */
    "./src/app/_models/message.ts");

    var ChatMapper =
    /*#__PURE__*/
    function () {
      function ChatMapper() {
        _classCallCheck(this, ChatMapper);
      }

      _createClass(ChatMapper, null, [{
        key: "fromJson",
        value: function fromJson(data) {
          var users = data['users'] && data['users'].map(function (user) {
            return {
              user: {
                id: user['id'],
                name: user['firstName'] + ' ' + user['lastName'],
                profileImg: user['imageUrl']
              }
            };
          });
          return {
            id: data['id'],
            lastMessage: data['lastMessage'] ? _message__WEBPACK_IMPORTED_MODULE_1__["MessageMapper"].fromJson(data['lastMessage']) : null,
            users: users,
            enabled: data['enabled'],
            img: data['imageUrl'],
            name: data['title'] || users && users[0].user.name
          };
        }
      }, {
        key: "fromJsonArray",
        value: function fromJsonArray(data) {
          return data && data.map(function (chat) {
            return ChatMapper.fromJson(chat);
          });
        }
      }]);

      return ChatMapper;
    }();
    /***/

  },

  /***/
  "./src/app/_models/message.ts":
  /*!************************************!*\
    !*** ./src/app/_models/message.ts ***!
    \************************************/

  /*! exports provided: Type, MessageMapper */

  /***/
  function srcApp_modelsMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Type", function () {
      return Type;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageMapper", function () {
      return MessageMapper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Type;

    (function (Type) {
      Type[Type["DEFAULT"] = 0] = "DEFAULT";
      Type[Type["INVITATION"] = 1] = "INVITATION";
    })(Type || (Type = {}));

    var MessageMapper =
    /*#__PURE__*/
    function () {
      function MessageMapper() {
        _classCallCheck(this, MessageMapper);
      }

      _createClass(MessageMapper, null, [{
        key: "fromJson",
        value: function fromJson(data) {
          return {
            id: data['id'],
            user: {
              id: data['user'] && data['user']['id'],
              firstName: data['user'] && data['user']['firstName'],
              lastName: data['user'] && data['user']['lastName'],
              name: data['user'] && data['user']['firstName'] + ' ' + data['user']['lastName'],
              profileImg: data['user'] && data['user']['imageUrl'] && data['user']['imageUrl']
            },
            type: data['type'],
            content: data['content'],
            createdAt: data['createdAt'],
            readBy: data['readBy']
          };
        }
      }, {
        key: "fromJsonArray",
        value: function fromJsonArray(data) {
          var _this12 = this;

          return data && data.map(function (message) {
            return _this12.fromJson(message);
          });
        }
      }]);

      return MessageMapper;
    }();
    /***/

  },

  /***/
  "./src/app/_models/pricing-plan.ts":
  /*!*****************************************!*\
    !*** ./src/app/_models/pricing-plan.ts ***!
    \*****************************************/

  /*! exports provided: PricingPlanMapper */

  /***/
  function srcApp_modelsPricingPlanTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingPlanMapper", function () {
      return PricingPlanMapper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PricingPlanMapper =
    /*#__PURE__*/
    function () {
      function PricingPlanMapper() {
        _classCallCheck(this, PricingPlanMapper);
      }

      _createClass(PricingPlanMapper, null, [{
        key: "fromJson",
        value: function fromJson(data) {
          return {
            id: data['productId'],
            name: data['name'],
            description: data['description'],
            price: data['price'],
            currency: data['currency']
          };
        }
      }, {
        key: "fromJsonArray",
        value: function fromJsonArray(data) {
          return data && data.map(function (plan) {
            return PricingPlanMapper.fromJson(plan);
          });
        }
      }]);

      return PricingPlanMapper;
    }();
    /***/

  },

  /***/
  "./src/app/_models/queryFilter.ts":
  /*!****************************************!*\
    !*** ./src/app/_models/queryFilter.ts ***!
    \****************************************/

  /*! exports provided: FILTER_PREFERENCES_KEY, QueryFilterUtils */

  /***/
  function srcApp_modelsQueryFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILTER_PREFERENCES_KEY", function () {
      return FILTER_PREFERENCES_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryFilterUtils", function () {
      return QueryFilterUtils;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FILTER_PREFERENCES_KEY = 'filterPreference';

    var QueryFilterUtils =
    /*#__PURE__*/
    function () {
      function QueryFilterUtils() {
        _classCallCheck(this, QueryFilterUtils);
      }

      _createClass(QueryFilterUtils, null, [{
        key: "default",
        value: function _default() {
          return {
            enableWomen: true,
            enableMen: true,
            ageRange: {
              lower: 19,
              upper: 122
            },
            onlyOnline: false
          };
        }
      }]);

      return QueryFilterUtils;
    }();
    /***/

  },

  /***/
  "./src/app/_models/user.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/user.ts ***!
    \*********************************/

  /*! exports provided: LoginType, LocalizedUserMapper, UserMapper */

  /***/
  function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginType", function () {
      return LoginType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalizedUserMapper", function () {
      return LocalizedUserMapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMapper", function () {
      return UserMapper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_utils/functions */
    "./src/app/_utils/functions.ts");

    var LoginType;

    (function (LoginType) {
      LoginType[LoginType["NATIVE"] = 0] = "NATIVE";
      LoginType[LoginType["FACEBOOK"] = 1] = "FACEBOOK";
    })(LoginType || (LoginType = {}));

    var LocalizedUserMapper =
    /*#__PURE__*/
    function () {
      function LocalizedUserMapper() {
        _classCallCheck(this, LocalizedUserMapper);
      }

      _createClass(LocalizedUserMapper, null, [{
        key: "fromJson",
        value: function fromJson(data) {
          console.log(data);
          return {
            address: data['address'],
            distance: data['distance'],
            user: {
              id: data['user']['id'],
              firstName: data['user']['firstName'],
              lastName: data['user']['lastName'],
              name: data['user']['firstName'],
              profileImg: data['user']['imageUrl'],
              age: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["age"])(data['user']['birthday']),
              lastSeen: data['user']['lastSeen'],
              online: data['user']['online'],
              bio: data['user']['bio']
            }
          };
        }
      }, {
        key: "fromJsonArray",
        value: function fromJsonArray(data) {
          return data ? data.map(function (user) {
            return LocalizedUserMapper.fromJson(user);
          }) : [];
        }
      }]);

      return LocalizedUserMapper;
    }();

    var UserMapper =
    /*#__PURE__*/
    function () {
      function UserMapper() {
        _classCallCheck(this, UserMapper);
      }

      _createClass(UserMapper, null, [{
        key: "fromJson",
        value: function fromJson(data) {
          console.log(data);
          var admobCredit = data['user']['credit'] && data['user']['credit']['admobCredit'];
          var admobRewardAvailable = admobCredit && admobCredit['count'] < admobCredit['countMax'];
          return data ? {
            firstName: data['user']['firstName'],
            lastName: data['user']['lastName'],
            name: data['user']['firstName'],
            age: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_1__["age"])(data['user']['birthday']),
            id: data['user']['id'],
            credits: data['user']['credit'] && data['user']['credit']['credits'],
            rewardAvailable: admobRewardAvailable,
            bio: data['user']['bio'],
            profileImg: data['user']['imageUrl'],
            description: data['description'],
            images: data['images'].map(function (image) {
              return image.url;
            }),
            imageIds: data['images'].map(function (image) {
              return image.id;
            }),
            lastSeen: data['user']['lastSeen'],
            createdAt: data['user']['createdAt'],
            online: data['user']['online'],
            token: data['token']
          } : null;
        }
      }, {
        key: "fromJsonArray",
        value: function fromJsonArray(data) {
          return data ? data.map(function (user) {
            return UserMapper.fromJson(user);
          }) : [];
        }
      }]);

      return UserMapper;
    }();
    /***/

  },

  /***/
  "./src/app/_pages/chat/chat.module.ts":
  /*!********************************************!*\
    !*** ./src/app/_pages/chat/chat.module.ts ***!
    \********************************************/

  /*! exports provided: ChatRoomPageModule */

  /***/
  function srcApp_pagesChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function () {
      return ChatRoomPageModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chat.page */
    "./src/app/_pages/chat/chat.page.ts"); // const config: SocketIoConfig = { url: WEBSOCKET_SERVICE_SERVER + '/', options: {} };


    var ChatRoomPageModule = function ChatRoomPageModule() {
      _classCallCheck(this, ChatRoomPageModule);
    };

    ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], // SocketIoModule.forRoot(config),
      _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatRoomPage"]
      }])],
      declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatRoomPage"]]
    })], ChatRoomPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/chat/chat.page.scss":
  /*!********************************************!*\
    !*** ./src/app/_pages/chat/chat.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesChatChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-wrap {\n  display: -webkit-box;\n  display: flex; }\n  .input-wrap textarea {\n    -webkit-box-flex: 4;\n            flex: 4;\n    border: 0;\n    padding: 17px;\n    resize: none;\n    background: #f1f1f1;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    margin-left: 25px;\n    border-radius: 35px;\n    border-top-right-radius: 0;\n    border: 1px solid #222;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }\n  .input-wrap .send-btn {\n    -webkit-box-flex: 0;\n            flex: 0;\n    height: 60px;\n    background: none;\n    border-radius: 50px;\n    margin-right: 20px; }\n  .input-wrap .send-icon {\n    color: #f1f1f1; }\n  .input-wrap .icon-wrapper {\n    height: 100%;\n    border-radius: 35px;\n    padding: 15px;\n    padding-top: 13px;\n    background: #999;\n    border-radius: 35px;\n    height: 50px;\n    width: 50px;\n    font-size: 25px;\n    border: 1px solid #222; }\n  ion-footer {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0; }\n  ion-content .scroll-content {\n  background-color: #f5f5f5; }\n  .line-breaker {\n  white-space: pre-line; }\n  .vertical-space {\n  height: 120px; }\n  .container {\n  position: absolute;\n  right: 0;\n  left: 0; }\n  .container .message {\n    max-width: 100%;\n    clear: both;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    position: relative;\n    padding: 7px 0; }\n  .container .message .msg-content {\n      width: auto;\n      color: #343434;\n      background-color: #F5ECE1;\n      float: left;\n      padding: 15px;\n      border: 1px solid #222;\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }\n  .container .message .user-img {\n      position: absolute;\n      border-radius: 45px;\n      width: 25px;\n      height: 25px;\n      box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n      border: 1px solid #222;\n      background: #fff; }\n  .container .message .created-at {\n      color: #777;\n      font-size: 10px;\n      margin-top: 7px; }\n  .container .message .msg-detail {\n      width: auto;\n      width: 100%;\n      display: inline-block; }\n  .container .message .msg-detail p {\n        margin: 0; }\n  .container .message .msg-detail .msg-info p {\n        font-size: .8em;\n        color: #222; }\n  .container .left {\n    float: left; }\n  .container .left .user-img {\n      left: 0; }\n  .container .left .msg-detail {\n      padding-left: 30px;\n      padding-right: 0; }\n  .container .left .msg-info {\n      text-align: left; }\n  .container .left .msg-content {\n      float: left;\n      border-bottom-left-radius: 33px;\n      border-top-right-radius: 33px; }\n  .container .right {\n    float: right; }\n  .container .right .user-img {\n      right: 0; }\n  .container .right .msg-detail {\n      padding-right: 30px;\n      padding-left: 0; }\n  .container .right .msg-info {\n      text-align: right; }\n  .container .right .msg-content {\n      float: right;\n      border-bottom-right-radius: 33px;\n      border-top-left-radius: 33px; }\n  .container .question-mark {\n    font-size: 95px; }\n  .container .coffee {\n    width: 110px;\n    height: 110px; }\n  .container .coffee-wrapper {\n    display: -webkit-box;\n    display: flex;\n    width: 107px; }\n  .chat-name {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n  overflow: hidden;\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBYTtFQUFiLGFBQWEsRUFBQTtFQURmO0lBR0ksbUJBQU87WUFBUCxPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDJFQUEyRSxFQUFBO0VBZC9FO0lBa0JJLG1CQUFPO1lBQVAsT0FBTztJQUNQLFlBQVk7SUFDWixnQkFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQXRCdEI7SUF5QkksY0FBYyxFQUFBO0VBekJsQjtJQTZCSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixzQkFBc0IsRUFBQTtFQUkxQjtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUyxFQUFBO0VBR1g7RUFDRSx5QkFBeUIsRUFBQTtFQUUzQjtFQUNFLHFCQUFxQixFQUFBO0VBRXZCO0VBQ0UsYUFBYSxFQUFBO0VBRWY7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU8sRUFBQTtFQUhUO0lBS0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7RUFUbEI7TUFXTSxXQUFXO01BQ1gsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QiwyRUFBMkUsRUFBQTtFQWpCakY7TUFxQk0sa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsWUFBWTtNQUNaLHVDQUF1QztNQUN2QyxzQkFBc0I7TUFDdEIsZ0JBQWdCLEVBQUE7RUEzQnRCO01BOEJNLFdBQVc7TUFDWCxlQUFlO01BQ2YsZUFBZSxFQUFBO0VBaENyQjtNQW9DTSxXQUFXO01BQ1gsV0FBVztNQUNYLHFCQUFxQixFQUFBO0VBdEMzQjtRQXdDUSxTQUFTLEVBQUE7RUF4Q2pCO1FBNENVLGVBQWU7UUFDZixXQUFXLEVBQUE7RUE3Q3JCO0lBbURJLFdBQVcsRUFBQTtFQW5EZjtNQXFETSxPQUFPLEVBQUE7RUFyRGI7TUF3RE0sa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBO0VBekR0QjtNQTRETSxnQkFBZ0IsRUFBQTtFQTVEdEI7TUErRE0sV0FBVztNQUNYLCtCQUErQjtNQUMvQiw2QkFBNkIsRUFBQTtFQWpFbkM7SUFxRUksWUFBWSxFQUFBO0VBckVoQjtNQXVFTSxRQUFRLEVBQUE7RUF2RWQ7TUEwRU0sbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtFQTNFckI7TUE4RU0saUJBQWlCLEVBQUE7RUE5RXZCO01BaUZNLFlBQVk7TUFDWixnQ0FBZ0M7TUFDaEMsNEJBQTRCLEVBQUE7RUFuRmxDO0lBdUZJLGVBQWMsRUFBQTtFQXZGbEI7SUEwRkksWUFBWTtJQUNaLGFBQWEsRUFBQTtFQTNGakI7SUE4Rkksb0JBQWE7SUFBYixhQUFhO0lBQ2IsWUFBWSxFQUFBO0VBR2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvX3BhZ2VzL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmlucHV0LXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dGFyZWEge1xuICAgICAgZmxleDogNDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDE3cHg7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kIDogI2YxZjFmMTtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBcbiAgICB9XG4gICAgLnNlbmQtYnRuIHtcbiAgICAgIGZsZXg6IDA7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuc2VuZC1pY29ue1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgfVxuICBcbiAgICAuaWNvbi13cmFwcGVye1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICAgICAgXG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAwO1xuICBcbiAgfVxuICBpb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgLmxpbmUtYnJlYWtlciB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB9XG4gIC52ZXJ0aWNhbC1zcGFjZXtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC5tZXNzYWdlIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiA3cHggMDtcbiAgICAgIC5tc2ctY29udGVudCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBjb2xvcjogIzM0MzQzNDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RUNFMTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7ICAgICAgICBcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyMjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBcbiAgICAgIH1cbiAgICAgIC51c2VyLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgfVxuICAgICAgLmNyZWF0ZWQtYXR7XG4gICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLm1zZy1kZXRhaWwge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5tc2ctaW5mbyB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmxlZnR7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIC51c2VyLWltZ3tcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIC5tc2ctZGV0YWlse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAubXNnLWluZm97XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICAubXNnLWNvbnRlbnR7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzM3B4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzNweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0e1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgLnVzZXItaW1ne1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cbiAgICAgIC5tc2ctZGV0YWlse1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAubXNnLWluZm97XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLm1zZy1jb250ZW50e1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzM3B4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzM3B4O1xuICAgICAgfVxuICAgIH1cbiAgICAucXVlc3Rpb24tbWFya3tcbiAgICAgIGZvbnQtc2l6ZTo5NXB4O1xuICAgIH1cbiAgICAuY29mZmVle1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG4gICAgLmNvZmZlZS13cmFwcGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDdweDtcbiAgICB9XG4gIH0gIFxuLmNoYXQtbmFtZXtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/_pages/chat/chat.page.ts":
  /*!******************************************!*\
    !*** ./src/app/_pages/chat/chat.page.ts ***!
    \******************************************/

  /*! exports provided: ChatRoomPage */

  /***/
  function srcApp_pagesChatChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function () {
      return ChatRoomPage;
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


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/chat.service */
    "./src/app/_services/chat.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_utils/functions */
    "./src/app/_utils/functions.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ChatRoomPage =
    /*#__PURE__*/
    function () {
      function ChatRoomPage(authService, chatService, location, ngZone, modalCtrl, router, route) {
        var _this13 = this;

        _classCallCheck(this, ChatRoomPage);

        this.chatService = chatService;
        this.location = location;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.route = route;
        this.messages = [];
        this.name = '';
        this.message = '';
        console.log(authService.currentUser);
        console.log(authService.currentUserValue);
        authService.currentUser.subscribe(function (user) {
          _this13.id = user.id;
        });
      }

      _createClass(ChatRoomPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.chat = this.chatService.getActiveChat();
          this.route.paramMap.subscribe(function (params) {
            _this14.messages = [];
            _this14.chatKey = params.get('with');

            _this14.chatService.getMessages(_this14.chatKey).subscribe(function (data) {
              data.forEach(function (message) {
                _this14.messages.push(message);

                _this14.toBottom();
              });
            });

            _this14.chatService.connect(_this14.chatKey, function () {
              _this14.chatService.bindToMessages().subscribe(function (message) {
                _this14.messages.push(message);

                _this14.toBottom();
              });
            });
          });
        }
      }, {
        key: "sendInvitation",
        value: function sendInvitation() {
          this.chatService.sendInvitation();
        }
      }, {
        key: "toBottom",
        value: function toBottom() {
          var _this15 = this;

          setTimeout(function () {
            try {
              _this15.ngZone.run(function () {
                return _this15.messagesContent.scrollToBottom(400);
              });
            } catch (ex) {}
          });
        }
      }, {
        key: "viewProfile",
        value: function viewProfile(id) {
          this.router.navigate(['view-profile', id]);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          if (this.message && this.message.trim().length > 0) {
            this.chatService.sendMessage(this.message);
            this.message = '';
          }
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.chatService.disconnect();
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          return Object(_utils_functions__WEBPACK_IMPORTED_MODULE_5__["timeSince"])(date);
        }
      }]);

      return ChatRoomPage;
    }();

    ChatRoomPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], ChatRoomPage.prototype, "messagesContent", void 0);
    ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/chat/chat.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.page.scss */
      "./src/app/_pages/chat/chat.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])], ChatRoomPage);
    /***/
  },

  /***/
  "./src/app/_pages/login/login.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/_pages/login/login.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcApp_pagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/_pages/login/login.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/login/login.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/_pages/login/login.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".register-btn {\n  margin: 0 auto;\n  text-align: center;\n  display: block; }\n\n.logo {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9fcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWJ0bntcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubG9nb3tcbiAgICB3aWR0aDogMTAwcHg7IFxuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_pages/login/login.page.ts":
  /*!********************************************!*\
    !*** ./src/app/_pages/login/login.page.ts ***!
    \********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcApp_pagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_services/toast.service */
    "./src/app/_services/toast.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(location, authService, loadingController, toastService, alertController, router) {
        _classCallCheck(this, LoginPage);

        this.location = location;
        this.authService = authService;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.showError = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.authenticationService.logout();
          this.returnUrl = '/'; // const _this = this;
          // window['setFbAckToken'] = function(token){
          // 	_this.authService.facebookLogin(token)
          // 	// .pipe(concatMap( _ => this.authService.userInfo()))
          // 	.subscribe(token =>{
          // 		console.log(token)
          // 		_this.router.navigate([_this.returnUrl]);
          // 	}, error =>{
          // 		console.log(error);
          // 		_this.toastService.somethingWentWrong()
          // 	})
          // }
        }
      }, {
        key: "login",
        value: function login(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this16 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context11.sent;
                    this.presentLoading(loading);
                    this.authService.nativeLogin(form.value['email'], form.value['password']) // .pipe(concatMap( _ => this.authService.userInfo()))
                    .subscribe(function (token) {
                      console.log(token);

                      _this16.router.navigate([_this16.returnUrl]);

                      loading.dismiss();
                    }, function (error) {
                      console.log(error);

                      _this16.toastService.somethingWentWrong();

                      loading.dismiss();
                    });

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(loading) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return loading.present();

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/_pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/_pages/register/register.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/_pages/register/register.module.ts ***!
    \****************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcApp_pagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/_pages/register/register.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }];

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/register/register.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/_pages/register/register.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".birtday-label {\n  color: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvX3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlydGRheS1sYWJlbHtcbiAgICBjb2xvcjogIzk5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_pages/register/register.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/_pages/register/register.page.ts ***!
    \**************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcApp_pagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _datasources_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_datasources/languages */
    "./src/app/_datasources/languages.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_utils/functions */
    "./src/app/_utils/functions.ts");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");

    var BIRTHDAY_REQUIRED_KEY = 'birthday_required';

    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(translateService, authService, toastService, location) {
        var _this17 = this;

        _classCallCheck(this, RegisterPage);

        this.translateService = translateService;
        this.authService = authService;
        this.toastService = toastService;
        this.location = location;
        this.languages = _datasources_languages__WEBPACK_IMPORTED_MODULE_4__["languages"];
        translateService.get(Object(_datasources_languages__WEBPACK_IMPORTED_MODULE_4__["getLanguageByPrefix"])(this.translateService.getBrowserLang())).subscribe(function (result) {
          return _this17.language = result;
        });
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateBirtday",
        value: function updateBirtday() {
          this.birthday = Object(src_app_utils_functions__WEBPACK_IMPORTED_MODULE_7__["getAppFormatDate"])(this.bdayPicker.value);
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this18 = this;

          if (!this.birthday) {
            this.toastService.toastError(BIRTHDAY_REQUIRED_KEY);
            return;
          }

          form.value['birthday'] = this.birthday;
          this.authService.register(form.value).subscribe(function (data) {
            _this18.location.back();
          });
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('languageSelect', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"])], RegisterPage.prototype, "selectRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bdayPicker', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonDatetime"])], RegisterPage.prototype, "bdayPicker", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/_pages/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/_services/admob-free.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/_services/admob-free.service.ts ***!
    \*************************************************/

  /*! exports provided: AdmobFreeService */

  /***/
  function srcApp_servicesAdmobFreeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmobFreeService", function () {
      return AdmobFreeService;
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


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); //ca-app-pub-6771007436830318~4109924801 ios
    //ca-app-pub-6771007436830318~4967517385 android


    var GET_REWARD_URL = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + '/users/me/admob/';

    var AdmobFreeService =
    /*#__PURE__*/
    function () {
      function AdmobFreeService(admobFree, http, platform) {
        var _this19 = this;

        _classCallCheck(this, AdmobFreeService);

        this.admobFree = admobFree;
        this.http = http;
        this.platform = platform; // //Interstitial Ad's Configurations
        // interstitialConfig: AdMobFreeInterstitialConfig = {
        //   // add your config here
        //   // for the sake of this example we will just use the test config
        // isTesting: true
        //   autoShow: false,
        //   //id: "ca-app-pub-39402XXXXXXXX2544/6300978111"
        // };
        //Reward Video Ad's Configurations

        this.RewardVideoConfig = {
          id: "ca-app-pub-3940256099942544/5224354917",
          isTesting: true,
          autoShow: true //,
          //id: "ca-app-pub-6771007436830318/9397716981"
          //   //idA: "ca-app-pub-6771007436830318/2995960166"

        };
        this.platform.ready().then(function () {
          document.addEventListener('admob.rewardvideo.events.COMPLETE', function () {// handle event
          });
          document.addEventListener('admob.rewardvideo.events.LOAD_FAIL', function () {
            _this19.onRewardVideoListener && _this19.onRewardVideoListener.onFail('LOAD_FAIL');
          });
          document.addEventListener('admob.rewardvideo.events.REWARD', function () {
            // handle event
            _this19.onRewardVideoListener && _this19.onRewardVideoListener.onReward();
          });
          if (!_this19.RewardVideoConfig.isTesting) _this19.RewardVideoConfig.id = _this19.platform.is('ios') ? 'ca-app-pub-6771007436830318/9397716981' : _this19.platform.is('android') ? 'ca-app-pub-6771007436830318/2995960166' : ''; // Load ad configuration

          _this19.admobFree.rewardVideo.config(_this19.RewardVideoConfig);
        });
      }

      _createClass(AdmobFreeService, [{
        key: "rewardVideo",
        value: function rewardVideo() {
          var _this20 = this;

          //Prepare Ad to Show
          this.platform.ready().then(function () {
            _this20.admobFree.rewardVideo.prepare().then(function () {
              //Check if Ad is loaded
              _this20.admobFree.rewardVideo.isReady().then(function () {
                //Will show prepared Ad
                _this20.admobFree.rewardVideo.show().then(function () {
                  return console.log('showing...');
                }).catch(function (e) {
                  console.log(e);
                  _this20.onRewardVideoListener && _this20.onRewardVideoListener.onFail(e);
                });
              }).catch(function (e) {
                console.log(e);
                _this20.onRewardVideoListener && _this20.onRewardVideoListener.onFail(e);
              });
            }).catch(function (e) {
              console.log(e);
              _this20.onRewardVideoListener && _this20.onRewardVideoListener.onFail(e);
            });
          });
          return this;
        }
      }, {
        key: "with",
        value: function _with(onRewardVideoListener) {
          this.onRewardVideoListener = onRewardVideoListener;
        }
      }]);

      return AdmobFreeService;
    }();

    AdmobFreeService.ctorParameters = function () {
      return [{
        type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    AdmobFreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_2__["AdMobFree"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], AdmobFreeService);
    /***/
  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TOKEN_KEY = 'auth-token';
    var REGISTER_URL = _config__WEBPACK_IMPORTED_MODULE_4__["AUTH_SERVER"] + '/public/users';
    var LOGIN_URL = _config__WEBPACK_IMPORTED_MODULE_4__["AUTH_SERVER"] + '/oauth/token';
    var LOGOUT_URL = _config__WEBPACK_IMPORTED_MODULE_4__["AUTH_SERVER"] + '/users/me/logout';
    var USER_INFO = _config__WEBPACK_IMPORTED_MODULE_4__["AUTH_SERVER"] + '/users/me'; //TODO: replace localstorage with nativestorage

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.authToken = localStorage.getItem(TOKEN_KEY);
      }

      _createClass(AuthService, [{
        key: "nativeLogin",
        value: function nativeLogin(email, password) {
          return this.login("username=".concat(email, "&password=").concat(password, "&grant_type=password"));
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin(token) {
          return this.login("access_token=".concat(token, "&grant_type=social&network=facebook"));
        }
      }, {
        key: "login",
        value: function login(loginParams) {
          var _this21 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA=='
            })
          };
          return this.http.post(LOGIN_URL, loginParams, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            var token = response['access_token']; // login successful if there's a jwt token in the response

            if (token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem(TOKEN_KEY, token);
              _this21.authToken = token;
            }

            return token;
          }));
        }
      }, {
        key: "refreshCredit",
        value: function refreshCredit(creditResponse) {
          var admobCredit = creditResponse && creditResponse['admobCredit'];
          var admobRewardAvailable = admobCredit && creditResponse['count'] < creditResponse['countMax'];
          this.currentUserValue.credits = creditResponse && creditResponse['credits'];
          this.currentUserValue.rewardAvailable = admobRewardAvailable;
          this.currentUserSubject.next(this.currentUserValue);
        }
      }, {
        key: "userInfo",
        value: function userInfo() {
          var _this22 = this;

          return this.http.get(USER_INFO).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            console.log('userInfo', response);

            var user = response && response['context'] && response['context']['user'] && _models_user__WEBPACK_IMPORTED_MODULE_5__["UserMapper"].fromJson(response['context']['user']);

            if (user) {
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this22.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "contextRefresh",
        value: function contextRefresh(user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this23 = this;

          console.log('logout-->'); // remove user from local storage to log user out

          return this.http.post(LOGOUT_URL, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            console.log('finalize called');
            localStorage.removeItem('currentUser');
            localStorage.removeItem(TOKEN_KEY);
            _this23.authToken = null;

            _this23.currentUserSubject.next(null);

            location.reload(true);
          }));
        }
      }, {
        key: "register",
        value: function register(form) {
          return this.http.post(REGISTER_URL, form);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authenticationState.value;
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/_services/chat.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/chat.service.ts ***!
    \*******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcApp_servicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _models_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_models/message */
    "./src/app/_models/message.ts");
    /* harmony import */


    var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @stomp/stompjs */
    "./node_modules/@stomp/stompjs/bundles/stomp.umd.js");
    /* harmony import */


    var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _models_chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../_models/chat */
    "./src/app/_models/chat.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var KEY = '%KEY%';
    var MESSAGE_API_URL = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + "/chats/".concat(KEY, "/lines");
    var GET_CHATS_API_URL = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + '/users/me/chats';
    var FIND_OR_CREATE_CHAT = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + "/chats";
    var UNLOCK_CHAT = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + "/chats/".concat(KEY);
    var PING_MESSAGE_READ = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + "/lines";
    var NOTIFICATION_COUNT = _config__WEBPACK_IMPORTED_MODULE_4__["SERVICE_SERVER"] + '/users/me/chats/unread/count';

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(http, authService) {
        _classCallCheck(this, ChatService);

        this.http = http;
        this.authService = authService;
        this.notificationCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.disabled = true;
        this.stompClient = null;
        this.updateChatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.getUserId();
      }

      _createClass(ChatService, [{
        key: "getUserId",
        value: function getUserId() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this24 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    this.authService.currentUser.subscribe(function (user) {
                      if (user) _this24.userId = user.id;
                    });

                  case 1:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "connect",
        value: function connect(key, onConnected) {
          this.key = key;
          this.socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_7__(_config__WEBPACK_IMPORTED_MODULE_4__["WEBSOCKET_SERVICE_SERVER"] + "?access_token=".concat(this.authService.authToken));
          this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_6__["Stomp"].over(this.socket);

          var _this = this;

          this.stompClient.connect({}, function (frame) {
            _this.setConnected(true);

            onConnected();
            console.log('Connected: ' + frame);
          });
        }
      }, {
        key: "setActiveChat",
        value: function setActiveChat(chat) {
          this.activeChat = chat;
        }
      }, {
        key: "getNotificationCount",
        value: function getNotificationCount() {
          var _this25 = this;

          this.http.get(NOTIFICATION_COUNT).subscribe(function (response) {
            return _this25.notificationCount.next(response['count']);
          });
        }
      }, {
        key: "unlock",
        value: function unlock(chat) {
          var _this26 = this;

          return this.http.post(UNLOCK_CHAT.replace(KEY, chat.id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (response) {
            _this26.authService.refreshCredit(response['credit']);

            return _models_chat__WEBPACK_IMPORTED_MODULE_9__["ChatMapper"].fromJson(response['chat']);
          }));
        }
      }, {
        key: "getActiveChat",
        value: function getActiveChat() {
          return this.activeChat;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(msg) {
          if (this.key == null) throw new Error('key must not be null!');
          this.stompClient.send('/app/' + this.key, {}, JSON.stringify({
            'type': _models_message__WEBPACK_IMPORTED_MODULE_5__["Type"].DEFAULT,
            'content': msg
          }));
        }
      }, {
        key: "sendInvitation",
        value: function sendInvitation() {
          var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          if (this.key == null) throw new Error('key must not be null!');
          this.stompClient.send('/app/' + this.key, {}, JSON.stringify({
            'type': _models_message__WEBPACK_IMPORTED_MODULE_5__["Type"].INVITATION,
            'content': content
          }));
        }
      }, {
        key: "pingMessageRead",
        value: function pingMessageRead(ids) {
          this.http.post(PING_MESSAGE_READ, {
            lineIds: ids
          }).subscribe();
        }
      }, {
        key: "findOrCreate",
        value: function findOrCreate(keys) {
          return this.http.post(FIND_OR_CREATE_CHAT, {
            userIds: keys
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages(key) {
          var _this27 = this;

          var _this = this;

          return this.http.get(MESSAGE_API_URL.replace(KEY, key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["concatMap"])(function (response) {
            var messages = _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageMapper"].fromJsonArray(response['chatLines']);

            setTimeout(function () {
              var ids = messages.filter(function (message) {
                return message.readBy.indexOf(_this27.userId) == -1;
              }).map(function (message) {
                return message.id;
              });

              if (ids.length > 0) {
                _this.pingMessageRead(ids);
              }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(messages);
          }));
        }
      }, {
        key: "bindToMessages",
        value: function bindToMessages() {
          var _this28 = this;

          if (this.key == null) throw new Error('key must not be null!');

          var _this = this;

          var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.stompClient.subscribe('/user/chat/' + _this28.key, function (data) {
              if (data['body']) {
                var message = _models_message__WEBPACK_IMPORTED_MODULE_5__["MessageMapper"].fromJson(JSON.parse(data['body']));

                observer.next(message);
                setTimeout(function () {
                  _this.pingMessageRead([message.id]);
                });
              }
            });
          });
          return observable;
        }
      }, {
        key: "getChats",
        value: function getChats() {
          return this.http.get(GET_CHATS_API_URL);
        }
      }, {
        key: "setConnected",
        value: function setConnected(connected) {
          this.disabled = !connected;
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.stompClient != null) {
            this.stompClient.disconnect();
          }

          this.setConnected(false);
          console.log('Disconnected!');
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])], ChatService);
    /***/
  },

  /***/
  "./src/app/_services/coffe.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/coffe.service.ts ***!
    \********************************************/

  /*! exports provided: CoffeeService */

  /***/
  function srcApp_servicesCoffeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoffeeService", function () {
      return CoffeeService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_queryFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_models/queryFilter */
    "./src/app/_models/queryFilter.ts");

    var PAGINATION_LIMIT = 10;
    var FIND_CLOSEST_USERS_URL = _config__WEBPACK_IMPORTED_MODULE_3__["SERVICE_SERVER"] + '/users/me/users';
    var SEND_COFFEE_INVITATION = _config__WEBPACK_IMPORTED_MODULE_3__["SERVICE_SERVER"] + '/invitations'; // const SINGLE_PROPOSAL_SERVICE = SERVICE_SERVER + '/api/proposal'
    // const JOIN_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/join-proposal/'
    // const APPROVE_REQUEST_SERVICE   = SERVICE_SERVER + '/api/approve-request'
    // const DENY_REQUEST_SERVICE   = SERVICE_SERVER + '/api/deny-request'
    // const BLOCK_USER_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/block-user-proposal/'

    var CoffeeService =
    /*#__PURE__*/
    function () {
      function CoffeeService(http) {
        _classCallCheck(this, CoffeeService);

        this.http = http;
        this.localizedUsers = [];
        this.userLoading = false;
      }

      _createClass(CoffeeService, [{
        key: "clearSearch",
        value: function clearSearch() {
          this.localizedUsers.length = 0;
        }
      }, {
        key: "reload",
        value: function reload() {
          this.clearSearch();
          return this.moreUsersOnLastUsers();
        }
      }, {
        key: "sendInvitation",
        value: function sendInvitation(userIds) {
          var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          return this.http.post(SEND_COFFEE_INVITATION, {
            userIds: userIds,
            content: content
          });
        }
      }, {
        key: "findClosestUsers",
        value: function findClosestUsers(mLat, mLong) {
          var _this29 = this;

          var maxDistance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.clearSearch();
          var queryUrl = FIND_CLOSEST_USERS_URL + '?longitude=' + mLong + '&latitude=' + mLat + '&limit=' + PAGINATION_LIMIT + '&offset=0' + (maxDistance ? '&distance=' + maxDistance : "");
          queryUrl = this.appendFilters(queryUrl);
          return this.http.get(queryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            _this29.mLastLat = mLat;
            _this29.mLastLong = mLong;
            _this29.mMaxDistance = maxDistance;

            var localizedUsers = _models_user__WEBPACK_IMPORTED_MODULE_4__["LocalizedUserMapper"].fromJsonArray(response['users']);

            if (localizedUsers) localizedUsers.map(function (it) {
              return _this29.localizedUsers.push(it);
            });
            return _this29.localizedUsers;
          }));
        }
      }, {
        key: "moreUsersOnLastUsers",
        value: function moreUsersOnLastUsers() {
          var _this30 = this;

          console.log(this.userLoading, 'moreUsers');
          if (this.userLoading) return;
          var queryUrl = FIND_CLOSEST_USERS_URL + '?longitude=' + this.mLastLong + '&latitude=' + this.mLastLat + '&limit=' + PAGINATION_LIMIT + '&offset=' + this.localizedUsers.length.toString() + (this.mMaxDistance ? '&distance=' + this.mMaxDistance : "");
          queryUrl = this.appendFilters(queryUrl);
          console.log(queryUrl, 'queryUrl');
          this.userLoading = true;
          return this.http.get(queryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            console.log('responseeee');

            var localizedUsers = _models_user__WEBPACK_IMPORTED_MODULE_4__["LocalizedUserMapper"].fromJsonArray(response['users']);

            console.log(response);
            if (localizedUsers) localizedUsers.map(function (it) {
              return _this30.localizedUsers.push(it);
            });
            return localizedUsers;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            return _this30.userLoading = false;
          }));
        }
      }, {
        key: "appendFilters",
        value: function appendFilters(queryUrl) {
          var queryFilter = JSON.parse(localStorage.getItem(_models_queryFilter__WEBPACK_IMPORTED_MODULE_6__["FILTER_PREFERENCES_KEY"]));

          if (queryFilter) {
            if (queryFilter.enableMen && !queryFilter.enableWomen) queryUrl += '&gender=MALE';
            if (!queryFilter.enableMen && queryFilter.enableWomen) queryUrl += '&gender=FEMALE';
            if (queryFilter.onlyOnline) queryUrl += '&online=true';
            queryUrl += "&ageMin=".concat(queryFilter.ageRange.lower);
            queryUrl += "&ageMax=".concat(queryFilter.ageRange.upper);
          }

          return queryUrl;
        }
      }]);

      return CoffeeService;
    }();

    CoffeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CoffeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CoffeeService);
    /***/
  },

  /***/
  "./src/app/_services/toast.service.ts":
  /*!********************************************!*\
    !*** ./src/app/_services/toast.service.ts ***!
    \********************************************/

  /*! exports provided: ToastService */

  /***/
  function srcApp_servicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var SOMETHING_WENT_WRONG = 'something_went_wrong';

    var ToastService =
    /*#__PURE__*/
    function () {
      function ToastService(toastCtrl, alertCtrl, loadingCtrl, translateService) {
        _classCallCheck(this, ToastService);

        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
      }

      _createClass(ToastService, [{
        key: "somethingWentWrong",
        value: function somethingWentWrong() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.toastError(SOMETHING_WENT_WRONG);

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "toastSuccess",
        value: function toastSuccess(key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var messageObservable, message, toast;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    messageObservable = this.getStringObservableFromKey(key);
                    _context15.next = 3;
                    return messageObservable.toPromise();

                  case 3:
                    message = _context15.sent;
                    _context15.next = 6;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'top'
                    });

                  case 6:
                    toast = _context15.sent;
                    toast.present();

                  case 8:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "alert",
        value: function alert(key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var messageObservable, message, toast;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    messageObservable = this.getStringObservableFromKey(key);
                    _context16.next = 3;
                    return messageObservable.toPromise();

                  case 3:
                    message = _context16.sent;
                    _context16.next = 6;
                    return this.alertCtrl.create({
                      message: message
                    });

                  case 6:
                    toast = _context16.sent;
                    toast.present();

                  case 8:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "toastError",
        value: function toastError(key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var messageObservable, message, toast;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    messageObservable = this.getStringObservableFromKey(key);
                    _context17.next = 3;
                    return messageObservable.toPromise();

                  case 3:
                    message = _context17.sent;
                    _context17.next = 6;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 3000,
                      position: 'top',
                      cssClass: 'toast-error'
                    });

                  case 6:
                    toast = _context17.sent;
                    toast.present();

                  case 8:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "getStringObservableFromKey",
        value: function getStringObservableFromKey(key) {
          return this.translateService.get(key);
        }
      }, {
        key: "load",
        value: function load() {
          return new Loader();
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], ToastService);

    var Loader =
    /*#__PURE__*/
    function () {
      function Loader() {
        _classCallCheck(this, Loader);
      }

      _createClass(Loader, [{
        key: "present",
        value: function present() {
          document.querySelector('#loading-backdrop').classList.add('visibile');
          document.querySelector('#loading-backdrop').classList.remove('gone');
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          document.querySelector('#loading-backdrop').classList.add('gone');
          document.querySelector('#loading-backdrop').classList.remove('visible');
        }
      }]);

      return Loader;
    }();
    /***/

  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_pricing_plan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../_models/pricing-plan */
    "./src/app/_models/pricing-plan.ts");

    var ID = "%ID%";
    var CONTEXT = _config__WEBPACK_IMPORTED_MODULE_5__["AUTH_SERVER"] + '/api/get-context';
    var UPLOAD_URL = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/images";
    var UPDATE_PROFILE_IMG_URL = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/image";
    var UPDATE_INFO = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me";
    var GET_CREDITS = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/credit";
    var UPDATE_USER_ADDRESS = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/position";
    var SUBSCRIBE_TO_PUSH_URL = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/notifications";
    var GET_USER_BY_ID = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/".concat(ID);
    var ADMOB_REWARD = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/admob";
    var LIST_PLANS = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/products";
    var DELETE_ACCOUNT = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me";
    var FINALIZE_PAYMENT = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/buy";
    var DELETE_IMAGE = _config__WEBPACK_IMPORTED_MODULE_5__["SERVICE_SERVER"] + "/users/me/images/".concat(ID);
    var STORAGE_KEY = 'experience_key_img';

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, transfer, platform, camera, auth) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.transfer = transfer;
        this.platform = platform;
        this.camera = camera;
        this.auth = auth;
        this.contentType = 'image/png';
        this.fileTransfer = this.transfer.create();
        this.lastPlans = [];
      }

      _createClass(UserService, [{
        key: "getContext",
        value: function getContext() {
          return this.http.get(CONTEXT);
        }
      }, {
        key: "getUserById",
        value: function getUserById(id) {
          return this.http.get(GET_USER_BY_ID.replace(ID, id));
        }
      }, {
        key: "updateInfo",
        value: function updateInfo(info) {
          var _this31 = this;

          return this.http.post(UPDATE_INFO, {
            bio: info.bio,
            gender: info.gender,
            imageIds: info.imageIds
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (response) {
            var user = response && response['context'] && response['context']['user'] && _models_user__WEBPACK_IMPORTED_MODULE_8__["UserMapper"].fromJson(response['context']['user']);

            if (user) _this31.auth.contextRefresh(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(response);
          }));
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imageId) {
          var _this32 = this;

          return this.http.request('DELETE', DELETE_IMAGE.replace(ID, imageId), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (response) {
            var user = response && response['context'] && response['context']['user'] && _models_user__WEBPACK_IMPORTED_MODULE_8__["UserMapper"].fromJson(response['context']['user']);

            if (user) _this32.auth.contextRefresh(user);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(response);
          })).toPromise();
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(index, sourceType) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            if (index > 3) return;
            var options = {
              quality: 100,
              destinationType: _this33.camera.DestinationType.FILE_URI,
              sourceType: sourceType,
              saveToPhotoAlbum: false,
              encodingType: _this33.camera.EncodingType.JPEG,
              mediaType: _this33.camera.MediaType.PICTURE,
              allowEdit: true,
              targetWidth: 1080,
              targetHeight: 1226,
              correctOrientation: true
            };

            _this33.camera.getPicture(options).then(function (imageData) {
              if (_this33.platform.is('mobileweb') || _this33.platform.is('desktop')) {
                imageData = "data:image/jpeg;base64," + imageData;
                var formData = new FormData();

                var imgBlob = _this33.dataURItoBlob(imageData);

                formData.append('image', imgBlob, _this33.createFileName());

                _this33.uploadImageData(UPLOAD_URL + "/".concat(index), formData, function (user, response) {
                  if (!user.images) {
                    user.images = new Array(3);
                  }

                  user.images[index - 1] = response['url'];
                  user.imageIds[index - 1] = response['id'];
                  return user;
                }).then(function (user) {
                  return resolve(user);
                }).catch(function (err) {
                  return reject(err);
                });
              } else {
                _this33.uploadUri(UPLOAD_URL + "/".concat(index), imageData, function (user, response) {
                  if (!user.images) {
                    user.images = new Array(3);
                  }

                  user.images[index - 1] = response['url'];
                  user.imageIds[index - 1] = response['id'];
                  return user;
                }).then(function (user) {
                  return resolve(user);
                }).catch(function (err) {
                  return reject(err);
                });
              }
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getCredits",
        value: function getCredits() {
          return this.http.get(GET_CREDITS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (response) {
            var credits = response['credit'] && response['credit']['credits'];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(credits);
          }));
        }
      }, {
        key: "udateProfileImg",
        value: function udateProfileImg(sourceType) {
          var _this34 = this;

          var onUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return new Promise(function (resolve, reject) {
            var options = {
              quality: 100,
              destinationType: _this34.camera.DestinationType.FILE_URI,
              sourceType: sourceType,
              saveToPhotoAlbum: false,
              encodingType: _this34.camera.EncodingType.JPEG,
              mediaType: _this34.camera.MediaType.PICTURE,
              targetWidth: 400,
              targetHeight: 400,
              correctOrientation: true
            };

            _this34.camera.getPicture(options).then(function (imageData) {
              if (_this34.platform.is('mobileweb') || _this34.platform.is('desktop')) {
                imageData = "data:image/jpeg;base64," + imageData;
                var formData = new FormData();

                var imgBlob = _this34.dataURItoBlob(imageData);

                formData.append('image', imgBlob, _this34.createFileName());

                _this34.uploadImageData(UPDATE_PROFILE_IMG_URL, formData, function (user, response) {
                  console.log('image successful updated -->' + response['url']);
                  user.profileImg = response['url'];
                  return user;
                }).then(function (user) {
                  return resolve(user);
                }).catch(function (err) {
                  return reject(err);
                });
              } else {
                _this34.uploadUri(UPDATE_PROFILE_IMG_URL, imageData, function (user, response) {
                  console.log('image successful updated -->' + response['url']);
                  user.profileImg = response['url'];
                  return user;
                }).then(function (user) {
                  return resolve(user);
                }).catch(function (err) {
                  return reject(err);
                });

                ;
              }
            }, function (err) {
              reject(err);
            });
          });
        } //todo: check request whether is an profile or  generic image

      }, {
        key: "uploadUri",
        value: function uploadUri(upload_url, uri, getUpdatedUser) {
          var _this35 = this;

          return new Promise(function (resolve, reject) {
            var options = {
              fileKey: 'image',
              chunkedMode: false,
              mimeType: "image/jpeg",
              headers: {
                'Authorization': 'Bearer ' + _this35.auth.authToken
              },
              fileName: _this35.createFileName()
            };

            _this35.fileTransfer.upload(encodeURI(uri), upload_url, options).then(function (data) {
              console.log(data);
              console.log('image successful updated -->', JSON.parse(data.response));
              var user = getUpdatedUser(_this35.auth.currentUserValue, JSON.parse(data.response));
              console.log('user in upload image data-->', user);

              _this35.auth.contextRefresh(user);

              resolve(user);
            }).catch(function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "uploadImageData",
        value: function uploadImageData(upload_url, formData, getUpdatedUser) {
          var _this36 = this;

          return new Promise(function (resolve, reject) {
            _this36.http.post(upload_url, formData).subscribe(function (__response) {
              console.log('image successful updated -->' + __response['url']);
              var user = getUpdatedUser(_this36.auth.currentUserValue, __response);
              console.log('user in upload image data-->', user);

              _this36.auth.contextRefresh(user);

              resolve(user);
            }, function (throwable) {
              return reject(throwable);
            });
          });
        }
      }, {
        key: "subscribeToPushNotifications",
        value: function subscribeToPushNotifications(id, pushToken) {
          return this.http.post(SUBSCRIBE_TO_PUSH_URL, {
            id: id,
            pushToken: pushToken
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          // convert base64/URLEncoded data component to raw binary data held in a string
          var byteString;
          if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

          var ia = new Uint8Array(byteString.length);

          for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ia], {
            type: mimeString
          });
        }
      }, {
        key: "createFileName",
        value: function createFileName() {
          var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".jpg";
          return newFileName;
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(address, latitude, longitude) {
          return this.http.post(UPDATE_USER_ADDRESS, {
            address: address,
            latitude: latitude,
            longitude: longitude
          });
        }
      }, {
        key: "notifyVideoReward",
        value: function notifyVideoReward() {
          return this.http.post(ADMOB_REWARD, {});
        }
      }, {
        key: "setPlans",
        value: function setPlans(plans) {
          this.lastPlans = plans;
        }
      }, {
        key: "listPlans",
        value: function listPlans() {
          var _this37 = this;

          return this.http.get(LIST_PLANS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (response) {
            if (response && response['products']) {
              _this37.lastPlans = _models_pricing_plan__WEBPACK_IMPORTED_MODULE_11__["PricingPlanMapper"].fromJsonArray(response['products']);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(_this37.lastPlans);
            } else return null;
          }));
        }
      }, {
        key: "finalizePayment",
        value: function finalizePayment(data) {
          return this.http.post(FINALIZE_PAYMENT, data);
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(reason) {
          var _this38 = this;

          return this.http.request('DELETE', DELETE_ACCOUNT, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            }),
            body: {
              reason: reason
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
            return _this38.auth.logout().subscribe();
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], UserService);
    /***/
  },

  /***/
  "./src/app/_utils/functions.ts":
  /*!*************************************!*\
    !*** ./src/app/_utils/functions.ts ***!
    \*************************************/

  /*! exports provided: titleCaseWord, timeSince, isOnline, age, getFormattedDistance, removeObjectFromArray, withCommaOrEmpty, joinWithCommaOrEmpty, getAppFormatDate, getErrorForCode */

  /***/
  function srcApp_utilsFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "titleCaseWord", function () {
      return titleCaseWord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timeSince", function () {
      return timeSince;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isOnline", function () {
      return isOnline;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "age", function () {
      return age;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFormattedDistance", function () {
      return getFormattedDistance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeObjectFromArray", function () {
      return removeObjectFromArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "withCommaOrEmpty", function () {
      return withCommaOrEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "joinWithCommaOrEmpty", function () {
      return joinWithCommaOrEmpty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAppFormatDate", function () {
      return getAppFormatDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getErrorForCode", function () {
      return getErrorForCode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

    function titleCaseWord(word) {
      if (!word) return word;
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    function timeSince(date) {
      if (date) return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](date).fromNow();else return "";
    }

    function isOnline(date) {
      return date && moment__WEBPACK_IMPORTED_MODULE_1__(date).isAfter(moment__WEBPACK_IMPORTED_MODULE_1__["utc"]().subtract(15, 'minutes'));
    }

    function age(date) {
      return date ? "" + moment__WEBPACK_IMPORTED_MODULE_1__["utc"]().diff(date, 'years') : "";
    }

    function getFormattedDistance(distance) {
      return distance ? distance >= 1000 ? "".concat(Math.round(distance / 10) / 100, " km").replace('.', ",") : "".concat(distance, " m") : '';
    }

    function removeObjectFromArray(array, obj) {
      var index = array.indexOf(obj, 0);

      if (index > -1) {
        array.splice(index, 1);
      }

      return array;
    }

    function withCommaOrEmpty(str) {
      return str && str.length > 0 ? str + ", " : "";
    }

    function joinWithCommaOrEmpty() {
      for (var _len = arguments.length, str = new Array(_len), _key = 0; _key < _len; _key++) {
        str[_key] = arguments[_key];
      }

      if (!str || str.length < 0) return "";
      var res = "";

      for (var i = 0; i < str.length - 1; i++) {
        res += withCommaOrEmpty(str[i]);
      }

      res += str[str.length - 1];
      return res;
    }

    function getAppFormatDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](date).format('YYYY-MM-DD');
    }

    function getErrorForCode(code) {
      return code;
    }
    /***/

  },

  /***/
  "./src/app/_utils/transitions.ts":
  /*!***************************************!*\
    !*** ./src/app/_utils/transitions.ts ***!
    \***************************************/

  /*! exports provided: shadow, iosTransitionAnimation */

  /***/
  function srcApp_utilsTransitionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shadow", function () {
      return shadow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function () {
      return iosTransitionAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DURATION = 500;
    var EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
    var OPACITY = 'opacity';
    var TRANSFORM = 'transform';
    var TRANSLATEX = 'translateX';
    var CENTER = '0%';
    var OFF_OPACITY = 0.8;

    function shadow(el) {
      return el.shadowRoot || el;
    }

    function iosTransitionAnimation(AnimationC, navEl, opts) {
      var isRTL = navEl.ownerDocument.dir === 'rtl';
      var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
      var OFF_LEFT = isRTL ? '33%' : '-33%';
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      var rootTransition = new AnimationC();
      rootTransition.addElement(enteringEl).duration(opts.duration || DURATION).easing(opts.easing || EASING).beforeRemoveClass('ion-page-invisible');

      if (leavingEl && navEl) {
        var navDecor = new AnimationC();
        navDecor.addElement(navEl);
        rootTransition.add(navDecor);
      }

      var backDirection = opts.direction === 'back';
      var contentEl = enteringEl.querySelector(':scope > ion-content');
      var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
      var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
      var enteringContent = new AnimationC();

      if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
        enteringContent.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'));
      } else {
        enteringContent.addElement(contentEl);
        enteringContent.addElement(headerEls);
      }

      rootTransition.add(enteringContent);

      if (backDirection) {
        enteringContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, OFF_LEFT, CENTER, true).fromTo(OPACITY, OFF_OPACITY, 1, true);
      } else {
        enteringContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
      }

      enteringToolBarEls.forEach(function (enteringToolBarEl) {
        var enteringToolBar = new AnimationC();
        enteringToolBar.addElement(enteringToolBarEl);
        rootTransition.add(enteringToolBar);
        var enteringTitle = new AnimationC();
        enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title'));
        var enteringToolBarButtons = new AnimationC();
        enteringToolBarButtons.addElement(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
        var enteringToolBarItems = new AnimationC();
        enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
        var enteringToolBarBg = new AnimationC();
        enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background'));
        var enteringBackButton = new AnimationC();
        var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');

        if (backButtonEl) {
          enteringBackButton.addElement(backButtonEl);
        }

        enteringToolBar.add(enteringTitle).add(enteringToolBarButtons).add(enteringToolBarItems).add(enteringToolBarBg).add(enteringBackButton);
        enteringTitle.fromTo(OPACITY, 0.01, 1, true);
        enteringToolBarButtons.fromTo(OPACITY, 0.01, 1, true);
        enteringToolBarItems.fromTo(OPACITY, 0.01, 1, true);

        if (backDirection) {
          enteringTitle.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true);
          enteringToolBarItems.fromTo(TRANSLATEX, OFF_LEFT, CENTER, true);
          enteringBackButton.fromTo(OPACITY, 0.01, 1, true);
        } else {
          enteringTitle.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
          enteringToolBarItems.fromTo(TRANSLATEX, OFF_RIGHT, CENTER, true);
          enteringToolBarBg.beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.01, 1, true);
          enteringBackButton.fromTo(OPACITY, 0.01, 1, true);

          if (backButtonEl) {
            var enteringBackBtnText = new AnimationC();
            enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')).fromTo(TRANSLATEX, isRTL ? '-100px' : '100px', '0px');
            enteringToolBar.add(enteringBackBtnText);
          }
        }
      });

      if (leavingEl) {
        var leavingContent = new AnimationC();
        leavingContent.addElement(leavingEl.querySelector(':scope > ion-content'));
        leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
        rootTransition.add(leavingContent);

        if (backDirection) {
          leavingContent.beforeClearStyles([OPACITY]).fromTo(TRANSLATEX, CENTER, isRTL ? '-100%' : '100%');
        } else {
          leavingContent.fromTo(TRANSLATEX, CENTER, OFF_LEFT, true).fromTo(OPACITY, 1, OFF_OPACITY, true);
        }

        var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        leavingToolBarEls.forEach(function (leavingToolBarEl) {
          var leavingToolBar = new AnimationC();
          leavingToolBar.addElement(leavingToolBarEl);
          var leavingTitle = new AnimationC();
          leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title'));
          var leavingToolBarButtons = new AnimationC();
          leavingToolBarButtons.addElement(leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
          var leavingToolBarItems = new AnimationC();
          var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');

          if (leavingToolBarItemEls.length > 0) {
            leavingToolBarItems.addElement(leavingToolBarItemEls);
          }

          var leavingToolBarBg = new AnimationC();
          leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background'));
          var leavingBackButton = new AnimationC();
          var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');

          if (backButtonEl) {
            leavingBackButton.addElement(backButtonEl);
          }

          leavingToolBar.add(leavingTitle).add(leavingToolBarButtons).add(leavingToolBarItems).add(leavingBackButton).add(leavingToolBarBg);
          rootTransition.add(leavingToolBar);
          leavingBackButton.fromTo(OPACITY, 0.99, 0);
          leavingTitle.fromTo(OPACITY, 0.99, 0);
          leavingToolBarButtons.fromTo(OPACITY, 0.99, 0, 0);
          leavingToolBarItems.fromTo(OPACITY, 0.99, 0);

          if (backDirection) {
            leavingTitle.fromTo(TRANSLATEX, CENTER, isRTL ? '-100%' : '100%');
            leavingToolBarItems.fromTo(TRANSLATEX, CENTER, isRTL ? '-100%' : '100%');
            leavingToolBarBg.beforeClearStyles([OPACITY]).fromTo(OPACITY, 1, 0.01);

            if (backButtonEl) {
              var leavingBackBtnText = new AnimationC();
              leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text'));
              leavingBackBtnText.fromTo(TRANSLATEX, CENTER, (isRTL ? -124 : 124) + 'px');
              leavingToolBar.add(leavingBackBtnText);
            }
          } else {
            leavingTitle.fromTo(TRANSLATEX, CENTER, OFF_LEFT).afterClearStyles([TRANSFORM]);
            leavingToolBarItems.fromTo(TRANSLATEX, CENTER, OFF_LEFT).afterClearStyles([TRANSFORM, OPACITY]);
            leavingBackButton.afterClearStyles([OPACITY]);
            leavingTitle.afterClearStyles([OPACITY]);
            leavingToolBarButtons.afterClearStyles([OPACITY]);
          }
        });
      }

      return Promise.resolve(rootTransition);
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_guards/auth.guard */
    "./src/app/_guards/auth.guard.ts");

    var routes = [// { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: '',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: './tabs/tabs.module#TabsModule'
    }, {
      path: 'email-login',
      loadChildren: './_pages/login/login.module#LoginPageModule'
    }, {
      path: 'register',
      loadChildren: './_pages/register/register.module#RegisterPageModule'
    }, // { path: 'user-profile',  canActivate: [AuthGuard], loadChildren: './_pages/user-profile/user-profile.module#UserProfilePageModule' },
    // { path: 'home', canActivate: [AuthGuard], loadChildren : './_pages/home/home.module#HomePageModule'},
    {
      path: 'chat/:with',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: './_pages/chat/chat.module#ChatRoomPageModule'
    }, {
      path: 'login',
      loadChildren: './_pages/landing/landing.module#LandingPageModule'
    }, {
      path: 'view-profile',
      loadChildren: './_pages/view-profile/view-profile.module#ViewProfilePageModule'
    }, {
      path: 'localized-users',
      loadChildren: './_pages/localized-users/localized-users.module#LocalizedUsersPageModule'
    }, {
      path: 'localized-users',
      loadChildren: './_pages/localized-users/localized-users.module#LocalizedUsersPageModule'
    }, {
      path: 'view-profile/:id',
      loadChildren: './_pages/view-profile/view-profile.module#ViewProfilePageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./_services/chat.service */
    "./src/app/_services/chat.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, oneSignal, translate, authenticationService, chatService, screenOrientation, router) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.translate = translate;
        this.authenticationService = authenticationService;
        this.chatService = chatService;
        this.screenOrientation = screenOrientation;
        this.router = router;
        this.showSplash = true;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this39 = this;

          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
          this.platform.ready().then(function () {
            _this39.splashScreen.hide();

            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["timer"])(3000).subscribe(function () {
              document.getElementById('ion-app').style.opacity = '1';
              _this39.showSplash = false;
            }); // <-- hide animation after 3s

            _this39.authenticationService.currentUser.subscribe(function (x) {
              return _this39.currentUser = x;
            }); // this language will be used as a fallback when a translation isn't found in the current language


            _this39.translate.setDefaultLang('en'); // the lang to use, if the lang isn't available, it will use the current loader to get them


            _this39.translate.use('en');

            _this39.oneSignal.startInit('700f900e-f399-44e4-800d-5fc23f769dbc', '436027625251');

            _this39.oneSignal.inFocusDisplaying(_this39.oneSignal.OSInFocusDisplayOption.Notification);

            _this39.oneSignal.handleNotificationReceived().subscribe(function () {
              // do something when notification is received
              _this39.chatService.updateChatSubject.next(true);

              var notificationCount = _this39.chatService.notificationCount.getValue();

              _this39.chatService.notificationCount.next(notificationCount + 1);
            });

            _this39.oneSignal.handleNotificationOpened().subscribe(function () {// do something when a notification is opened
            });

            _this39.oneSignal.endInit();

            _this39.statusBar.styleDefault();

            _this39.enableDarkMode();
          });
        }
      }, {
        key: "enableDarkMode",
        value: function enableDarkMode() {
          var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
          toggleDarkTheme(prefersDark.matches); // Listen for changes to the prefers-color-scheme media query

          prefersDark.addListener(function (mediaQuery) {
            return toggleDarkTheme(mediaQuery.matches);
          }); // Add or remove the "dark" class based on if the media query matches

          function toggleDarkTheme(shouldAdd) {
            document.body.classList.toggle('dark', shouldAdd);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/File/ngx */
    "./node_modules/@ionic-native/File/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _pages_chat_chat_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_pages/chat/chat.module */
    "./src/app/_pages/chat/chat.module.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./_pages/login/login.module */
    "./src/app/_pages/login/login.module.ts");
    /* harmony import */


    var _pages_register_register_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./_pages/register/register.module */
    "./src/app/_pages/register/register.module.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
    /* harmony import */


    var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/Camera/ngx */
    "./node_modules/@ionic-native/Camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./_helpers/error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony import */


    var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./_helpers/jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony import */


    var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/globalization/ngx */
    "./node_modules/@ionic-native/globalization/ngx/index.js");
    /* harmony import */


    var _utils_transitions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./_utils/transitions */
    "./src/app/_utils/transitions.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./_components/image-modal/image-modal.component */
    "./src/app/_components/image-modal/image-modal.component.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./_components/user-profile-popover/user-profile-popover.component */
    "./src/app/_components/user-profile-popover/user-profile-popover.component.ts");
    /* harmony import */


    var _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./_components/edit-user-profile/edit-user-profile.component */
    "./src/app/_components/edit-user-profile/edit-user-profile.component.ts");
    /* harmony import */


    var ng2_dragula__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ng2-dragula */
    "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
    /* harmony import */


    var _components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./_components/manage-credits/manage-credits.component */
    "./src/app/_components/manage-credits/manage-credits.component.ts");
    /* harmony import */


    var _components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./_components/select-plan/select-plan.component */
    "./src/app/_components/select-plan/select-plan.component.ts");
    /* harmony import */


    var _services_admob_free_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./_services/admob-free.service */
    "./src/app/_services/admob-free.service.ts");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./delete-account/delete-account.component */
    "./src/app/delete-account/delete-account.component.ts");
    /* harmony import */


    var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @ionic-native/in-app-purchase/ngx */
    "./node_modules/@ionic-native/in-app-purchase/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./_components/filter/filter.component */
    "./src/app/_components/filter/filter.component.ts"); // import { AdMobFree } from '@ionic-native/admob-free/ngx';
    // import { AdMobFree } from '@ionic-native/admob-free/ngx';


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
    } // import { Injectable } from "@angular/core";
    // import { HammerGestureConfig } from "@angular/platform-browser";
    // @Injectable()
    // export class IonicGestureConfig extends HammerGestureConfig {
    //   buildHammer(element: HTMLElement) {
    //     const mc = new (<any>window).Hammer(element);
    //     for (const eventName in this.overrides) {
    //       if (eventName) {
    //         mc.get(eventName).set(this.overrides[eventName]);
    //       }
    //     }
    //     return mc;
    //   }
    // }


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_30__["ImageModalComponent"], _components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_35__["ManageCreditsComponent"], _components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_36__["SelectPlanComponent"], _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_39__["DeleteAccountComponent"], _components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_32__["UserProfilePopoverComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_42__["FilterComponent"], _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["EditUserProfileComponent"]],
      entryComponents: [_components_image_modal_image_modal_component__WEBPACK_IMPORTED_MODULE_30__["ImageModalComponent"], _components_manage_credits_manage_credits_component__WEBPACK_IMPORTED_MODULE_35__["ManageCreditsComponent"], _components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_36__["SelectPlanComponent"], _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_39__["DeleteAccountComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_42__["FilterComponent"], _components_user_profile_popover_user_profile_popover_component__WEBPACK_IMPORTED_MODULE_32__["UserProfilePopoverComponent"], _components_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["EditUserProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        navAnimation: _utils_transitions__WEBPACK_IMPORTED_MODULE_27__["iosTransitionAnimation"]
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _pages_chat_chat_module__WEBPACK_IMPORTED_MODULE_16__["ChatRoomPageModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_34__["DragulaModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], //    SharedModule,
      _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _pages_login_login_module__WEBPACK_IMPORTED_MODULE_19__["LoginPageModule"], //    ProfilePageModule,
      _pages_register_register_module__WEBPACK_IMPORTED_MODULE_20__["RegisterPageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["IonicStorageModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]],
      providers: [_ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_38__["AdMobFree"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__["ScreenOrientation"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_40__["InAppPurchase"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_17__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_18__["NativeGeocoder"], _services_admob_free_service__WEBPACK_IMPORTED_MODULE_37__["AdmobFreeService"], _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_26__["Globalization"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_28__["NativeStorage"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_29__["Facebook"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_41__["WebView"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_22__["Camera"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_31__["OneSignal"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_23__["FileTransfer"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
        useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_25__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
        useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: AUTH_SERVER, SERVICE_SERVER, WEBSOCKET_SERVICE_SERVER */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTH_SERVER", function () {
      return AUTH_SERVER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVICE_SERVER", function () {
      return SERVICE_SERVER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WEBSOCKET_SERVICE_SERVER", function () {
      return WEBSOCKET_SERVICE_SERVER;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AUTH_SERVER = 'https://www.kofify.com';
    var SERVICE_SERVER = 'https://www.kofify.com';
    var WEBSOCKET_SERVICE_SERVER = 'https://www.kofify.com/chat-websocket';
    /***/
  },

  /***/
  "./src/app/delete-account/delete-account.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/delete-account/delete-account.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeleteAccountDeleteAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sad {\n  height: 40px;\n  width: 40px;\n  display: block;\n  margin: 0 auto;\n  background: url('sad.png');\n  background-size: 100% 100%; }\n\n.delete-account-btn {\n  text-align: center;\n  margin: 0 auto;\n  width: 100%; }\n\n.delete-account-txtarea {\n  box-shadow: aliceblue 3px 3px;\n  height: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4ZXkvQXBwUHJvamVjdHMvaWNlYnJlYWtlci9jbGllbnQva29maWZ5L3NyYy9hcHAvZGVsZXRlLWFjY291bnQvZGVsZXRlLWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVTtFQUNWLGNBQWM7RUFDZCxjQUFhO0VBQ2IsMEJBQTBDO0VBQzFDLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksNkJBQTZCO0VBQzdCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1hY2NvdW50L2RlbGV0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6NDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWdzL3NhZC5wbmcgKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5kZWxldGUtYWNjb3VudC1idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGVsZXRlLWFjY291bnQtdHh0YXJlYXtcbiAgICBib3gtc2hhZG93OiBhbGljZWJsdWUgM3B4IDNweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/delete-account/delete-account.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/delete-account/delete-account.component.ts ***!
    \************************************************************/

  /*! exports provided: DeleteAccountComponent */

  /***/
  function srcAppDeleteAccountDeleteAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function () {
      return DeleteAccountComponent;
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
    /*! ../_services/user.service */
    "./src/app/_services/user.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var DeleteAccountComponent =
    /*#__PURE__*/
    function () {
      function DeleteAccountComponent(modalCtrl, userService) {
        _classCallCheck(this, DeleteAccountComponent);

        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.reason = "";
      }

      _createClass(DeleteAccountComponent, [{
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteAccount",
        value: function deleteAccount() {
          this.userService.deleteAccount(this.reason).subscribe();
        }
      }]);

      return DeleteAccountComponent;
    }();

    DeleteAccountComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    DeleteAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/delete-account/delete-account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-account.component.scss */
      "./src/app/delete-account/delete-account.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], DeleteAccountComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/alexey/AppProjects/icebreaker/client/kofify/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map