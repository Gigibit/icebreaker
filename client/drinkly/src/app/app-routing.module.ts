import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './_pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './_pages/register/register.module#RegisterPageModule' },
  { path: 'user-profile',  canActivate: [AuthGuard], loadChildren: './_pages/user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'home', canActivate: [AuthGuard], loadChildren : './_pages/home/home.module#HomePageModule'},
  { path: 'message/:with', canActivate: [AuthGuard], loadChildren : './_pages/chat/chat.module#ChatRoomPageModule'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
