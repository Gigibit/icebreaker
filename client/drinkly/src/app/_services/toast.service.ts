import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController,
		private translateService: TranslateService,
  ) { }

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
