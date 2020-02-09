import { Component, OnInit } from '@angular/core';
import { AdmobFreeService } from '../../_services/admob-free.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { SelectPlanComponent } from '../select-plan/select-plan.component';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toast.service';

const rewardNotAvailableKey = 'reward_not_available_come_back_tomorrow'

@Component({
  selector: 'app-manage-credits',
  templateUrl: './manage-credits.component.html',
  styleUrls: ['./manage-credits.component.scss'],
})
export class ManageCreditsComponent implements OnInit {
  credits: string
  //let the user press button first we have to notify user, regardless of whether the videos are available or not
  rewardButtonEnabled = true
  rewardAvailable = false

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private toastService: ToastService,
    private admobService: AdmobFreeService,
    private authService: AuthService
  ) { 
    authService.currentUser.subscribe(user=>{
      console.log(user)
      this.credits = user.credits
      this.rewardAvailable = user.rewardAvailable
    })
  }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss()
  }
  async onBuyMoreCreditsTap(){
    let loader = await this.loadingCtrl.create({
      duration: 7000
    })
    loader.present()
    this.userService.listPlans().subscribe(plans=>{
      this.modalCtrl.create({
        cssClass: 'plans-modal',
        component: SelectPlanComponent
      }).then(modal => {
        loader.dismiss()
        modal.present();
      });
    }, error => {
      console.log(error)
      loader.dismiss()
    })
   
  }
  async toastNoRewardAvailable(){
    this.toastService.alert('reward_not_available_come_back_tomorrow')
    this.rewardButtonEnabled = false
  }
  async onRewardTap(){
    let loader = await this.loadingCtrl.create({
      duration: 20000
    }) 
    loader.present()
    this.admobService.rewardVideo().with({
      onReward : ()=>{
        loader.dismiss()
        this.userService.notifyVideoReward().subscribe(data=>{
          console.log(data)
          let admobCredit = data['credit'] && data['credit']['admobCredits']
          let admobRewardAvailable = admobCredit && admobCredit['count'] < admobCredit['countMax'];
          this.credits = data && data['credit'] && data['credit']['credits']
          this.rewardAvailable = admobRewardAvailable
          this.authService.currentUserValue.credits = this.credits
          this.authService.contextRefresh(this.authService.currentUserValue)
        })
      },
      onFail: (e)=>{ 
        this.toastService.somethingWentWrong()
        loader.dismiss() 
        console.log(e)
      }
    })
  }
}
