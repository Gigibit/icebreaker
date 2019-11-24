import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricingPlan, PricingPlanMapper } from '../../_models/pricing-plan';
import { ModalController, IonSlides } from '@ionic/angular';
// import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';

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
  plans : PricingPlan[]
  @ViewChild('slides') slides : IonSlides
  productMap
  sliderConfig = {
    slidesPerView: 2,
    spaceBetween: 45,
    centeredSlides: true,
    initialSlide: 1
  }
  constructor(
    // private iap: InAppPurchase,
    private modalCtrl: ModalController,
    private route: ActivatedRoute
  ) { }

  dismiss(){
    this.modalCtrl.dismiss()
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.plans = PricingPlanMapper.fromJsonArray(params.get('plans'));
      // this.iap
      // .getProducts(this.plans.map(plan=>plan.id))
      // .then((products) => {
      //   products.map(product=> this.productMap[product.productId] = product)
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    })
  }
  
  async onPlanChoosen(){
    let index = await this.slides.getActiveIndex()
    // this.iap.buy(this.productMap[index].id)
    // .then((data)=> {
    //   console.log(data)
    // })
    // .catch((err)=> {
    //   console.log(err);
    // });
  }
}
