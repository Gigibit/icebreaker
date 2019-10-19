function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-landing-landing-module"], {
  /***/
  "./node_modules/@ionic-native/in-app-browser/ngx/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic-native/in-app-browser/ngx/index.js ***!
    \****************************************************************/

  /*! exports provided: InAppBrowserObject, InAppBrowser */

  /***/
  function node_modulesIonicNativeInAppBrowserNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InAppBrowserObject", function () {
      return InAppBrowserObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InAppBrowser", function () {
      return InAppBrowser;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __extends = undefined && undefined.__extends || function () {
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

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var InAppBrowserObject =
    /** @class */
    function () {
      /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param {string} url     The URL to load.
       * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
       *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
       *                 _blank: Opens in the InAppBrowser.
       *                 _system: Opens in the system's web browser.
       * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       */
      function InAppBrowserObject(url, target, options) {
        try {
          if (options && typeof options !== 'string') {
            options = Object.keys(options).map(function (key) {
              return key + "=" + options[key];
            }).join(',');
          }

          this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        } catch (e) {
          if (typeof window !== 'undefined') {
            window.open(url, target);
          }

          console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
      }

      InAppBrowserObject.prototype.show = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "show", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.close = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "close", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.hide = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "hide", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.executeScript = function (script) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "executeScript", {}, arguments);
      };

      InAppBrowserObject.prototype.insertCSS = function (css) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "insertCSS", {}, arguments);
      };

      InAppBrowserObject.prototype.on = function (event) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this._objectInstance.addEventListener(event, observer.next.bind(observer));

              return function () {
                return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
              };
            });
          }
        }();
      };

      return InAppBrowserObject;
    }();

    var InAppBrowser =
    /** @class */
    function (_super) {
      __extends(InAppBrowser, _super);

      function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */


      InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
      };

      InAppBrowser.pluginName = "InAppBrowser";
      InAppBrowser.plugin = "cordova-plugin-inappbrowser";
      InAppBrowser.pluginRef = "cordova.InAppBrowser";
      InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
      InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
      InAppBrowser = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], InAppBrowser);
      return InAppBrowser;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUF5STFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaUNBQUk7SUFNSixrQ0FBSztJQU9MLGlDQUFJO0lBUUosMENBQWEsYUFBQyxNQUF3QztJQVV0RCxzQ0FBUyxhQUFDLEdBQXFDO0lBVS9DLCtCQUFFLGFBQUMsS0FBNEI7OztzREFBaUM7Z0JBQzlELE9BQU8sSUFBSSxVQUFVLENBQ25CLFVBQUMsUUFBcUM7b0JBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUNGLENBQUM7YUFDSDs7OzZCQWhQSDs7OztJQTBSa0MsZ0NBQWlCOzs7O0lBQ2pEOzs7Ozs7OztPQVFHO0lBQ0gsNkJBQU0sR0FBTixVQUNFLEdBQVcsRUFDWCxNQUFlLEVBQ2YsT0FBc0M7UUFFdEMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBaEJVLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkExUnpCO0VBMFJrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnO1xuICAvKiogIHNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgYnJvd3NlcidzIGVudGlyZSBsb2NhbCBzdG9yYWdlIGNsZWFyZWQgKGNvb2tpZXMsIEhUTUw1IGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiwgZXRjLikgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCAqL1xuICBjbGVhcmRhdGE/OiAneWVzJztcbiAgLyoqXG4gICAqIFNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgc2Vzc2lvbiBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLlxuICAgKiBGb3IgV0tXZWJWaWV3LCByZXF1aXJlcyBpT1MgMTErIG9uIHRhcmdldCBkZXZpY2UuXG4gICAqL1xuICBjbGVhcnNlc3Npb25jYWNoZT86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnO1xuICAvKipcbiAgICogKEFuZHJvaWQgJiBXaW5kb3dzIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqL1xuICBoYXJkd2FyZWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LlxuICAgKi9cbiAgaGlkZGVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgbmF2aWdhdGlvbiBidXR0b25zIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uXG4gICAqIChpT1MpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gb3Igb2ZmIChkZWZhdWx0cyB0byBubykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBoaWRlIHRoZSB1cmwgYmFyIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uICovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgbmF2aWdhdGlvbiBidXR0b25zIGdvIHRvIHRoZSBsZWZ0IGFuZCBjbG9zZSBidXR0b24gdG8gdGhlIHJpZ2h0LlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgY2xvc2UgYnV0dG9uIGdvZXMgdG8gdGhlIHJpZ2h0IGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBsZWZ0dG9yaWdodD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgSW5BcHBCcm93c2VyJ3MgbG9jYXRpb24gYmFyIG9uIG9yIG9mZi4gKi9cbiAgbG9jYXRpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgU2V0IHRvIHllcyB0byBwcmV2ZW50IEhUTUw1IGF1ZGlvIG9yIHZpZGVvIGZyb20gYXV0b3BsYXlpbmcgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY29sb3Igb2YgYm90aCBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBkZWZhdWx0LiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcyBhbmQgbm90IGhpZGVuYXZpZ2F0aW9uYnV0dG9ucyBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuXG4gICAqL1xuICBuYXZpZ2F0aW9uYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBtYWtlIEluQXBwQnJvd3NlciBXZWJWaWV3IHRvIHBhdXNlL3Jlc3VtZSB3aXRoIHRoZSBhcHAgdG8gc3RvcCBiYWNrZ3JvdW5kIGF1ZGlvICh0aGlzIG1heSBiZSByZXF1aXJlZCB0byBhdm9pZCBHb29nbGUgUGxheSBpc3N1ZXMpICovXG4gIHNob3VsZFBhdXNlT25TdXNwZW5kPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIHdhaXQgdW50aWwgYWxsIG5ldyB2aWV3IGNvbnRlbnQgaXMgcmVjZWl2ZWQgYmVmb3JlIGJlaW5nIHJlbmRlcmVkIChkZWZhdWx0cyB0byBubykuICovXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBjb2xvciBvZiB0aGUgdG9vbGJhci4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLlxuICAgKi9cbiAgdG9vbGJhcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBtYWtlIHRoZSB0b29sYmFyIHRyYW5zbHVjZW50KHNlbWktdHJhbnNwYXJlbnQpIChkZWZhdWx0cyB0byB5ZXMpLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuICovXG4gIHRvb2xiYXJ0cmFuc2x1Y2VudD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIGZsaXBob3Jpem9udGFsLCBjcm9zc2Rpc3NvbHZlIG9yIGNvdmVydmVydGljYWwgdG8gc2V0IHRoZSB0cmFuc2l0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBjb3ZlcnZlcnRpY2FsKS4gKi9cbiAgdHJhbnNpdGlvbnN0eWxlPzogJ2ZsaXBob3Jpem9udGFsJyB8ICdjcm9zc2Rpc3NvbHZlJyB8ICdjb3ZlcnZlcnRpY2FsJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldHMgd2hldGhlciB0aGUgV2ViVmlldyBzaG91bGQgZW5hYmxlIHN1cHBvcnQgZm9yIHRoZSBcInZpZXdwb3J0XCIgSFRNTCBtZXRhIHRhZyBvciBzaG91bGQgdXNlIGEgd2lkZSB2aWV3cG9ydC4gV2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNldHRpbmcgaXMgbm8sIHRoZSBsYXlvdXQgd2lkdGggaXMgYWx3YXlzIHNldCB0byB0aGUgd2lkdGggb2YgdGhlIFdlYlZpZXcgY29udHJvbCBpbiBkZXZpY2UtaW5kZXBlbmRlbnQgKENTUykgcGl4ZWxzLiBXaGVuIHRoZSB2YWx1ZSBpcyB5ZXMgYW5kIHRoZSBwYWdlIGNvbnRhaW5zIHRoZSB2aWV3cG9ydCBtZXRhIHRhZywgdGhlIHZhbHVlIG9mIHRoZSB3aWR0aCBzcGVjaWZpZWQgaW4gdGhlIHRhZyBpcyB1c2VkLiBJZiB0aGUgcGFnZSBkb2VzIG5vdCBjb250YWluIHRoZSB0YWcgb3IgZG9lcyBub3QgcHJvdmlkZSBhIHdpZHRoLCB0aGVuIGEgd2lkZSB2aWV3cG9ydCB3aWxsIGJlIHVzZWQuIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICB1c2VXaWRlVmlld1BvcnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIFdLV2ViVmlldyBlbmdpbmUgZm9yIHRoZSBJbmFwcEJyb3dzZXIuIE9taXQgb3Igc2V0IHRvIG5vIChkZWZhdWx0KSB0byB1c2UgVUlXZWJWaWV3LiAqL1xuICB1c2V3a3dlYnZpZXc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgQW5kcm9pZCBicm93c2VyJ3Mgem9vbSBjb250cm9scywgc2V0IHRvIG5vIHRvIGhpZGUgdGhlbS4gRGVmYXVsdCB2YWx1ZSBpcyB5ZXMuICovXG4gIHpvb20/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEluQXBwQnJvd3NlckV2ZW50VHlwZSA9ICdsb2Fkc3RhcnQnIHwgJ2xvYWRzdG9wJyB8ICdsb2FkZXJyb3InIHwgJ2V4aXQnIHwgJ2JlZm9yZWxvYWQnIHwgJ21lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3NlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKiogdGhlIGV2ZW50IG5hbWUgKi9cbiAgdHlwZTogSW5BcHBCcm93c2VyRXZlbnRUeXBlO1xuICAvKiogdGhlIFVSTCB0aGF0IHdhcyBsb2FkZWQuICovXG4gIHVybDogc3RyaW5nO1xuICAvKiogdGhlIGVycm9yIGNvZGUsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiB0aGUgZXJyb3IgbWVzc2FnZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldD1cInNlbGZcIl0gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogICAgICAgICAgICAgICAgIF9zZWxmOiBPcGVucyBpbiB0aGUgV2ViVmlldyBpZiB0aGUgVVJMIGlzIGluIHRoZSB3aGl0ZSBsaXN0LCBvdGhlcndpc2UgaXQgb3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9ibGFuazogT3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9zeXN0ZW06IE9wZW5zIGluIHRoZSBzeXN0ZW0ncyB3ZWIgYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHVybCB7c3RyaW5nfSAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0gIHRhcmdldCB7c3RyaW5nfSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiBAcGFyYW0gIG9wdGlvbnMge3N0cmluZ30gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEByZXR1cm5zIHtJbkFwcEJyb3dzZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/landing/landing.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/landing/landing.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"ion-padding\">\n    <h1>kofify</h1>\n\n\n\n    <form #f=\"ngForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>\n              <p class=\"login-disclaimer\">\n                {{'login_disclaimer' | translate }} <span (click)=\"terms()\">{{'terms' | translate }}</span> {{'and' | translate }} <span (click)=\"privacyPolicy()\">{{'privacy_policy' | translate}}</span></p>\n              </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row justify-content-center>\n          <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div text-center>\n            </div>\n            <div padding>\n                <ion-button size=\"large\" [routerLink]=\"['/email-login']\" type=\"submit\" expand=\"block\">login</ion-button>\n                <ion-button class=\"fb-btn-wrp\" size=\"large\" (click)=\"doFbLogin()\" expand=\"block\"><a href=\"javascript:void(0)\"  class=\"fb-btn\">login with Facebook</a></ion-button>\n              </div>\n            <ion-label class=\"register-btn\" expand=\"block\" routerLink=\"/register\" routerDirection=\"forward\">don't you have an account? <a>register</a></ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n    <!-- <span class=\"coffee-stain\"></span> -->\n  </ion-content>\n  ";
    /***/
  },

  /***/
  "./src/app/_pages/landing/landing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/_pages/landing/landing.module.ts ***!
    \**************************************************/

  /*! exports provided: LandingPageModule */

  /***/
  function srcApp_pagesLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
      return LandingPageModule;
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


    var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing.page */
    "./src/app/_pages/landing/landing.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var routes = [{
      path: '',
      component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }];

    var LandingPageModule = function LandingPageModule() {
      _classCallCheck(this, LandingPageModule);
    };

    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]],
      declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })], LandingPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/landing/landing.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/_pages/landing/landing.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h5 {\n  color: #fff;\n}\n\nform {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.fb-btn-wrp {\n  --background: #3A5A97;\n}\n\n.fb-btn {\n  text-align: center;\n  font-size: 14px;\n  padding: 13px 30px 15px 44px;\n  text-decoration: none;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 20, 0.4);\n  line-height: 1;\n  position: relative;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.register-btn {\n  margin: 0 auto;\n  text-align: center;\n  display: block;\n  color: #fff;\n}\n\n.fb-btn-wrp {\n  --background: #3A5A97;\n}\n\n.fb-btn:before {\n  display: inline-block;\n  position: absolute;\n  background-image: url(data:image/png;base64,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);\n  height: 23px;\n  background-repeat: no-repeat;\n  background-position: 0px 3px;\n  text-indent: -9999px;\n  text-align: center;\n  width: 29px;\n  line-height: 23px;\n  margin: -8px 7px -7px -30px;\n  padding: 2 25px 0 0;\n  content: \"f\";\n}\n\nh1 {\n  color: #fff;\n  text-align: center;\n}\n\n.login-disclaimer {\n  color: #fff;\n  text-align: center;\n  padding: 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmNoaW1lZGlhL3Byb2plY3RzL2tva2lmeS9pY2VicmVha2VyL2NsaWVudC9rb2ZpZnkva29maWZ5L3NyYy9hcHAvX3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL19wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGl2SkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oNXtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50e1xuICAgIC8vIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2xhbmRpbmctcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cbmZvcm17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZmItYnRuLXdycHtcbiAgICAtLWJhY2tncm91bmQ6ICMzQTVBOTc7XG59XG5cbi5mYi1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTNweCAzMHB4IDE1cHggNDRweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwwLDIwLC40KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnJlZ2lzdGVyLWJ0bntcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNmZmY7XG59XG4uZmItYnRuLXdycCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjM0E1QTk3O1xufVxuXG4uZmItYnRuOmJlZm9yZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBS3pHbERRMUJKUTBNZ1VISnZabWxzWlFBQVNBMnRsbmRVVThrWHgrZTk5RVpMcUZKQ2I5SmJBT2sxOUk1Z0l5U0JoQkpqSUlqWUVGbGNnYlVnSWdLS0lFdFZjQzJBckFVUnhjS2kyRkJCRjJSUlVOZkZnZzJWM3dPV3VPZDNmdnZmYjk2Wm1jKzdjK2ZPblRrejUzd0JJUGV5aE1JVVdBYUFWRUc2S016SG5iNDBKcGFPZXd3Z1FBRFNRQlZRV2V3MG9WdElTQUQ0MS9MK0h1S05sTnNtczdIKzFlMS9EOGh5dUdsc0FLQVFaRGllazhaT1JmamtiR1VMUmVrQW9IaUlYWHR0dW5DV0N4R21pWkFFRVQ0MHk0bnpqUGdEV3Z3OFg1bnppUWp6UUh5R0FNQ1RXU3hSSWdDa2NjUk96MkFuSW5ISWVJVE5CUnkrQUdFR3dzNXNIb3VEY0NiQ2kxTlRWODl5RGNJRzhmK0lrL2dQWnJIaUpURlpyRVFKeis4Rm1Za3M3TWxQRTZhdzFzMzkvRCtiMUJReGNsNXpSUk5weVR5UmJ4alNLeUZuVnBHODJsL0NndmlnNEFVN0g5blJBdlBFdnBFTHpFN3pRTTV5Zmk2SDVlbS93T0xrU0xjRlpva1ErdHVIbjg2TVdHRFI2akJKZkVGSzBPejltTXVCeDJWS21Kdm1GYjVnVCtCN014YzRpeGNSdmNBWi9LaWdCVTVMRHBma2tNWHprTmhGNGpCSnpna2liOGtlVTlPUW1YK3Z5Mlo5WHl1ZEYrRzdZT2R3UGIwV21DdUlsT1FqVEhlWHhCR216TjN2dWZ5NUtUNFNlMXBHdUdSdXVpaENZazlpK2MzZTF6bC9ZWHFJNUV5QUovQUNBY2hIQjViQUdwZ0RCb2dHM2lBa25adUozRHNBUEZZTDE0bjRpYngwdWh2eVVyaDBwb0J0dXBodWFXNWhEY0RzdTV2MUFlRHQvYm4zQkNuZ3Y5dXFLZ0FJc0VJR0I3L2J6SFlBVU8yRVhQMGQzMjI2UndDUTNRWEEyVzYyV0pReEZ3NmdaenNNSUNMdm1RYVVnVHJRQmdiQUJNblFGamdDVnlSalB4QU1Ja0FNV0FuWWdBZFNnUWlzQlJ2QUZwQUhDc0F1c0JlVWdVcHdHTlNEbytBNGFBTm53QVZ3R1Z3SE44RmRNQWlHd1JoNEFTYkJlekFOUVJBT29rQlVTQm5TZ0hRaFk4Z1NZa0RPa0JjVUFJVkJNVkFjbEFnSklERzBBZG9LRlVCRlVCbFVCVFZBdjBDbm9RdlFWYWdmZWdDTlFCUFFHK2d6aklMSk1BMVdnL1ZnTTVnQnU4SCtjQVM4QWs2RTE4QlpjQzY4QXk2RnErRWpjQ3Q4QWI0TzM0V0g0UmZ3RkFxZ1NDZ0ZsQ2JLQk1WQWVhQ0NVYkdvQkpRSXRRbVZqeXBCVmFPYVVSMm9IdFJ0MUREcUplb1RHb3Vtb3Vsb0U3UWoyaGNkaVdhajE2QTNvUXZSWmVoNmRDdTZHMzBiUFlLZVJIL0RVRENxR0dPTUE0YUpXWXBKeEt6RjVHRktNTFdZVTVoTG1MdVlNY3g3TEJhcmdOWEgybUY5c1RIWUpPeDZiQ0gyQUxZRjI0bnR4NDVpcDNBNG5ETE9HT2VFQzhheGNPbTRQTngrM0JIY2Vkd3QzQmp1STU2RTE4QmI0cjN4c1hnQlBnZGZnbS9FbjhQZndqL0RUeE5rQ0xvRUIwSXdnVU5ZUjloSnFDRjBFRzRReGdqVFJGbWlQdEdKR0VGTUltNGhsaEtiaVplSVE4UzNKQkpKaTJSUENpWHhTZG1rVXRJeDBoWFNDT2tUV1k1c1JQWWdMeWVMeVR2SWRlUk84Z1B5V3dxRm9rZHhwY1JTMGlrN0tBMlVpNVRIbEk5U1ZDbFRLYVlVUjJxelZMbFVxOVF0cVZmU0JHbGRhVGZwbGRKWjBpWFNKNlJ2U0wrVUljam95WGpJc0dRMnlaVExuSllaa0ptU3BjcGF5QWJMcHNvV3lqYktYcFVkbDhQSjZjbDV5WEhrY3VVT3kxMlVHNldpcU5wVUR5cWJ1cFZhUTcxRUhhTmhhZm8wSmkySlZrQTdTdXVqVGNyTHlWdkxSOGxueXBmTG41VWZWa0FwNkNrd0ZWSVVkaW9jVjdpbjhGbFJUZEZOa2F1NFhiRlo4WmJpQjZWRlNxNUtYS1Y4cFJhbHUwcWZsZW5LWHNySnlydVYyNVFmcWFCVmpGUkNWZGFxSEZTNXBQSnlFVzJSNHlMMm92eEZ4eGM5VklWVmpWVERWTmVySGxidFZaMVNVMWZ6VVJPcTdWZTdxUFpTWFVIZFZUMUp2Vmo5blBxRUJsWERXWU92VWF4eFh1TTVYWjd1UmsraGw5Szc2Wk9hcXBxK21tTE5LczAreldrdGZhMUlyUnl0RnExSDJrUnRobmFDZHJGMmwvYWtqb1pPb000R25TYWRoN29FWFlZdVQzZWZiby91QnoxOXZXaTliWHB0ZXVQNlN2cE0vU3o5SnYwaEE0cUJpOEVhZzJxRE80WllRNFpoc3VFQnc1dEdzSkdORWMrbzNPaUdNV3hzYTh3M1BtRGN2eGl6Mkg2eFlISDE0Z0VUc29tYlNZWkprOG1JcVlKcGdHbU9hWnZwS3pNZHMxaXozV1k5WnQvTWJjeFR6R3ZNQnkza0xQd3NjaXc2TE41WUdsbXlMY3N0NzFoUnJMeXRObHUxVzcyMk5yYm1XaCswdm05RHRRbTAyV2JUWmZQVjFzNVdaTnRzTzJHbll4ZG5WMkUzd0tBeFFoaUZqQ3YyR0h0Mys4MzJaK3cvT2RnNnBEc2NkL2pMMGNReDJiSFJjWHlKL2hMdWtwb2xvMDVhVGl5bktxZGhaN3B6blBNaDUyRVhUUmVXUzdYTEUxZHRWNDVycmVzek4wTzNKTGNqYnEvY3pkMUY3cWZjUDNnNGVHejA2UFJFZWZwNDVudjJlY2w1UlhxVmVUMzIxdkpPOUc3eW52U3g4Vm52MCttTDhmWDMzZTA3d0ZSanNwa056RWsvTzcrTmZ0MytaUDl3L3pML0p3RkdBYUtBamtBNDBDOXdUK0JRa0c2UUlLZ3RHQVF6Zy9jRVB3clJEMWtUOG1zb05qUWt0RHowYVpoRjJJYXdubkJxK0tyd3h2RDNFZTRST3lNR0l3MGl4WkZkVWRKUnk2TWFvajVFZTBZWFJROHZOVnU2Y2VuMUdKVVlma3g3TEM0MktyWTJkbXFaMTdLOXk4YVcyeXpQVzM1dmhmNkt6QlZYVjZxc1RGbDVkcFgwS3RhcUUzR1l1T2k0eHJndnJHQldOV3NxbmhsZkVUL0o5bUR2WTcvZ3VIS0tPUk5jSjI0UjkxbUNVMEpSd25paVUrS2V4QW1lQzYrRTk1THZ3Uy9qdjA3eVRhcE0rcEFjbkZ5WFBKTVNuZEtTaWsrTlN6MHRrQk1rQzdwWHE2L09YTjB2TkJibUNZZlhPS3padTJaUzVDK3FUWVBTVnFTMXA5TVFnZE1yTmhEL0lCN0pjTTRvei9pNE5tcnRpVXpaVEVGbTd6cWpkZHZYUGN2eXp2cDVQWG85ZTMzWEJzME5XemFNYkhUYldMVUoyaFMvcVd1ejl1YmN6V1BaUHRuMVc0aGJrcmY4bG1PZVU1VHpibXYwMW81Y3RkenMzTkVmZkg1b3lwUEtFK1VOYkhQY1Z2a2ora2YrajMzYnJiYnYzLzR0bjVOL3JjQzhvS1RnU3lHNzhOcFBGaitWL2pTekkyRkgzMDdiblFkM1lYY0pkdDNiN2JLN3ZraTJLS3RvZEUvZ250WmllbkYrOGJ1OXEvWmVMYkV1cWR4SDNDZmVOMXdhVU5xK1gyZi9ydjFmeW5obGQ4dmR5MXNxVkN1MlYzdzR3RGx3NjZEcndlWkt0Y3FDeXMrSCtJZnVWL2xVdFZiclZaY2N4aDdPT1B5MEpxcW01MmZHencyMUtyVUZ0Vi9yQkhYRDlXSDEzUTEyRFEyTnFvMDdtK0FtY2RQRWtlVkhiaDcxUE5yZWJOSmMxYUxRVW5BTUhCTWZlLzVMM0MvM2p2c2Y3enJCT05GOFV2ZGt4U25xcWZ4V3FIVmQ2MlFicjIyNFBhYTkvN1RmNmE0T3g0NVR2NXIrV25kRzgwejVXZm16Tzg4UnorV2Vtem1mZFg2cVU5ajU4a0xpaGRHdVZWMkRGNWRldk5NZDJ0MTN5Zi9TbGN2ZWx5LzJ1UFdjditKMDVjeFZoNnVucnpHdXRWMjN2ZDdhYTlONzZqZWIzMDcxMmZhMTNyQzcwWDdUL21aSC81TCtjN2RjYmwyNDdYbjc4aDNtbmV0M2crNzIzNHU4ZDM5ZytjRHdmYzc5OFFjcEQxNC96SGc0UFpnOWhCbktmeVR6cU9TeDZ1UHEzdzEvYnhtMkhUNDc0am5TK3lUOHllQW9lL1RGSDJsL2ZCbkxmVXA1V3ZKTTQxbkR1T1g0bVFudmladlBsejBmZXlGOE1mMHk3MC9aUHl0ZUdidzYrWmZyWDcyVFN5ZkhYb3Rlejd3cGZLdjh0dTZkOWJ1dXFaQ3B4KzlUMzA5L3lQK28vTEgrRStOVHorZm96OCttMTM3QmZTbjlhdmkxNDV2L3Q2R1oxSmtaSVV2RW10TUNLS1NGRXhJQWVGTUhBQ1VHQU9wTkFJaFM4N3A0emdPYTEvSUlRMy9YV2ZOLzhieDJuaDFBTkFRNGtnMUFhQ2NpcVpIZmswaXZoL1F5MlFDRXVBSVE0UXBnS3l0SlJVWm1TMXFDbGVVY1FLUTJSSnFVek15OFJmUWd6aENBcndNek05TnRNek5mYXhIOS9oQ0F6dmZ6ZW56V1d3YlJOb2VNckR3OXc3c1ZqYlBuNXYraitRK1dhd0RvdnJKRkVRQUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWRWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU5DNHdJajRLSUNBZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0FnSUNBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcERiMjF3Y21WemMybHZiajR4UEM5MGFXWm1Pa052YlhCeVpYTnphVzl1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQakk4TDNScFptWTZVR2h2ZEc5dFpYUnlhV05KYm5SbGNuQnlaWFJoZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNlQzSnBaVzUwWVhScGIyNCtNVHd2ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajRLSUNBZ0lDQWdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDaUFnSUR3dmNtUm1PbEpFUmo0S1BDOTRPbmh0Y0cxbGRHRStDamwwdG1vQUFBRU1TVVJCVkRnUlk4aHUzUGoveGV2UC95a0ZJRE5BWmpFK2Zmbnh2NVFZSHdNMXdMTlhueGdZUVM0ang3Qy9mLzh4TURNellXaGx3UkRCSS9EeXpSZUdXYXRPTVJ3NSs1RGg2L2RmRE94c0xBeWlRdHdNSy9vaTRMcUlOdkRGbTg4TXFUWHJHZDUvK2c3WC9QUFhINFluTHo3QytTQUcwUWJPWG5VYXhUQmhBUzRHWVVFdUJsNHVkdklNUEhucE1WeGpZNjRMZzdPbE1weVB6TUFNVldSWkpQYUhUei9nUEZ5R2dSUVFiU0RjTkFJTXZNbkdKbW9tQWUwTURBSjhIQXhiWnNURDFWSHNRZ1ZwUWJoaElBYkZCaXJLQ0tFWWlOZkx5Q3FSdlg5a1dUcXlGQXFiWWhlaW1BYmtqQnFJSGlLazg1bEFoU0sxQU1nc3ByWVpCeGhldmYxQ3NablBYMzltQUprRkFOOGJuYzZROUpxNEFBQUFBRWxGVGtTdVFtQ0MpO1xuICAgIGhlaWdodDogMjNweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAzcHg7XG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbjogLThweCA3cHggLTdweCAtMzBweDtcbiAgICBwYWRkaW5nOiAyIDI1cHggMCAwO1xuICAgIGNvbnRlbnQ6IFwiZlwiO1xufVxuaDF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tZGlzY2xhaW1lcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4O1xufSIsImg1IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZiLWJ0bi13cnAge1xuICAtLWJhY2tncm91bmQ6ICMzQTVBOTc7XG59XG5cbi5mYi1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTNweCAzMHB4IDE1cHggNDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMjAsIDAuNCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZWdpc3Rlci1idG4ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mYi1idG4td3JwIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM0E1QTk3O1xufVxuXG4uZmItYnRuOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBS3pHbERRMUJKUTBNZ1VISnZabWxzWlFBQVNBMnRsbmRVVThrWHgrZTk5RVpMcUZKQ2I5SmJBT2sxOUk1Z0l5U0JoQkpqSUlqWUVGbGNnYlVnSWdLS0lFdFZjQzJBckFVUnhjS2kyRkJCRjJSUlVOZkZnZzJWM3dPV3VPZDNmdnZmYjk2Wm1jKzdjK2ZPblRrejUzd0JJUGV5aE1JVVdBYUFWRUc2S016SG5iNDBKcGFPZXd3Z1FBRFNRQlZRV2V3MG9WdElTQUQ0MS9MK0h1S05sTnNtczdIKzFlMS9EOGh5dUdsc0FLQVFaRGllazhaT1JmamtiR1VMUmVrQW9IaUlYWHR0dW5DV0N4R21pWkFFRVQ0MHk0bnpqUGdEV3Z3OFg1bnppUWp6UUh5R0FNQ1RXU3hSSWdDa2NjUk96MkFuSW5ISWVJVE5CUnkrQUdFR3dzNXNIb3VEY0NiQ2kxTlRWODl5RGNJRzhmK0lrL2dQWnJIaUpURlpyRVFKeis4Rm1Za3M3TWxQRTZhdzFzMzkvRCtiMUJReGNsNXpSUk5weVR5UmJ4alNLeUZuVnBHODJsL0NndmlnNEFVN0g5blJBdlBFdnBFTHpFN3pRTTV5Zmk2SDVlbS93T0xrU0xjRlpva1ErdHVIbjg2TVdHRFI2akJKZkVGSzBPejltTXVCeDJWS21Kdm1GYjVnVCtCN014YzRpeGNSdmNBWi9LaWdCVTVMRHBma2tNWHprTmhGNGpCSnpna2liOGtlVTlPUW1YK3Z5Mlo5WHl1ZEYrRzdZT2R3UGIwV21DdUlsT1FqVEhlWHhCR216TjN2dWZ5NUtUNFNlMXBHdUdSdXVpaENZazlpK2MzZTF6bC9ZWHFJNUV5QUovQUNBY2hIQjViQUdwZ0RCb2dHM2lBa25adUozRHNBUEZZTDE0bjRpYngwdWh2eVVyaDBwb0J0dXBodWFXNWhEY0RzdTV2MUFlRHQvYm4zQkNuZ3Y5dXFLZ0FJc0VJR0I3L2J6SFlBVU8yRVhQMGQzMjI2UndDUTNRWEEyVzYyV0pReEZ3NmdaenNNSUNMdm1RYVVnVHJRQmdiQUJNblFGamdDVnlSalB4QU1Ja0FNV0FuWWdBZFNnUWlzQlJ2QUZwQUhDc0F1c0JlVWdVcHdHTlNEbytBNGFBTm53QVZ3R1Z3SE44RmRNQWlHd1JoNEFTYkJlekFOUVJBT29rQlVTQm5TZ0hRaFk4Z1NZa0RPa0JjVUFJVkJNVkFjbEFnSklERzBBZG9LRlVCRlVCbFVCVFZBdjBDbm9RdlFWYWdmZWdDTlFCUFFHK2d6aklMSk1BMVdnL1ZnTTVnQnU4SCtjQVM4QWs2RTE4QlpjQzY4QXk2RnErRWpjQ3Q4QWI0TzM0V0g0UmZ3RkFxZ1NDZ0ZsQ2JLQk1WQWVhQ0NVYkdvQkpRSXRRbVZqeXBCVmFPYVVSMm9IdFJ0MUREcUplb1RHb3Vtb3Vsb0U3UWoyaGNkaVdhajE2QTNvUXZSWmVoNmRDdTZHMzBiUFlLZVJIL0RVRENxR0dPTUE0YUpXWXBKeEt6RjVHRktNTFdZVTVoTG1MdVlNY3g3TEJhcmdOWEgybUY5c1RIWUpPeDZiQ0gyQUxZRjI0bnR4NDVpcDNBNG5ETE9HT2VFQzhheGNPbTRQTngrM0JIY2Vkd3QzQmp1STU2RTE4QmI0cjN4c1hnQlBnZGZnbS9FbjhQZndqL0RUeE5rQ0xvRUIwSXdnVU5ZUjloSnFDRjBFRzRReGdqVFJGbWlQdEdKR0VGTUltNGhsaEtiaVplSVE4UzNKQkpKaTJSUENpWHhTZG1rVXRJeDBoWFNDT2tUV1k1c1JQWWdMeWVMeVR2SWRlUk84Z1B5V3dxRm9rZHhwY1JTMGlrN0tBMlVpNVRIbEk5U1ZDbFRLYVlVUjJxelZMbFVxOVF0cVZmU0JHbGRhVGZwbGRKWjBpWFNKNlJ2U0wrVUljam95WGpJc0dRMnlaVExuSllaa0ptU3BjcGF5QWJMcHNvV3lqYktYcFVkbDhQSjZjbDV5WEhrY3VVT3kxMlVHNldpcU5wVUR5cWJ1cFZhUTcxRUhhTmhhZm8wSmkySlZrQTdTdXVqVGNyTHlWdkxSOGxueXBmTG41VWZWa0FwNkNrd0ZWSVVkaW9jVjdpbjhGbFJUZEZOa2F1NFhiRlo4WmJpQjZWRlNxNUtYS1Y4cFJhbHUwcWZsZW5LWHNySnlydVYyNVFmcWFCVmpGUkNWZGFxSEZTNXBQSnlFVzJSNHlMMm92eEZ4eGM5VklWVmpWVERWTmVySGxidFZaMVNVMWZ6VVJPcTdWZTdxUFpTWFVIZFZUMUp2Vmo5blBxRUJsWERXWU92VWF4eFh1TTVYWjd1UmsraGw5Szc2Wk9hcXBxK21tTE5LczAreldrdGZhMUlyUnl0RnExSDJrUnRobmFDZHJGMmwvYWtqb1pPb000R25TYWRoN29FWFlZdVQzZWZiby91QnoxOXZXaTliWHB0ZXVQNlN2cE0vU3o5SnYwaEE0cUJpOEVhZzJxRE80WllRNFpoc3VFQnc1dEdzSkdORWMrbzNPaUdNV3hzYTh3M1BtRGN2eGl6Mkg2eFlISDE0Z0VUc29tYlNZWkprOG1JcVlKcGdHbU9hWnZwS3pNZHMxaXozV1k5WnQvTWJjeFR6R3ZNQnkza0xQd3NjaXc2TE41WUdsbXlMY3N0NzFoUnJMeXRObHUxVzcyMk5yYm1XaCswdm05RHRRbTAyV2JUWmZQVjFzNVdaTnRzTzJHbll4ZG5WMkUzd0tBeFFoaUZqQ3YyR0h0Mys4MzJaK3cvT2RnNnBEc2NkL2pMMGNReDJiSFJjWHlKL2hMdWtwb2xvMDVhVGl5bktxZGhaN3B6blBNaDUyRVhUUmVXUzdYTEUxZHRWNDVycmVzek4wTzNKTGNqYnEvY3pkMUY3cWZjUDNnNGVHejA2UFJFZWZwNDVudjJlY2w1UlhxVmVUMzIxdkpPOUc3eW52U3g4Vm52MCttTDhmWDMzZTA3d0ZSanNwa056RWsvTzcrTmZ0MytaUDl3L3pML0p3RkdBYUtBamtBNDBDOXdUK0JRa0c2UUlLZ3RHQVF6Zy9jRVB3clJEMWtUOG1zb05qUWt0RHowYVpoRjJJYXdubkJxK0tyd3h2RDNFZTRST3lNR0l3MGl4WkZkVWRKUnk2TWFvajVFZTBZWFJROHZOVnU2Y2VuMUdKVVlma3g3TEM0MktyWTJkbXFaMTdLOXk4YVcyeXpQVzM1dmhmNkt6QlZYVjZxc1RGbDVkcFgwS3RhcUUzR1l1T2k0eHJndnJHQldOV3NxbmhsZkVUL0o5bUR2WTcvZ3VIS0tPUk5jSjI0UjkxbUNVMEpSd25paVUrS2V4QW1lQzYrRTk1THZ3Uy9qdjA3eVRhcE0rcEFjbkZ5WFBKTVNuZEtTaWsrTlN6MHRrQk1rQzdwWHE2L09YTjB2TkJibUNZZlhPS3padTJaUzVDK3FUWVBTVnFTMXA5TVFnZE1yTmhEL0lCN0pjTTRvei9pNE5tcnRpVXpaVEVGbTd6cWpkZHZYUGN2eXp2cDVQWG85ZTMzWEJzME5XemFNYkhUYldMVUoyaFMvcVd1ejl1YmN6V1BaUHRuMVc0aGJrcmY4bG1PZVU1VHpibXYwMW81Y3RkenMzTkVmZkg1b3lwUEtFK1VOYkhQY1Z2a2ora2YrajMzYnJiYnYzLzR0bjVOL3JjQzhvS1RnU3lHNzhOcFBGaitWL2pTekkyRkgzMDdiblFkM1lYY0pkdDNiN2JLN3ZraTJLS3RvZEUvZ250WmllbkYrOGJ1OXEvWmVMYkV1cWR4SDNDZmVOMXdhVU5xK1gyZi9ydjFmeW5obGQ4dmR5MXNxVkN1MlYzdzR3RGx3NjZEcndlWkt0Y3FDeXMrSCtJZnVWL2xVdFZiclZaY2N4aDdPT1B5MEpxcW01MmZHencyMUtyVUZ0Vi9yQkhYRDlXSDEzUTEyRFEyTnFvMDdtK0FtY2RQRWtlVkhiaDcxUE5yZWJOSmMxYUxRVW5BTUhCTWZlLzVMM0MvM2p2c2Y3enJCT05GOFV2ZGt4U25xcWZ4V3FIVmQ2MlFicjIyNFBhYTkvN1RmNmE0T3g0NVR2NXIrV25kRzgwejVXZm16Tzg4UnorV2Vtem1mZFg2cVU5ajU4a0xpaGRHdVZWMkRGNWRldk5NZDJ0MTN5Zi9TbGN2ZWx5LzJ1UFdjditKMDVjeFZoNnVucnpHdXRWMjN2ZDdhYTlONzZqZWIzMDcxMmZhMTNyQzcwWDdUL21aSC81TCtjN2RjYmwyNDdYbjc4aDNtbmV0M2crNzIzNHU4ZDM5ZytjRHdmYzc5OFFjcEQxNC96SGc0UFpnOWhCbktmeVR6cU9TeDZ1UHEzdzEvYnhtMkhUNDc0am5TK3lUOHllQW9lL1RGSDJsL2ZCbkxmVXA1V3ZKTTQxbkR1T1g0bVFudmladlBsejBmZXlGOE1mMHk3MC9aUHl0ZUdidzYrWmZyWDcyVFN5ZkhYb3Rlejd3cGZLdjh0dTZkOWJ1dXFaQ3B4KzlUMzA5L3lQK28vTEgrRStOVHorZm96OCttMTM3QmZTbjlhdmkxNDV2L3Q2R1oxSmtaSVV2RW10TUNLS1NGRXhJQWVGTUhBQ1VHQU9wTkFJaFM4N3A0emdPYTEvSUlRMy9YV2ZOLzhieDJuaDFBTkFRNGtnMUFhQ2NpcVpIZmswaXZoL1F5MlFDRXVBSVE0UXBnS3l0SlJVWm1TMXFDbGVVY1FLUTJSSnFVek15OFJmUWd6aENBcndNek05TnRNek5mYXhIOS9oQ0F6dmZ6ZW56V1d3YlJOb2VNckR3OXc3c1ZqYlBuNXYraitRK1dhd0RvdnJKRkVRQUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQWRWcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU5DNHdJajRLSUNBZ1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNEtJQ0FnSUNBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcERiMjF3Y21WemMybHZiajR4UEM5MGFXWm1Pa052YlhCeVpYTnphVzl1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBRYUc5MGIyMWxkSEpwWTBsdWRHVnljSEpsZEdGMGFXOXVQakk4TDNScFptWTZVR2h2ZEc5dFpYUnlhV05KYm5SbGNuQnlaWFJoZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNlQzSnBaVzUwWVhScGIyNCtNVHd2ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajRLSUNBZ0lDQWdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDaUFnSUR3dmNtUm1PbEpFUmo0S1BDOTRPbmh0Y0cxbGRHRStDamwwdG1vQUFBRU1TVVJCVkRnUlk4aHUzUGoveGV2UC95a0ZJRE5BWmpFK2Zmbnh2NVFZSHdNMXdMTlhueGdZUVM0ang3Qy9mLzh4TURNellXaGx3UkRCSS9EeXpSZUdXYXRPTVJ3NSs1RGg2L2RmRE94c0xBeWlRdHdNSy9vaTRMcUlOdkRGbTg4TXFUWHJHZDUvK2c3WC9QUFhINFluTHo3QytTQUcwUWJPWG5VYXhUQmhBUzRHWVVFdUJsNHVkdklNUEhucE1WeGpZNjRMZzdPbE1weVB6TUFNVldSWkpQYUhUei9nUEZ5R2dSUVFiU0RjTkFJTXZNbkdKbW9tQWUwTURBSjhIQXhiWnNURDFWSHNRZ1ZwUWJoaElBYkZCaXJLQ0tFWWlOZkx5Q3FSdlg5a1dUcXlGQXFiWWhlaW1BYmtqQnFJSGlLazg1bEFoU0sxQU1nc3ByWVpCeGhldmYxQ3NablBYMzltQUprRkFOOGJuYzZROUpxNEFBQUFBRWxGVGtTdVFtQ0MpO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAzcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyOXB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAtOHB4IDdweCAtN3B4IC0zMHB4O1xuICBwYWRkaW5nOiAyIDI1cHggMCAwO1xuICBjb250ZW50OiBcImZcIjtcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tZGlzY2xhaW1lciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/_pages/landing/landing.page.ts":
  /*!************************************************!*\
    !*** ./src/app/_pages/landing/landing.page.ts ***!
    \************************************************/

  /*! exports provided: LandingPage */

  /***/
  function srcApp_pagesLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
      return LandingPage;
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


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/toast.service */
    "./src/app/_services/toast.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var FB_APP_ID = 2314645505268736;
    var PRIVACY_URL = 'https://google.com/policy-{LANGUAGE}.html';
    var TERMS_URL = 'https://google.com/terms-{LANGUAGE}.html';

    var LandingPage =
    /*#__PURE__*/
    function () {
      function LandingPage(fb, authService, loadingController, toastService, iab, translate, alertController, router) {
        _classCallCheck(this, LandingPage);

        this.fb = fb;
        this.authService = authService;
        this.loadingController = loadingController;
        this.toastService = toastService;
        this.iab = iab;
        this.translate = translate;
        this.alertController = alertController;
        this.router = router;
        this.returnUrl = '/';
        this.language = this.translate.currentLang && this.translate.currentLang.split('-')[0] ? this.translate.currentLang.split('-')[0] : 'en';
      }

      _createClass(LandingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "doFbLogin",
        value: function doFbLogin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading, permissions;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context.sent;
                    this.presentLoading(loading); //the permissions your facebook app needs from the user

                    permissions = ["public_profile", "email", "user_gender", "user_birthday"];
                    this.fb.login(permissions).then(function (response) {
                      var userId = response.authResponse.userID; //Getting name and gender properties

                      _this2.fb.api("/me?fields=name,email", permissions).then(function (_user) {
                        //now we have the users info, let's save it in the NativeStorage
                        _this2.authService.facebookLogin(response.authResponse.accessToken) // .pipe(concatMap( _ => this.authService.userInfo()))
                        .subscribe(function (token) {
                          console.log(token);

                          _this2.router.navigate([_this2.returnUrl]);

                          loading.dismiss();
                        }, function (error) {
                          console.log(error);

                          _this2.toastService.somethingWentWrong();

                          loading.dismiss();
                        });
                      });
                    }, function (error) {
                      console.log(error);
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(loading) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return loading.present();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "privacyPolicy",
        value: function privacyPolicy() {
          this.withBrowserGoTo(PRIVACY_URL.replace('{LANGUAGE}', this.language));
        }
      }, {
        key: "terms",
        value: function terms() {
          this.withBrowserGoTo(TERMS_URL.replace('{LANGUAGE}', this.language));
        }
      }, {
        key: "withBrowserGoTo",
        value: function withBrowserGoTo(url) {
          this.iab.create(url);
        }
      }]);

      return LandingPage;
    }();

    LandingPage.ctorParameters = function () {
      return [{
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/landing/landing.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing.page.scss */
      "./src/app/_pages/landing/landing.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LandingPage);
    /***/
  }
}]); //# sourceMappingURL=_pages-landing-landing-module-es2015.js.map
//# sourceMappingURL=_pages-landing-landing-module-es5.js.map