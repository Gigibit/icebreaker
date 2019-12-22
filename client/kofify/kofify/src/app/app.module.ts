import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { File } from '@ionic-native/File/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatRoomPageModule } from './_pages/chat/chat.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { LoginPageModule } from './_pages/login/login.module';
import { RegisterPageModule } from './_pages/register/register.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


 
import { Camera } from '@ionic-native/Camera/ngx';
 
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { Globalization } from '@ionic-native/globalization/ngx';
import { iosTransitionAnimation } from './_utils/transitions';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { ImageModalComponent } from './_components/image-modal/image-modal.component';

import { OneSignal } from '@ionic-native/onesignal/ngx'
import { UserProfilePopoverComponent } from './_components/user-profile-popover/user-profile-popover.component';
import { EditUserProfileComponent } from './_components/edit-user-profile/edit-user-profile.component';
import { DragulaModule } from 'ng2-dragula';
// import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { ManageCreditsComponent } from './_components/manage-credits/manage-credits.component';
import { SelectPlanComponent } from './_components/select-plan/select-plan.component';
import { AdmobFreeService } from './_services/admob-free.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
// import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { IonicImageLoader } from 'ionic-image-loader';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilterComponent } from './_components/filter/filter.component';

function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


// import { Injectable } from "@angular/core";
// import { HammerGestureConfig } from "@angular/platform-browser";

// @Injectable()
// export class IonicGestureConfig extends HammerGestureConfig {
//   buildHammer(element: HTMLElement) {
//     const mc = new (<any>window).Hammer(element);

//     for (const eventName in this.overrides) {
//       if (eventName) {
//         mc.get(eventName).set(this.overrides[eventName]);
//       }
//     }

//     return mc;
//   }
// }


@NgModule({
  declarations: [
    AppComponent,
    ImageModalComponent, 
    ManageCreditsComponent,
    SelectPlanComponent,
    DeleteAccountComponent,
    UserProfilePopoverComponent,
    FilterComponent,
    EditUserProfileComponent
    ],
  entryComponents: [ 
    ImageModalComponent, 
    ManageCreditsComponent,
    SelectPlanComponent,
    DeleteAccountComponent,
    FilterComponent,
    UserProfilePopoverComponent,
    EditUserProfileComponent
    ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({  
      navAnimation: iosTransitionAnimation
    }), 
    AppRoutingModule,
    ChatRoomPageModule,
    IonicImageLoader.forRoot(),
    DragulaModule.forRoot(),
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
    AdMobFree,
    ScreenOrientation,
    InAppPurchase,
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    AdmobFreeService,
    Globalization,
    NativeStorage,
    Facebook,
    WebView,
    Camera,
    File,
    OneSignal,
    FileTransfer,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


