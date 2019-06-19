import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', loadChildren: './_pages/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './_pages/register/register.module#RegisterPageModule' },
    { path: 'user-profile', canActivate: [AuthGuard], loadChildren: './_pages/user-profile/user-profile.module#UserProfilePageModule' },
    { path: 'home', canActivate: [AuthGuard], loadChildren: './_pages/home/home.module#HomePageModule' },
    { path: 'chat/:with', canActivate: [AuthGuard], loadChildren: './_pages/chat/chat.module#ChatRoomPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map