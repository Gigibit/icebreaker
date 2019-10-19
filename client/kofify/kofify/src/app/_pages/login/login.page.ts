import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../_services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ToastService } from '../../_services/toast.service';
import { Location } from '@angular/common';


@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	showError: boolean = false;
	error : string
	returnUrl: string
	
	constructor(
		private location: Location,
		private authService: AuthService,
		public loadingController: LoadingController,
		private toastService: ToastService,
		public alertController: AlertController,
		private router: Router) { }
		ngOnInit() {
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
				this.toastService.somethingWentWrong()
				loading.dismiss();
			})
		}
		
		
		async presentLoading(loading) {
			return await loading.present();
		}
		
		
	}