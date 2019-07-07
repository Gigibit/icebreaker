import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../_services/alert.service';
import { LoadingController, Platform, AlertController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { User, LoginType } from '../../_models/user';
import { ToastService } from '../../_services/toast.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	showError: boolean = false;
	error : string
	returnUrl: string
	FB_APP_ID: number = 2314645505268736;
	
	constructor(private alertService: AlertService,
		private authService: AuthService,
		private fb: Facebook,
		private nativeStorage: NativeStorage,
		public loadingController: LoadingController,
        private route: ActivatedRoute,
		private toastService: ToastService,
		public alertController: AlertController,
		private router: Router) { }
		ngOnInit() {
			this.authService.logout()
			// this.authenticationService.logout();
			this.returnUrl = '/';
			// const _this = this;
			// window['setFbAckToken'] = function(token){
			// 	_this.authService.facebookLogin(token)
			// 	// .pipe(concatMap( _ => this.authService.userInfo()))
			// 	.subscribe(token =>{
			// 		console.log(token)
			// 		_this.router.navigate([_this.returnUrl]);
			// 	}, error =>{
			// 		console.log(error);
			// 		_this.toastService.somethingWentWrong()
			// 	})
			// }
			
			
		}
		async login(form){
			const loading = await this.loadingController.create({
				message: 'Please wait...'
			});
			this.presentLoading(loading);
			
			this.authService
			.nativeLogin(form.value['email'], form.value['password'])
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
		
		
	}