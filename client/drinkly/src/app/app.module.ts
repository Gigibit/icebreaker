import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { File } from '@ionic-native/File/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ChatRoomPageModule } from './_pages/chat/chat.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LoginPageModule } from './_pages/login/login.module';
import { RegisterPageModule } from './_pages/register/register.module';

 
import { Camera } from '@ionic-native/Camera/ngx';
 
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
//import { ProfilePageModule } from './profile/profile.module';
//import { ImageModalComponent } from './image-modal/image-modal.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
//import { UserProfilePopoverComponent } from './user-profile-popover/user-profile-popover.component';
import { Globalization } from '@ionic-native/globalization/ngx';
//import { AlertComponent } from './alert/alert.component';
//import { EditProfileComponent } from './_components/edit-profile/edit-profile.component';
//import { SharedModule } from './shared/shared.module';
import { iosTransitionAnimation } from './_utils/transitions';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ImageModalComponent } from './_components/image-modal/image-modal.component';
import { LocalizedUsersComponent } from './_components/localized-users/localized-users.component';

import { OneSignal } from '@ionic-native/onesignal/ngx'

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    ImageModalComponent, 
    LocalizedUsersComponent,
  ],
  entryComponents: [ 
    ImageModalComponent, 
    LocalizedUsersComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({  
      navAnimation: iosTransitionAnimation,
    }), 
    AppRoutingModule,
    ChatRoomPageModule,
    HttpModule,
    HttpClientModule,
//    SharedModule,
    FormsModule,
    LoginPageModule,
//    ProfilePageModule,
    RegisterPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Globalization,
    NativeStorage,
    Facebook,
    Camera,
    File,
    OneSignal,
    FileTransfer,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


