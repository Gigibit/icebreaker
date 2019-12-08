import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ViewProfileComponent } from './view-profile.page';
import { IonicImageLoader } from 'ionic-image-loader';


const routes: Routes = [
  {
    path: '',
    component: ViewProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewProfileComponent]
})
export class ViewProfilePageModule {}
