import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Platform } from '@ionic/angular';

//TODO: check tokens inequality
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private platform: Platform) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authToken = this.authenticationService.authToken;
        if (authToken) {
            request = request.clone({
                setHeaders: { 
                    'Authorization': `Bearer ${authToken}`,
                    'platforms' : this.platform.platforms ? JSON.stringify(this.platform.platforms) : 'not_ready_yet'
                }
            });
        }
        return next.handle(request);
    }
}