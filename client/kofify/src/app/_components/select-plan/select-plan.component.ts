import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PricingPlan, PricingPlanMapper } from '../../_models/pricing-plan';
import { ModalController, IonSlides, Platform, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { ToastService } from 'src/app/_services/toast.service';
import { AuthService } from 'src/app/_services/auth.service';
import { finalize } from 'rxjs/operators';

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
    private authService: AuthService,
    private loadingCtrl: LoadingController,
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
      this.storeProducts = products
      products.forEach((el,value)=>{
        let plan = this.plans.filter(d => d.id == el.productId)[0]
        plan.price = el.price
        plan.description = el.description
        plan.name = el.title
      })
    })  .catch((err) => {
      this.toastService.somethingWentWrong()
    });
  }
  
  async onPlanChoosen(index){
    this.plans = this.userService.lastPlans
    let selectedPlanId = this.plans[index].id
    const loader = await this.loadingCtrl.create()
    loader.present()
    this.iap
      .buy(selectedPlanId)
      .then((data)=> {
        this.iap.consume(data.productType, data.receipt, data.signature).then(()=>{
          this.userService.finalizePayment(data)
          .pipe(finalize(()=>loader.dismiss()))
          .subscribe(data=>{
            this.authService.currentUserValue.credits = data && data['credit'] && data['credit']['credits']
            this.authService.refreshCurrentUser()
          })
        }).catch(()=>{
          loader.dismiss()
          this.toastService.somethingWentWrong()
        })
        this.modalCtrl.dismiss()
      }).catch(()=>{
        loader.dismiss()
        this.toastService.somethingWentWrong()
      })
 
    }
}
