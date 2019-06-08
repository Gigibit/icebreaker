import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
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
		private platform: Platform,
		public alertController: AlertController,
		private router: Router) { }
		ngOnInit() {
			// this.authenticationService.logout();
			this.returnUrl = '/';
			
		}
		login(form){
			this.authService.login(form.value['email'], form.value['password']).subscribe(data=>{
				this.router.navigate([this.returnUrl]);
			},error =>{
				this.alertService.error(error)
				this.error = error
			});
		}
		
		async doFbLogin(){
			const loading = await this.loadingController.create({
				message: 'Please wait...'
			});
			this.presentLoading(loading);
			
			//the permissions your facebook app needs from the user
			const permissions = ["public_profile", "email"];
			
			this.fb.login(permissions)
			.then(response =>{
				let userId = response.authResponse.userID;
				
				//Getting name and gender properties
				this.fb.api("/me?fields=name,email", permissions)
				.then(user =>{
					user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
					//now we have the users info, let's save it in the NativeStorage
					this.nativeStorage.setItem('facebook_user',
					{
						name: user.name,
						email: user.email,
						picture: user.picture
					})
					.then(() =>{
						this.router.navigate(["/user"]);
						loading.dismiss();
					}, error =>{
						console.log(error);
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