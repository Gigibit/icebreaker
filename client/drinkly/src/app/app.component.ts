import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  currentUser: User;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    translate: TranslateService,
    private userService: UserService,
    private authenticationService: AuthService,
    private router: Router
  ) {

    this.initializeApp();
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    this.oneSignal.startInit('700f900e-f399-44e4-800d-5fc23f769dbc', '436027625251');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

  }



  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
