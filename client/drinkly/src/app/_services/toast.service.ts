import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


const SOMETHING_WENT_WRONG = 'something_went_wrong'


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private translateService: TranslateService,
  ) { }

  async somethingWentWrong(){
    this.toastError(SOMETHING_WENT_WRONG)
  }
  async toastSuccess(key : string){
    let messageObservable = this.getStringObservableFromKey(key)
    let message = await messageObservable.toPromise()
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  async alert(key : string){
    let messageObservable = this.getStringObservableFromKey(key)
    let message = await messageObservable.toPromise()
    let toast = await this.alertCtrl.create({
      message: message,
      
    });
    toast.present();
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
  load(){
    return new Loader()
  }

}
class Loader{
  present(){
    document.querySelector('#loading-backdrop').classList.add('visibile');
    document.querySelector('#loading-backdrop').classList.remove('gone');
  }

  dismiss(){
    document.querySelector('#loading-backdrop').classList.add('gone');
    document.querySelector('#loading-backdrop').classList.remove('visible');
  }
}