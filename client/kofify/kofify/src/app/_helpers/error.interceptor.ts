import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


import { AuthService } from '../_services/auth.service';
import { ModalController } from '@ionic/angular';
import { SelectPlanComponent } from '../_components/select-plan/select-plan.component';

const NOT_ACCETTABLE    = 406
const UNAUTHORIZED      = 401


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private modalCtrl: ModalController
        ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === UNAUTHORIZED) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            if (err.status === NOT_ACCETTABLE) {
                let plans = err.body
                this.modalCtrl.create({
                    cssClass: 'plans-modal',
                    component: SelectPlanComponent,
                    componentProps: {
                        plans: plans
                      }
                  }).then(modal => {
                    modal.present();
                  });
            }


            console.log(err)
            const error = (err.error ? err.error.message: '') || err.statusText;
            
            return throwError(error);
        }))
    }
}