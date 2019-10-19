(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n.ion-hide {\n  display: none !important;\n}\n\n.ion-hide-up {\n  display: none !important;\n}\n\n@media (max-width: 575px) {\n  .ion-hide-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1199px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n\n.ion-hide-xl-down {\n  display: none !important;\n}\n\n.ion-no-padding,\n[no-padding] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding,\n[padding] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding,\n[padding] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top,\n[padding-top] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start,\n[padding-start] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start,\n[padding-start] {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end,\n[padding-end] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end,\n[padding-end] {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom,\n[padding-bottom] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical,\n[padding-vertical] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal,\n[padding-horizontal] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal,\n[padding-horizontal] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin,\n[no-margin] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin,\n[margin] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin,\n[margin] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top,\n[margin-top] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start,\n[margin-start] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start,\n[margin-start] {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end,\n[margin-end] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end,\n[margin-end] {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom,\n[margin-bottom] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical,\n[margin-vertical] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal,\n[margin-horizontal] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal,\n[margin-horizontal] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-float-left,\n[float-left] {\n  float: left !important;\n}\n\n.ion-float-right,\n[float-right] {\n  float: right !important;\n}\n\n.ion-float-start,\n[float-start] {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\n  float: right !important;\n}\n\n.ion-float-end,\n[float-end] {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left,\n[float-sm-left] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right,\n[float-sm-right] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start,\n[float-sm-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end,\n[float-sm-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left,\n[float-md-left] {\n    float: left !important;\n  }\n\n  .ion-float-md-right,\n[float-md-right] {\n    float: right !important;\n  }\n\n  .ion-float-md-start,\n[float-md-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\n    float: right !important;\n  }\n\n  .ion-float-md-end,\n[float-md-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left,\n[float-lg-left] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right,\n[float-lg-right] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start,\n[float-lg-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end,\n[float-lg-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left,\n[float-xl-left] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right,\n[float-xl-right] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start,\n[float-xl-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end,\n[float-xl-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\n    float: left !important;\n  }\n}\n\n.ion-text-center,\n[text-center] {\n  text-align: center !important;\n}\n\n.ion-text-justify,\n[text-justify] {\n  text-align: justify !important;\n}\n\n.ion-text-start,\n[text-start] {\n  text-align: start !important;\n}\n\n.ion-text-end,\n[text-end] {\n  text-align: end !important;\n}\n\n.ion-text-left,\n[text-left] {\n  text-align: left !important;\n}\n\n.ion-text-right,\n[text-right] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap,\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap,\n[text-wrap] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center,\n[text-sm-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify,\n[text-sm-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start,\n[text-sm-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end,\n[text-sm-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left,\n[text-sm-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right,\n[text-sm-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap,\n[text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap,\n[text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center,\n[text-md-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify,\n[text-md-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start,\n[text-md-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end,\n[text-md-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left,\n[text-md-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right,\n[text-md-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap,\n[text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap,\n[text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center,\n[text-lg-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify,\n[text-lg-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start,\n[text-lg-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end,\n[text-lg-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left,\n[text-lg-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right,\n[text-lg-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap,\n[text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap,\n[text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center,\n[text-xl-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify,\n[text-xl-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start,\n[text-xl-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end,\n[text-xl-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left,\n[text-xl-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right,\n[text-xl-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap,\n[text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap,\n[text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n\n.ion-text-uppercase,\n[text-uppercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase,\n[text-lowercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize,\n[text-capitalize] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase,\n[text-sm-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase,\n[text-sm-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize,\n[text-sm-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase,\n[text-md-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase,\n[text-md-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize,\n[text-md-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase,\n[text-lg-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase,\n[text-lg-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize,\n[text-lg-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase,\n[text-xl-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase,\n[text-xl-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize,\n[text-xl-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n.ion-align-self-start,\n[align-self-start] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end,\n[align-self-end] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center,\n[align-self-center] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch,\n[align-self-stretch] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline,\n[align-self-baseline] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto,\n[align-self-auto] {\n  align-self: auto !important;\n}\n\n.ion-wrap,\n[wrap] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap,\n[nowrap] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse,\n[wrap-reverse] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start,\n[justify-content-start] {\n  justify-content: flex-start !important;\n}\n\n.ion-justify-content-center,\n[justify-content-center] {\n  justify-content: center !important;\n}\n\n.ion-justify-content-end,\n[justify-content-end] {\n  justify-content: flex-end !important;\n}\n\n.ion-justify-content-around,\n[justify-content-around] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between,\n[justify-content-between] {\n  justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly,\n[justify-content-evenly] {\n  justify-content: space-evenly !important;\n}\n\n.ion-align-items-start,\n[align-items-start] {\n  align-items: flex-start !important;\n}\n\n.ion-align-items-center,\n[align-items-center] {\n  align-items: center !important;\n}\n\n.ion-align-items-end,\n[align-items-end] {\n  align-items: flex-end !important;\n}\n\n.ion-align-items-stretch,\n[align-items-stretch] {\n  align-items: stretch !important;\n}\n\n.ion-align-items-baseline,\n[align-items-baseline] {\n  align-items: baseline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL25vcm1hbGl6ZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvc3RydWN0dXJlLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZGlzcGxheS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3BhZGRpbmcuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbG9hdC1lbGVtZW50cy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LWFsaWdubWVudC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxleC11dGlscy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLDZGQUFBO0FDSkY7O0FETUE7RUFDRSwwREFBQTtBQ0hGOztBRE1BO0VBQ0UsMENBQUE7QUNIRjs7QURNQTtFQUNFLHVDQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRGtDRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ3JCRjs7QUR5QkU7RUFUQSxnRUFBQTtFQUNBLDZFQUFBO0VBQ0EsMEVBQUE7RUFDQSwyRkFBQTtFQUNBLHVFQUFBO0VBQ0EscUVBQUE7QUNaRjs7QURnQkU7RUFUQSwrREFBQTtFQUNBLDRFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNIRjs7QURPRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ01GOztBREZFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDZUY7O0FEWEU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUN3QkY7O0FEcEJFO0VBVEEsNERBQUE7RUFD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QUFDRjs7QVQ0REk7RVExRUE7SUFDRSx3QkFBQTtFQ2lCSjtBQUNGOztBVDJGSTtFUXRHQTtJQUNFLHdCQUFBO0VDY0o7QUFDRjs7QVRrREk7RVExRUE7SUFDRSx3QkFBQTtFQzJCSjtBQUNGOztBRHJCSTtFQUNFLHdCQUFBO0FDdUJOOztBQ25DQTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFVnFMRSxlVW5MZTtFVm9MZixnQlVwTGU7RVZ3TmpCLGNVeE5pQjtFVnlOakIsaUJVek5pQjtBQ1puQjs7QURlQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFVitLRSxzQ1VwTU07RVZxTU4sdUNVck1NO0VWcU9SLHFDVXJPUTtFVnNPUix3Q1V0T1E7QUNhVjs7QVgyTE07RUFDRTs7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBR0YsK0NVak5BO0lWa05BLDhDVWxOQTtJVm1OQSw2Q1VuTkE7SVZvTkEsNENVcE5BO0VDdUJSO0FBQ0Y7O0FERUE7O0VBRUUsdUNBQUE7RVZ5TUEscUNVck9RO0FDOEJWOztBREdBOztFQUVFLHlDQUFBO0VWaUtFLHNDVXBNTTtBQ21DVjs7QVhxS007RUFDRTs7SUFFSSxtQkFBQTtJQU1GLCtDVWpOQTtJVmtOQSw4Q1VsTkE7RUMwQ1I7QUFDRjs7QURIQTs7RUFFRSx1Q0FBQTtFVjJKRSx1Q1VyTU07QUNpRFY7O0FYdUpNO0VBQ0U7O0lBS0ksb0JBQUE7SUFLRiw2Q1VuTkE7SVZvTkEsNENVcE5BO0VDd0RSO0FBQ0Y7O0FEVkE7O0VBRUUsMENBQUE7RVZxTEEsd0NVdE9RO0FDK0RWOztBRFRBOztFQUVFLHVDQUFBO0VBQ0EsMENBQUE7RVY0S0EscUNVck9RO0VWc09SLHdDVXRPUTtBQ3NFVjs7QURSQTs7RUFFRSx5Q0FBQTtFQUNBLHVDQUFBO0VWbUlFLHNDVXBNTTtFVnFNTix1Q1VyTU07QUM2RVY7O0FYMkhNO0VBQ0U7O0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDVWpOQTtJVmtOQSw4Q1VsTkE7SVZtTkEsNkNVbk5BO0lWb05BLDRDVXBOQTtFQ3VGUjtBQUNGOztBRGRBOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFVmlIRSxjVS9HYztFVmdIZCxlVWhIYztFVm9KaEIsYVVwSmdCO0VWcUpoQixnQlVySmdCO0FDbUJsQjs7QURoQkE7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVYyR0Usb0NVbk1LO0VWb01MLHFDVXBNSztFVm9PUCxtQ1VwT087RVZxT1Asc0NVck9PO0FDK0dUOztBWHdGTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1VoTkQ7SVZpTkMsNENVak5EO0lWa05DLDJDVWxORDtJVm1OQywwQ1VuTkQ7RUN5SFA7QUFDRjs7QUQ3QkE7O0VBRUUscUNBQUE7RVZxSUEsbUNVcE9PO0FDZ0lUOztBRDVCQTs7RUFFRSx1Q0FBQTtFVjZGRSxvQ1VuTUs7QUNxSVQ7O0FYa0VNO0VBQ0U7O0lBRUksa0JBQUE7SUFNRiw2Q1VoTkQ7SVZpTkMsNENVak5EO0VDNElQO0FBQ0Y7O0FEbENBOztFQUVFLHFDQUFBO0VWdUZFLHFDVXBNSztBQ21KVDs7QVhvRE07RUFDRTs7SUFLSSxtQkFBQTtJQUtGLDJDVWxORDtJVm1OQywwQ1VuTkQ7RUMwSlA7QUFDRjs7QUR6Q0E7O0VBRUUsd0NBQUE7RVZpSEEsc0NVck9PO0FDaUtUOztBRHhDQTs7RUFFRSxxQ0FBQTtFQUNBLHdDQUFBO0VWd0dBLG1DVXBPTztFVnFPUCxzQ1VyT087QUN3S1Q7O0FEdkNBOztFQUVFLHVDQUFBO0VBQ0EscUNBQUE7RVYrREUsb0NVbk1LO0VWb01MLHFDVXBNSztBQytLVDs7QVh3Qk07RUFDRTs7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNVaE5EO0lWaU5DLDRDVWpORDtJVmtOQywyQ1VsTkQ7SVZtTkMsMENVbk5EO0VDeUxQO0FBQ0Y7O0FDdkxJOztFWmlYRSxzQkFBQTtBYTNYTjs7QURlSTs7RVo0V0UsdUJBQUE7QWF0WE47O0FEZUk7O0VaeVZFLHNCQUFBO0FhbldOOztBYmdKVztFQXNOTCx1QkFBQTtBYW5XTjs7QURZSTs7RVoyVkUsdUJBQUE7QWFsV047O0Fid0lXO0VBNk5MLHNCQUFBO0FhbFdOOztBYm9FSTtFWS9FQTs7SVppWEUsc0JBQUE7RWFoV0o7O0VEWkU7O0laNFdFLHVCQUFBO0VhM1ZKOztFRFpFOztJWnlWRSxzQkFBQTtFYXhVSjtFYnFIUztJQXNOTCx1QkFBQTtFYXhVSjs7RURmRTs7SVoyVkUsdUJBQUE7RWF2VUo7RWI2R1M7SUE2Tkwsc0JBQUE7RWF2VUo7QUFDRjs7QWJ3Q0k7RVkvRUE7O0laaVhFLHNCQUFBO0VhclVKOztFRHZDRTs7SVo0V0UsdUJBQUE7RWFoVUo7O0VEdkNFOztJWnlWRSxzQkFBQTtFYTdTSjtFYjBGUztJQXNOTCx1QkFBQTtFYTdTSjs7RUQxQ0U7O0laMlZFLHVCQUFBO0VhNVNKO0Via0ZTO0lBNk5MLHNCQUFBO0VhNVNKO0FBQ0Y7O0FiYUk7RVkvRUE7O0laaVhFLHNCQUFBO0VhMVNKOztFRGxFRTs7SVo0V0UsdUJBQUE7RWFyU0o7O0VEbEVFOztJWnlWRSxzQkFBQTtFYWxSSjtFYitEUztJQXNOTCx1QkFBQTtFYWxSSjs7RURyRUU7O0laMlZFLHVCQUFBO0VhalJKO0VidURTO0lBNk5MLHNCQUFBO0VhalJKO0FBQ0Y7O0FiZEk7RVkvRUE7O0laaVhFLHNCQUFBO0VhL1FKOztFRDdGRTs7SVo0V0UsdUJBQUE7RWExUUo7O0VEN0ZFOztJWnlWRSxzQkFBQTtFYXZQSjtFYm9DUztJQXNOTCx1QkFBQTtFYXZQSjs7RURoR0U7O0laMlZFLHVCQUFBO0VhdFBKO0ViNEJTO0lBNk5MLHNCQUFBO0VhdFBKO0FBQ0Y7O0FDeEhJOztFQUVFLDZCQUFBO0FDWk47O0FEZUk7O0VBRUUsOEJBQUE7QUNaTjs7QURlSTs7RUFFRSw0QkFBQTtBQ1pOOztBRGVJOztFQUVFLDBCQUFBO0FDWk47O0FEZUk7O0VBRUUsMkJBQUE7QUNaTjs7QURlSTs7RUFFRSw0QkFBQTtBQ1pOOztBRGVJOztFQUVFLDhCQUFBO0FDWk47O0FEZUk7O0VBRUUsOEJBQUE7QUNaTjs7QWZzREk7RWMvRUE7O0lBRUUsNkJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDhCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw0QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsMEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDJCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw0QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsOEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDhCQUFBO0VDNkJKO0FBQ0Y7O0FmWUk7RWMvRUE7O0lBRUUsNkJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDhCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw0QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsMEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDJCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw0QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsOEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDhCQUFBO0VDc0VKO0FBQ0Y7O0FmN0JJO0VjL0VBOztJQUVFLDZCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSw4QkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsNEJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDBCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSwyQkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsNEJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDhCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSw4QkFBQTtFQytHSjtBQUNGOztBZnRFSTtFYy9FQTs7SUFFRSw2QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsOEJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDRCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSwwQkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsMkJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDRCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSw4QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsOEJBQUE7RUN3Sko7QUFDRjs7QUM5TEk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ1pOOztBRGVJOztFQUVFLHlEQUFBO0VBQ0Esb0NBQUE7QUNaTjs7QURlSTs7RUFFRSx5REFBQTtFQUNBLHFDQUFBO0FDWk47O0FqQjRFSTtFZ0IvRUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ09KOztFREpFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNPSjs7RURKRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDT0o7QUFDRjs7QWpCd0RJO0VnQi9FQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDMEJKOztFRHZCRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDMEJKOztFRHZCRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDMEJKO0FBQ0Y7O0FqQnFDSTtFZ0IvRUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzZDSjs7RUQxQ0U7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzZDSjs7RUQxQ0U7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQzZDSjtBQUNGOztBakJrQkk7RWdCL0VBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNnRUo7O0VEN0RFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUNnRUo7O0VEN0RFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUNnRUo7QUFDRjs7QUNyRkE7O0VBRUUsaUNBQUE7QUNQRjs7QURVQTs7RUFFRSwrQkFBQTtBQ1BGOztBRFVBOztFQUVFLDZCQUFBO0FDUEY7O0FEVUE7O0VBRUUsOEJBQUE7QUNQRjs7QURVQTs7RUFFRSwrQkFBQTtBQ1BGOztBRFVBOztFQUVFLDJCQUFBO0FDUEY7O0FEY0E7O0VBRUUsMEJBQUE7QUNYRjs7QURjQTs7RUFFRSw0QkFBQTtBQ1hGOztBRGNBOztFQUVFLGtDQUFBO0FDWEY7O0FEa0JBOztFQUVFLHNDQUFBO0FDZkY7O0FEa0JBOztFQUVFLGtDQUFBO0FDZkY7O0FEa0JBOztFQUVFLG9DQUFBO0FDZkY7O0FEa0JBOztFQUVFLHdDQUFBO0FDZkY7O0FEa0JBOztFQUVFLHlDQUFBO0FDZkY7O0FEa0JBOztFQUVFLHdDQUFBO0FDZkY7O0FEc0JBOztFQUVFLGtDQUFBO0FDbkJGOztBRHNCQTs7RUFFRSw4QkFBQTtBQ25CRjs7QURzQkE7O0VBRUUsZ0NBQUE7QUNuQkY7O0FEc0JBOztFQUVFLCtCQUFBO0FDbkJGOztBRHNCQTs7RUFFRSxnQ0FBQTtBQ25CRiIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MifQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"Gloria Hallelujah\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GloriaHallelujah.ttf');\n}\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #956f5a;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #222222;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #DEB887;\n  --ion-color-primary-tint: #D2B48C;\n  /** secondary **/\n  --ion-color-secondary: #FDF9F1;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #222222;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #F5DEB3;\n  --ion-color-secondary-tint: #FFEBCD;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #222222;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #222222;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #222222;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #222222;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #6e4228;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #222222;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #6e4228;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #222222;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-font-family: \"Gloria Hallelujah\", cursive;\n  --ion-text-color: #222;\n  --ion-toolbar-background: #fff;\n  --ion-item-background: transparent;\n  --ion-tab-bar-background:#FDF9F1;\n  --ion-tabs-background-color:var(--ion-tab-bar-background, #FDF9F1);\n}\nion-segment-button {\n  color: #222;\n}\nion-segment-button.segment-button-checked {\n  font-size: 21px;\n}\nion-content {\n  --background: #fff;\n}\n.toast-error {\n  --background: red;\n  color: #fff;\n}\n.border-radius-25 {\n  border-radius: 25%;\n}\n.border-radius-50 {\n  border-radius: 50%;\n}\n.height-0 {\n  height: 0px !important;\n}\nion-button {\n  text-transform: none;\n  --background: #956f5a;\n  --color: #fff;\n}\n.white {\n  background: #fff;\n}\nion-toolbar {\n  font-size: 32px;\n}\nh1, h2, h3, h3, ion-input, .plus-button {\n  color: #222;\n}\n.visibile {\n  display: block;\n}\n.gone {\n  display: none;\n}\nion-range {\n  --knob-size: 25px;\n  --bar-height: 4px;\n  --height: 50px;\n  --knob-background: #D1B378;\n  /* fallback for old browsers */\n  --bar-background-active: #956f5a;\n  /* fallback for old browsers */\n  --bar-background: #F5ECE1;\n  --bar-background-active: -webkit-linear-gradient(to right, #FDF9F1, #6e4228);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --bar-background-active: linear-gradient(to right, #FDF9F1, #6e4228);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  --pin-background: transparent;\n}\n.plans-modal {\n  background: rgba(0, 0, 0, 0.5) !important;\n  padding: 20% 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmNoaW1lZGlhL3Byb2plY3RzL2tva2lmeS9pY2VicmVha2VyL2NsaWVudC9rb2ZpZnkva29maWZ5L3NyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDREY7QURRQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLCtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBRUEsZ0NBQUE7RUFDQSxrRUFBQTtBQ2hCRjtBRGtCQTtFQUNFLFdBQUE7QUNmRjtBRGdCRTtFQUNFLGVBQUE7QUNkSjtBRGtCQTtFQUNFLGtCQUFBO0FDZkY7QURpQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNkRjtBRGlCQTtFQUNFLGtCQUFBO0FDZEY7QURnQkE7RUFDRSxrQkFBQTtBQ2JGO0FEZUE7RUFDRSxzQkFBQTtBQ1pGO0FEY0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ1hGO0FEYUE7RUFDRSxnQkFBQTtBQ1ZGO0FEYUE7RUFDRSxlQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1ZGO0FEWUE7RUFDRSxhQUFBO0FDVEY7QURlQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBNkIsOEJBQUE7RUFFN0IsZ0NBQUE7RUFBb0MsOEJBQUE7RUFDcEMseUJBQUE7RUFDQSw0RUFBQTtFQUFnRiwrQkFBQTtFQUNoRixvRUFBQTtFQUF1RSxxRUFBQTtFQUN2RSw2QkFBQTtBQ1RGO0FEWUE7RUFDRSx5Q0FBQTtFQUNBLDJCQUFBO0FDVEYiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdHbG9yaWEgSGFsbGVsdWphaCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9HbG9yaWFIYWxsZWx1amFoLnR0ZicpO1xufVxuXG4kY29sb3Itd2hpdGU6ICNGNUVDRTE7XG4kY29sb3ItbXVnOiAjRDFCMzc4O1xuJGNvbG9yLWNvZmZlZTogIzk1NmY1YTtcblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjOTU2ZjVhO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI0RFQjg4NztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjRDJCNDhDO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogI0ZERjlGMTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogI0Y1REVCMztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICNGRkVCQ0Q7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzcwNDRmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzIyMjIyMjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmMDQxNDE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICM2ZTQyMjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzZlNDIyODtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG5cbiAgLS1pb24tZm9udC1mYW1pbHk6ICdHbG9yaWEgSGFsbGVsdWphaCcsIGN1cnNpdmU7XG4gIC0taW9uLXRleHQtY29sb3I6ICMyMjI7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG4gIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDojRkRGOUYxO1xuICAtLWlvbi10YWJzLWJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLXRhYi1iYXItYmFja2dyb3VuZCwgI0ZERjlGMSk7XG59XG5pb24tc2VnbWVudC1idXR0b257XG4gIGNvbG9yOiAjMjIyO1xuICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4udG9hc3QtZXJyb3J7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJvcmRlci1yYWRpdXMtMjV7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cbi5ib3JkZXItcmFkaXVzLTUwe1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVpZ2h0LTB7XG4gIGhlaWdodDogMHB4IWltcG9ydGFudDtcbn1cbmlvbi1idXR0b257XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJhY2tncm91bmQ6ICM5NTZmNWE7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4ud2hpdGV7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi10b29sYmFye1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbmgxLGgyLGgzLGgzLCBpb24taW5wdXQsIC5wbHVzLWJ1dHRvbntcbiAgY29sb3I6ICMyMjI7XG59XG5cbi52aXNpYmlsZXtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ29uZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuaW9uLXJhbmdle1xuICAtLWtub2Itc2l6ZTogMjVweDtcbiAgLS1iYXItaGVpZ2h0OiA0cHg7XG4gIC0taGVpZ2h0IDogNTBweDtcbiAgLS1rbm9iLWJhY2tncm91bmQ6ICNEMUIzNzg7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIFxuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZSA6ICM5NTZmNWE7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIC0tYmFyLWJhY2tncm91bmQ6ICNGNUVDRTE7XG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlIDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGREY5RjEsICM2ZTQyMjgpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmUgOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGREY5RjEsICM2ZTQyMjgpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIC0tcGluLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcbiAgXG59XG4ucGxhbnMtbW9kYWx7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMCUgMTAlICAhaW1wb3J0YW50O1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHbG9yaWEgSGFsbGVsdWphaFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL0dsb3JpYUhhbGxlbHVqYWgudHRmXCIpO1xufVxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG46cm9vdCB7XG4gIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjOTU2ZjVhO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogI0RFQjg4NztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjRDJCNDhDO1xuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICNGREY5RjE7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDEyLCAyMDksIDIzMjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICNGNURFQjM7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjRkZFQkNEO1xuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMTYsIDIyMCwgOTY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMGVjMjU0O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMDYsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMyMjIyMjI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiNTAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogIzIyMjIyMjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICM2ZTQyMjg7XG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzQsIDM0O1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMjIyMjIyO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzZlNDIyODtcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwgMTU0LCAxNjI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzIyMjIyMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiR2xvcmlhIEhhbGxlbHVqYWhcIiwgY3Vyc2l2ZTtcbiAgLS1pb24tdGV4dC1jb2xvcjogIzIyMjtcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6I0ZERjlGMTtcbiAgLS1pb24tdGFicy1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi10YWItYmFyLWJhY2tncm91bmQsICNGREY5RjEpO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBjb2xvcjogIzIyMjtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRvYXN0LWVycm9yIHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm9yZGVyLXJhZGl1cy0yNSB7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cblxuLmJvcmRlci1yYWRpdXMtNTAge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oZWlnaHQtMCB7XG4gIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiAjOTU2ZjVhO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG4ud2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuaDEsIGgyLCBoMywgaDMsIGlvbi1pbnB1dCwgLnBsdXMtYnV0dG9uIHtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi52aXNpYmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ29uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1yYW5nZSB7XG4gIC0ta25vYi1zaXplOiAyNXB4O1xuICAtLWJhci1oZWlnaHQ6IDRweDtcbiAgLS1oZWlnaHQ6IDUwcHg7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiAjRDFCMzc4O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjOTU2ZjVhO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIC0tYmFyLWJhY2tncm91bmQ6ICNGNUVDRTE7XG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZERjlGMSwgIzZlNDIyOCk7XG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGREY5RjEsICM2ZTQyMjgpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIC0tcGluLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucGxhbnMtbW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjAlIDEwJSAhaW1wb3J0YW50O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/archimedia/projects/kokify/icebreaker/client/kofify/kofify/src/theme/variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! /Users/archimedia/projects/kokify/icebreaker/client/kofify/kofify/src/global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map