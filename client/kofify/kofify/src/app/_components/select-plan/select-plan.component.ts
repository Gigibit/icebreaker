import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricingPlan, PricingPlanMapper } from '../../_models/pricing-plan';
import { ModalController, IonSlides, Platform } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { ToastService } from 'src/app/_services/toast.service';

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
    private iap: InAppPurchase,
    private modalCtrl: ModalController,
    private toastService: ToastService,
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

    this.iap
    .getProducts(this.plans.map(d=>d.id))
    .then((products) => {
        this.iap
        .buy(selectedPlanId)
        .then((data)=> {
          this.iap.consume(data.productType, data.receipt, data.signature)
          this.userService.finalizePayment(data).subscribe(data=>console.log(data))
          this.modalCtrl.dismiss()
        })
        .catch((err)=> {
          this.toastService.somethingWentWrong()
          console.log(err);
        });
    })
    .catch((err) => {
      this.toastService.somethingWentWrong()
      console.log(err);
    });
   





    // this.platform.ready().then(() => {
    //   this.store.register({
    //     id: selectedPlanId,
    //     type: this.store.CONSUMABLE,
    //   });
    //   let process = this.store.when(selectedPlanId)

    //   process.approved(p => {
    //     let paymentProcess = p.verify()
    //     paymentProcess.success((product, transactionDetail) => {
    //         console.log('success', product, transactionDetail)
    //         this.userService.finalizePayment(transactionDetail).subscribe(data=>{
    //         })
    //     })
    //   })
    //   process.error(p=> console.log("Store: error", p));
    //   process.verified(p =>{ 
    //     console.log('--- finishing ', p)
    //     p.finish()
    //     console.log('--- finish', p)
    //   });
    //   process.cancelled(p => console.log('canceled', p))
    //   this.store.refresh();
    //   this.store.order(selectedPlanId);
    //  });
  }
}
