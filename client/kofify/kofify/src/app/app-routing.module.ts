import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', canActivate: [AuthGuard], loadChildren: './tabs/tabs.module#TabsModule' },
  { path: 'email-login', loadChildren: './_pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './_pages/register/register.module#RegisterPageModule' },
  // { path: 'user-profile',  canActivate: [AuthGuard], loadChildren: './_pages/user-profile/user-profile.module#UserProfilePageModule' },
  // { path: 'home', canActivate: [AuthGuard], loadChildren : './_pages/home/home.module#HomePageModule'},
  { path: 'chat/:with', canActivate: [AuthGuard], loadChildren : './_pages/chat/chat.module#ChatRoomPageModule'},
  { path: 'login', loadChildren: './_pages/landing/landing.module#LandingPageModule' },
  { path: 'view-profile', loadChildren: './_pages/view-profile/view-profile.module#ViewProfilePageModule' },
  { path: 'localized-users', loadChildren: './_pages/localized-users/localized-users.module#LocalizedUsersPageModule' },
  { path: 'localized-users', loadChildren: './_pages/localized-users/localized-users.module#LocalizedUsersPageModule' },
  { path: 'view-profile/:id', loadChildren: './_pages/view-profile/view-profile.module#ViewProfilePageModule' },
  // { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
