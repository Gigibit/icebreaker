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
  storeProducts
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
    this.iap
    .getProducts(this.plans.map(d=>d.id))
    .then((products) => {
      console.log(products)
      this.storeProducts = products
      products.forEach((el,value)=>{
        let plan = this.plans.filter(d => d.id == el.productId)[0]
        plan.price = el.price
        plan.description = el.description
        plan.name = el.title
      })
    })  .catch((err) => {
      this.toastService.somethingWentWrong()
      console.log(err);
    });
  }
  
  async onPlanChoosen(index){
    this.plans = this.userService.lastPlans
    console.log(index)
    let selectedPlanId = this.plans[index].id
    console.log(selectedPlanId)

    this.iap
      .buy(selectedPlanId)
      .then((data)=> {
        this.iap.consume(data.productType, data.receipt, data.signature)
        this.userService.finalizePayment(data).subscribe(data=>console.log(data))
        this.modalCtrl.dismiss()
      })
 
    }
  
   
}
