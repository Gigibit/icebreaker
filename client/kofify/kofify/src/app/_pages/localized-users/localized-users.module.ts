import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { LocalizedUsersComponent } from 'src/app/_pages/localized-users/localized-users.page';
import { TranslateModule } from '@ngx-translate/core';
import { IonicImageLoader } from 'ionic-image-loader';


const routes: Routes = [
  {
    path: '',
    component: LocalizedUsersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [LocalizedUsersComponent]
})
export class LocalizedUsersPageModule {}
