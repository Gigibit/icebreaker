import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import { AuthService } from '../_services/auth.service';
import { ModalController } from '@ionic/angular';
import { SelectPlanComponent } from '../_components/select-plan/select-plan.component';
import { UserService } from '../_services/user.service';
import { PricingPlanMapper } from '../_models/pricing-plan';

const NOT_ACCETTABLE    = 406
const UNAUTHORIZED      = 401


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private userService: UserService,
        private modalCtrl: ModalController
        ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === UNAUTHORIZED) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout().pipe(finalize(()=>{
                    location.reload(true);
                })).subscribe()
            }
            if (err.status === NOT_ACCETTABLE) {
                let plans = err.body
                if(plans && plans['products']){
                    this.userService.setPlans(PricingPlanMapper.fromJsonArray(plans))
                    this.modalCtrl.create({
                        cssClass: 'plans-modal',
                        component: SelectPlanComponent
                      }).then(modal => {
                        modal.present();
                      });
                }
            }
            const error = (err.error ? err.error.message: '') || err.statusText;
            
            return throwError(error);
        }))
    }
}