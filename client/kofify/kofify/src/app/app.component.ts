import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UserService } from './_services/user.service';
import { ImageLoaderConfigService } from 'ionic-image-loader';
import { ChatService } from './_services/chat.service';
import { timer } from 'rxjs';
import { CoffeeService } from './_services/coffe.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showSplash = true
  currentUser: User;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private translate: TranslateService,
    private authenticationService: AuthService,
    private chatService: ChatService,
    private screenOrientation: ScreenOrientation,
    private imageLoaderConfig: ImageLoaderConfigService,
    private router: Router
    ) {

      this.initializeApp();

    }
    
    
    
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
    initializeApp() {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.platform.ready().then(() => {
        this.splashScreen.hide()
        
        timer(3000).subscribe(() => {
          document.getElementById('ion-app').style.opacity = '1'
          this.showSplash = false
        }) // <-- hide animation after 3s
        
        this.imageLoaderConfig.setFallbackUrl('assets/imgs/user.svg'); // if images fail to load, display this image instead
        this.imageLoaderConfig.enableSpinner(false)
        this.imageLoaderConfig.setMaximumCacheSize(40 * 1024 * 1024); // set max size to 20MB
        this.imageLoaderConfig.setMaximumCacheAge(7 * 24 * 60 * 60 * 1000); // 7 days
        this.imageLoaderConfig.useImageTag(true);
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
        this.oneSignal.startInit('700f900e-f399-44e4-800d-5fc23f769dbc', '436027625251');
        
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        
        this.oneSignal.handleNotificationReceived().subscribe(() => {
          // do something when notification is received
          this.chatService.updateChatSubject.next(true)
          let notificationCount = this.chatService.notificationCount.getValue()
          this.chatService.notificationCount.next(notificationCount+1)
        });


        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        
        this.oneSignal.endInit();
        this.statusBar.styleDefault();
        this.enableDarkMode()
       });
    }
    enableDarkMode(){
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      toggleDarkTheme(prefersDark.matches);

      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

      // Add or remove the "dark" class based on if the media query matches
      function toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
      }
    }
  }
