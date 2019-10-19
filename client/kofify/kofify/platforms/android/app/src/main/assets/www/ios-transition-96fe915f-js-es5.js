(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ios-transition-96fe915f-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ios.transition-96fe915f.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ios.transition-96fe915f.js ***!
    \**********************************************************************/

  /*! exports provided: iosTransitionAnimation, shadow */

  /***/
  function node_modulesIonicCoreDistEsmIosTransition96fe915fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "iosTransitionAnimation", function () {
      return iosTransitionAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shadow", function () {
      return shadow;
    });
    /* harmony import */


    var _animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./animation-d0becaea.js */
    "./node_modules/@ionic/core/dist/esm/animation-d0becaea.js");

    var shadow = function shadow(el) {
      return el.shadowRoot || el;
    };

    var iosTransitionAnimation = function iosTransitionAnimation(navEl, opts) {
      try {
        var DURATION = 540;
        var EASING = 'cubic-bezier(0.32,0.72,0,1)';
        var OPACITY = 'opacity';
        var TRANSFORM = 'transform';
        var CENTER = '0%';
        var OFF_OPACITY = 0.8;
        var isRTL = navEl.ownerDocument.dir === 'rtl';
        var OFF_RIGHT = isRTL ? '-99.5%' : '99.5%';
        var OFF_LEFT = isRTL ? '33%' : '-33%';
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        var backDirection = opts.direction === 'back';
        var contentEl = enteringEl.querySelector(':scope > ion-content');
        var headerEls = enteringEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *');
        var enteringToolBarEls = enteringEl.querySelectorAll(':scope > ion-header > ion-toolbar');
        var rootAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        var enteringContentAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
        rootAnimation.addElement(enteringEl).duration(opts.duration || DURATION).easing(opts.easing || EASING).fill('both').beforeRemoveClass('ion-page-invisible');

        if (leavingEl && navEl) {
          var navDecorAnimation = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          navDecorAnimation.addElement(navEl);
          rootAnimation.addAnimation(navDecorAnimation);
        }

        if (!contentEl && enteringToolBarEls.length === 0 && headerEls.length === 0) {
          enteringContentAnimation.addElement(enteringEl.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'));
        } else {
          enteringContentAnimation.addElement(contentEl);
          enteringContentAnimation.addElement(headerEls);
        }

        rootAnimation.addAnimation(enteringContentAnimation);

        if (backDirection) {
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")).fromTo(OPACITY, OFF_OPACITY, 1);
        } else {
          // entering content, forward direction
          enteringContentAnimation.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
        }

        if (contentEl) {
          var enteringTransitionEffectEl = shadow(contentEl).querySelector('.transition-effect');

          if (enteringTransitionEffectEl) {
            var enteringTransitionCoverEl = enteringTransitionEffectEl.querySelector('.transition-cover');
            var enteringTransitionShadowEl = enteringTransitionEffectEl.querySelector('.transition-shadow');
            var enteringTransitionEffect = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var enteringTransitionCover = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var enteringTransitionShadow = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            enteringTransitionEffect.addElement(enteringTransitionEffectEl).beforeStyles({
              opacity: '1'
            }).afterStyles({
              opacity: ''
            });
            enteringTransitionCover.addElement(enteringTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0, 0.1);
            enteringTransitionShadow.addElement(enteringTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.03, 0.70);
            enteringTransitionEffect.addAnimation([enteringTransitionCover, enteringTransitionShadow]);
            enteringContentAnimation.addAnimation([enteringTransitionEffect]);
          }
        }

        enteringToolBarEls.forEach(function (enteringToolBarEl) {
          var enteringToolBar = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringToolBar.addElement(enteringToolBarEl);
          rootAnimation.addAnimation(enteringToolBar);
          var enteringTitle = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringTitle.addElement(enteringToolBarEl.querySelector('ion-title'));
          var enteringToolBarButtons = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringToolBarButtons.addElement(enteringToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
          var enteringToolBarItems = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringToolBarItems.addElement(enteringToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])'));
          var enteringToolBarBg = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          enteringToolBarBg.addElement(shadow(enteringToolBarEl).querySelector('.toolbar-background'));
          var enteringBackButton = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          var backButtonEl = enteringToolBarEl.querySelector('ion-back-button');

          if (backButtonEl) {
            enteringBackButton.addElement(backButtonEl);
          }

          enteringToolBar.addAnimation([enteringTitle, enteringToolBarButtons, enteringToolBarItems, enteringToolBarBg, enteringBackButton]);
          enteringTitle.fromTo(OPACITY, 0.01, 1);
          enteringToolBarButtons.fromTo(OPACITY, 0.01, 1);
          enteringToolBarItems.fromTo(OPACITY, 0.01, 1);

          if (backDirection) {
            enteringTitle.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")"));
            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_LEFT, ")"), "translateX(".concat(CENTER, ")")); // back direction, entering page has a back button

            enteringBackButton.fromTo(OPACITY, 0.01, 1);
          } else {
            // entering toolbar, forward direction
            enteringTitle.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
            enteringToolBarItems.fromTo('transform', "translateX(".concat(OFF_RIGHT, ")"), "translateX(".concat(CENTER, ")"));
            enteringToolBarBg.beforeClearStyles([OPACITY]).keyframes([{
              offset: 0,
              opacity: 0.01
            }, {
              offset: 0.99,
              opacity: 1
            }, {
              offset: 1,
              opacity: 'var(--opacity)'
            } // TODO: Find a way to support clearing properties from Web Animations
            ]); // forward direction, entering page has a back button

            enteringBackButton.fromTo(OPACITY, 0.01, 1);

            if (backButtonEl) {
              var enteringBackBtnText = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              enteringBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text')).fromTo("transform", isRTL ? 'translateX(-100px)' : 'translateX(100px)', 'translateX(0px)');
              enteringToolBar.addAnimation(enteringBackBtnText);
            }
          }
        }); // setup leaving view

        if (leavingEl) {
          var leavingContent = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
          var leavingContentEl = leavingEl.querySelector(':scope > ion-content');
          leavingContent.addElement(leavingContentEl);
          leavingContent.addElement(leavingEl.querySelectorAll(':scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *'));
          rootAnimation.addAnimation(leavingContent);

          if (backDirection) {
            // leaving content, back direction
            leavingContent.beforeClearStyles([OPACITY]).fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
          } else {
            // leaving content, forward direction
            leavingContent.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).fromTo(OPACITY, 1, OFF_OPACITY);
          }

          if (leavingContentEl) {
            var leavingTransitionEffectEl = shadow(leavingContentEl).querySelector('.transition-effect');

            if (leavingTransitionEffectEl) {
              var leavingTransitionCoverEl = leavingTransitionEffectEl.querySelector('.transition-cover');
              var leavingTransitionShadowEl = leavingTransitionEffectEl.querySelector('.transition-shadow');
              var leavingTransitionEffect = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var leavingTransitionCover = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              var leavingTransitionShadow = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
              leavingTransitionEffect.addElement(leavingTransitionEffectEl).beforeStyles({
                opacity: '1'
              }).afterStyles({
                opacity: ''
              });
              leavingTransitionCover.addElement(leavingTransitionCoverEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.1, 0);
              leavingTransitionShadow.addElement(leavingTransitionShadowEl).beforeClearStyles([OPACITY]).fromTo(OPACITY, 0.70, 0.03);
              leavingTransitionEffect.addAnimation([leavingTransitionCover, leavingTransitionShadow]);
              leavingContent.addAnimation([leavingTransitionEffect]);
            }
          }

          var leavingToolBarEls = leavingEl.querySelectorAll(':scope > ion-header > ion-toolbar');
          leavingToolBarEls.forEach(function (leavingToolBarEl) {
            var leavingToolBar = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            leavingToolBar.addElement(leavingToolBarEl);
            var leavingTitle = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            leavingTitle.addElement(leavingToolBarEl.querySelector('ion-title'));
            var leavingToolBarButtons = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            leavingToolBarButtons.addElement(leavingToolBarEl.querySelectorAll('ion-buttons,[menuToggle]'));
            var leavingToolBarItems = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var leavingToolBarItemEls = leavingToolBarEl.querySelectorAll(':scope > *:not(ion-title):not(ion-buttons):not([menuToggle])');

            if (leavingToolBarItemEls.length > 0) {
              leavingToolBarItems.addElement(leavingToolBarItemEls);
            }

            var leavingToolBarBg = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            leavingToolBarBg.addElement(shadow(leavingToolBarEl).querySelector('.toolbar-background'));
            var leavingBackButton = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
            var backButtonEl = leavingToolBarEl.querySelector('ion-back-button');

            if (backButtonEl) {
              leavingBackButton.addElement(backButtonEl);
            }

            leavingToolBar.addAnimation([leavingTitle, leavingToolBarButtons, leavingToolBarItems, leavingBackButton, leavingToolBarBg]);
            rootAnimation.addAnimation(leavingToolBar); // fade out leaving toolbar items

            leavingBackButton.fromTo(OPACITY, 0.99, 0);
            leavingTitle.fromTo(OPACITY, 0.99, 0);
            leavingToolBarButtons.fromTo(OPACITY, 0.99, 0);
            leavingToolBarItems.fromTo(OPACITY, 0.99, 0);

            if (backDirection) {
              // leaving toolbar, back direction
              leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)');
              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), isRTL ? 'translateX(-100%)' : 'translateX(100%)'); // leaving toolbar, back direction, and there's no entering toolbar
              // should just slide out, no fading out

              leavingToolBarBg.beforeClearStyles([OPACITY]).fromTo(OPACITY, 1, 0.01);

              if (backButtonEl) {
                var leavingBackBtnText = Object(_animation_d0becaea_js__WEBPACK_IMPORTED_MODULE_0__["c"])();
                leavingBackBtnText.addElement(shadow(backButtonEl).querySelector('.button-text'));
                leavingBackBtnText.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat((isRTL ? -124 : 124) + 'px', ")"));
                leavingToolBar.addAnimation(leavingBackBtnText);
              }
            } else {
              // leaving toolbar, forward direction
              leavingTitle.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM]);
              leavingToolBarItems.fromTo('transform', "translateX(".concat(CENTER, ")"), "translateX(".concat(OFF_LEFT, ")")).afterClearStyles([TRANSFORM, OPACITY]);
              leavingBackButton.afterClearStyles([OPACITY]);
              leavingTitle.afterClearStyles([OPACITY]);
              leavingToolBarButtons.afterClearStyles([OPACITY]);
            }
          });
        }

        return rootAnimation;
      } catch (err) {
        throw err;
      }
    };
    /***/

  }
}]); //# sourceMappingURL=ios-transition-96fe915f-js-es2015.js.map
//# sourceMappingURL=ios-transition-96fe915f-js-es5.js.map