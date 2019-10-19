	
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
 
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children:[
        { path: 'home', loadChildren: '../_pages/home/home.module#HomePageModule' },
        { path: 'user-profile', loadChildren: '../_pages/user-profile/user-profile.module#UserProfilePageModule' },
        { path: 'messages', loadChildren: '../_pages/messages/messages.module#MessagesPageModule' },
    ]
  },
  {
    path:'',
    // canActivate: [], 
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsComponent]
})
export class TabsModule {}