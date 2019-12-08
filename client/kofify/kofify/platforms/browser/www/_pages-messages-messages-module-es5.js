function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_pages-messages-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_pagesMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>messages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <div *ngIf=\"chats && chats.length == 0\">\n        <ion-label padding>{{'no_messages' | translate }}</ion-label>\n    </div>\n    <ion-list *ngIf=\"!chats\">\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>        <ion-item>\n          <ion-avatar class=\"user-message-img\" slot=\"start\">\n            <ion-skeleton-text></ion-skeleton-text>\n          </ion-avatar>\n          <ion-label>\n            <ion-skeleton-text animated style=\"width: 70%; height: 17px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 40%;\"></ion-skeleton-text>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    <ion-list *ngIf=\"chats && chats.length > 0\">\n        <ion-item *ngFor=\"let chat of chats\" (click)=\"goToChat(chat, $event)\">\n          <ion-avatar id=\"chat-img-{{chat.id}}\" class=\"user-message-img user-message-img-show\" slot=\"start\">\n            <img \n            onError=\"this.src='../../assets/imgs/user.svg';\"             \n            [src]=\"chat.img\">\n          </ion-avatar>\n          <ion-label class=\"chat-name\">\n            <h3>{{chat.name}}</h3>\n            <p *ngIf=\"chat.lastMessage\" [class.notReadMessage]=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\">{{chat.lastMessage.content}}</p>\n          </ion-label>\n          <div class=\"not-read-checker\" *ngIf=\"chat.lastMessage.readBy.indexOf(user?.id) == -1\">&bull;</div>\n        </ion-item>\n      </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/_pages/messages/messages.module.ts ***!
    \****************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcApp_pagesMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
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


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/_pages/messages/messages.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }];

    var MessagesPageModule = function MessagesPageModule() {
      _classCallCheck(this, MessagesPageModule);
    };

    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/_pages/messages/messages.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_pagesMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notReadMessage {\n  font-weight: bold;\n  color: #999; }\n\n.user-message-img {\n  background: #fff;\n  display: block;\n  transition: all linear 0.3s;\n  height: 45px;\n  width: 45px; }\n\n.not-read-checker {\n  color: #888;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 21px;\n  margin-right: 17px; }\n\n.chat-name > h3 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n  overflow: hidden; }\n\n.user-message-img-hide {\n  opacity: 0; }\n\n.user-message-img-show {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9rb2ZpZnkvc3JjL2FwcC9fcGFnZXMvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFJZjtFQUVJLGdCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL19wYWdlcy9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90UmVhZE1lc3NhZ2V7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM5OTk7XG59XG5cblxuLnVzZXItbWVzc2FnZS1pbWd7XG4gICAgLy8gYm9yZGVyOiAycHggc29saWQgIzIyMjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuM3M7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xufVxuLm5vdC1yZWFkLWNoZWNrZXJ7XG4gICAgY29sb3I6ICM4ODg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuLmNoYXQtbmFtZT5oM3tcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi51c2VyLW1lc3NhZ2UtaW1nLWhpZGV7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnVzZXItbWVzc2FnZS1pbWctc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcblxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_pages/messages/messages.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/_pages/messages/messages.page.ts ***!
    \**************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcApp_pagesMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
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


    var src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/_models/chat */
    "./src/app/_models/chat.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_services/chat.service */
    "./src/app/_services/chat.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/_services/auth.service */
    "./src/app/_services/auth.service.ts");

    var MessagesPage =
    /*#__PURE__*/
    function () {
      function MessagesPage(router, authService, chatService) {
        var _this = this;

        _classCallCheck(this, MessagesPage);

        this.router = router;
        this.authService = authService;
        this.chatService = chatService; //todo: add timestamp to last message

        this.authService.currentUser.subscribe(function (user) {
          _this.user = user;
        });
      }

      _createClass(MessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getChats();
        }
      }, {
        key: "getChats",
        value: function getChats() {
          var _this2 = this;

          this.chatService.getChats().subscribe(function (response) {
            _this2.chats = src_app_models_chat__WEBPACK_IMPORTED_MODULE_2__["ChatMapper"].fromJsonArray(response['chats']);
          });
        }
      }, {
        key: "goToChat",
        value: function goToChat(chat) {
          var _this3 = this;

          if (chat.enabled) {
            this.chatService.setActiveChat(chat);
            this.router.navigate(['/chat', chat.id]);
          } else {
            var image = document.getElementById('chat-img-' + chat.id);
            this.chatService.unlock(chat).subscribe(function (_chat) {
              image.classList.remove('user-message-img-show');
              image.classList.add('user-message-img-hide');
              chat.img = _chat.img;
              chat.enabled = _chat.enabled;
              setTimeout(function () {
                image.classList.add('user-message-img-show');
                image.classList.remove('user-message-img-hide');

                _this3.chatService.setActiveChat(chat);

                _this3.router.navigate(['/chat', chat.id]);
              }, 1000);
            });
          }
        }
      }]);

      return MessagesPage;
    }();

    MessagesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }];
    };

    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_pages/messages/messages.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/_pages/messages/messages.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])], MessagesPage);
    /***/
  }
}]); //# sourceMappingURL=_pages-messages-messages-module-es2015.js.map
//# sourceMappingURL=_pages-messages-messages-module-es5.js.map