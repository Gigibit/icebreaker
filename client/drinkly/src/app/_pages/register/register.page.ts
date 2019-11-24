import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Location } from '@angular/common';
import { languages, getLanguageByPrefix } from '../../_datasources/languages';
import { IonSelect, IonDatetime } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { getAppFormatDate } from 'src/app/_utils/functions';
import { ToastService } from 'src/app/_services/toast.service';

const BIRTHDAY_REQUIRED_KEY = 'birthday_required'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('languageSelect') selectRef: IonSelect;
  @ViewChild('bdayPicker') bdayPicker: IonDatetime;
  languages = languages
  language : string
  birthday: string
  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private toastService: ToastService,
    private location: Location) { 
      translateService.get(getLanguageByPrefix(this.translateService.getBrowserLang()))
      .subscribe( result=>this.language = result )
    }
    ngOnInit() {
      
    }
    
    updateBirtday(){
      this.birthday = getAppFormatDate(this.bdayPicker.value);
    }
    register(form) {
      if(!this.birthday){
        this.toastService.toastError(BIRTHDAY_REQUIRED_KEY)
        return;
      }
      form.value['birthday'] = this.birthday
      this.authService
      .register(form.value)
      .subscribe(data=>{
        this.location.back()
      })
    }
  }