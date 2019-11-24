import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { LoadingController, AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/_services/toast.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AuthService } from 'src/app/_services/auth.service';
import { TranslateService } from '@ngx-translate/core';

const FB_APP_ID: number = 2314645505268736;
const PRIVACY_URL = 'https://google.com/policy-{LANGUAGE}.html'
const TERMS_URL = 'https://google.com/terms-{LANGUAGE}.html'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
	returnUrl: string
  language : string
  constructor(
    private fb: Facebook,
    private authService: AuthService,
		public loadingController: LoadingController,
    private toastService: ToastService,
    private iab: InAppBrowser,
    private translate: TranslateService,
		public alertController: AlertController,
		private router: Router
  ) { 
    this.returnUrl = '/';
    this.language = this.translate.currentLang && this.translate.currentLang.split('-')[0] ? this.translate.currentLang.split('-')[0] : 'en'
  }

  ngOnInit() {
  }

  async doFbLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    
    //the permissions your facebook app needs from the user
    const permissions = ["public_profile", "email","user_gender","user_birthday"];
    
    this.fb.login(permissions)
    .then(response =>{
      let userId = response.authResponse.userID;
      //Getting name and gender properties
      this.fb.api("/me?fields=name,email", permissions)
      .then(_user =>{
        //now we have the users info, let's save it in the NativeStorage
        this.authService.facebookLogin(response.authResponse.accessToken)
        // .pipe(concatMap( _ => this.authService.userInfo()))
        .subscribe(token =>{
          console.log(token)
          this.router.navigate([this.returnUrl]);
          loading.dismiss();
        }, error =>{
          console.log(error);
          this.toastService.somethingWentWrong()
          loading.dismiss();
        })
      })
    }, error =>{
      console.log(error);
      loading.dismiss();
    });
  }
  
  async presentLoading(loading) {
    return await loading.present();
  }
  
  privacyPolicy(){
    this.withBrowserGoTo(PRIVACY_URL.replace('{LANGUAGE}',this.language))
  }
  terms(){
    this.withBrowserGoTo(TERMS_URL.replace('{LANGUAGE}',this.language))
  }
  withBrowserGoTo(url){
    this.iab.create(url);
  }

}
