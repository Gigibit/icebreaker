import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Platform } from '@ionic/angular';
import { SERVICE_SERVER } from '../config';

//TODO: check tokens inequality
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthService,
        private platform: Platform) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if(request.url.indexOf(SERVICE_SERVER) !== -1){
            
            let authToken = this.authenticationService.authToken;
            if (authToken) {
                let platforms = this.platform.platforms()
                request = (request as HttpRequest<any>).clone({
                    setHeaders: { 
                        'Authorization': `Bearer ${authToken}`,
                        'platforms' : platforms ? JSON.stringify(platforms) : 'not_ready_yet'
                    }
                });
            }    
        }
        return next.handle(request);
    }
}