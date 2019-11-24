import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricingPlan, PricingPlanMapper } from '../../_models/pricing-plan';
import { ModalController, IonSlides, Platform } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

interface Product {
  transactionId: string;
  receipt: string;
  signature: string;
  productType: string;
}

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss'],
})
export class SelectPlanComponent implements OnInit {
  plans : PricingPlan[] = []
  @ViewChild('slides', {static : true}) slides : IonSlides
  productMap
  sliderConfig = {
    slidesPerView: 2,
    spaceBetween: 45,
    centeredSlides: true,
    initialSlide: 1
  }
  constructor(
    public platform: Platform, 
    private store: InAppPurchase2,
    private modalCtrl: ModalController,
    private userService: UserService
    ) { }

  dismiss(){
    this.modalCtrl.dismiss()
  }
  ngOnInit() {
    this.plans = this.userService.lastPlans

  }
  
  async onPlanChoosen(){
    let index = await this.slides.getActiveIndex()
    this.plans = this.userService.lastPlans
    let selectedPlanId = this.plans[index].id
    console.log(this.plans)
    console.log(index)
    
    this.platform.ready().then(() => {
      this.store.register({
        id: selectedPlanId,
        type: this.store.CONSUMABLE,
      });
      let process = this.store.when(selectedPlanId)
      this.store.when("subscription").approved((data)=> console.log(data)); // match all subscriptions

      process.approved(p => {
        let paymentProcess = p.verify()
        paymentProcess.success((product, transactionDetail, purchaseData) => {
            console.log('-----',product,'---',transactionDetail, purchaseData, '----')
            this.userService.finalizePayment(transactionDetail).subscribe(data=>{
            })
        })
        paymentProcess.error((err)=>console.log('---', err, '---'))
        paymentProcess.done((done)=>console.log('---', done, '---'))
      })
      process.error(p=> console.log("Store: error", p));
      process.verified(p =>{ 
        p.finish()
        console.log('finish')
      });
      process.cancelled(p => console.log('canceled', p))
      this.store.refresh();
      this.store.order(selectedPlanId);
     });
  }
}
