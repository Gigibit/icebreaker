(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.component.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification-tab-badge {\n  color: #fff;\n  font-weight: bold;\n  background: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWlnaWNob3VncmFkL2FyY2hpbWVkaWEvcHJvamVjdHMva29raWZ5L2ljZWJyZWFrZXIvY2xpZW50L2tvZmlmeS9zcmMvYXBwL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi10YWItYmFkZ2V7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/chat.service */ "./src/app/_services/chat.service.ts");



let TabsComponent = class TabsComponent {
    constructor(chatService) {
        this.notificationCount = 0;
        chatService.notificationCount.subscribe(count => this.notificationCount = count);
        chatService.getNotificationCount();
    }
};
TabsComponent.ctorParameters = () => [
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] }
];
TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: `
  <ion-tabs >
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="user-profile">
        <ion-icon ios="md-contact" md="md-contact"></ion-icon>
      </ion-tab-button>
        <ion-tab-button tab="home">
          <ion-icon md="ios-cafe" ios="ios-cafe"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="messages">
        <ion-badge *ngIf="notificationCount>0" class="notification-tab-badge">{{notificationCount}}</ion-badge>
        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.component.scss */ "./src/app/tabs/tabs.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
], TabsComponent);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.component */ "./src/app/tabs/tabs.component.ts");







const routes = [
    {
        path: 'tabs',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
        children: [
            { path: 'home', loadChildren: '../_pages/home/home.module#HomePageModule' },
            { path: 'user-profile', loadChildren: '../_pages/user-profile/user-profile.module#UserProfilePageModule' },
            { path: 'messages', loadChildren: '../_pages/messages/messages.module#MessagesPageModule' },
        ]
    },
    {
        path: '',
        // canActivate: [], 
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsModule = class TabsModule {
};
TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"]]
    })
], TabsModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map