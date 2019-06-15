import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


const SOMETHING_WENT_WRONG = 'something_went_wrong'


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController,
		private translateService: TranslateService,
  ) { }

  async somethingWentWrong(){
    this.toastError(SOMETHING_WENT_WRONG)
  }

  async toastError(key : string){
    let messageObservable = this.getStringObservableFromKey(key)
    let message = await messageObservable.toPromise()
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  getStringObservableFromKey(key: string){
    return this.translateService.get(key)
  }
}
