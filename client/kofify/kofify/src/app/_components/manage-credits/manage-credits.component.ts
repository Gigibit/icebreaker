import { Component, OnInit } from '@angular/core';
import { AdmobFreeService } from '../../_services/admob-free.service';
import { ModalController } from '@ionic/angular';
import { SelectPlanComponent } from '../select-plan/select-plan.component';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-manage-credits',
  templateUrl: './manage-credits.component.html',
  styleUrls: ['./manage-credits.component.scss'],
})
export class ManageCreditsComponent implements OnInit {
  credits: string

  constructor(
    private modalCtrl: ModalController,
    private userService: UserService,
    private admobService: AdmobFreeService,
    authService: AuthService
  ) { 
    authService.currentUser.subscribe(user=>{
      this.credits = user.credits
    })
  }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss()
  }
  onBuyMoreCreditsTap(){
    let plans = ""
    this.modalCtrl.create({
      cssClass: 'plans-modal',
      component: SelectPlanComponent,
      componentProps: {
          plans: plans
        }
    }).then(modal => {
      modal.present();
    });
  }

  onRewardTap(){
    this.admobService.rewardVideo({
      onReward : ()=>{
        this.userService.notifyVideoReward().subscribe(data=>{
          
        }, error=>{

        })
      }
    })
  }


}
