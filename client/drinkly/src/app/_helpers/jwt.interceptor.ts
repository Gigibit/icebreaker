import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

//TODO: check tokens inequality
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authToken = this.authenticationService.authToken;
        if (authToken) {
            request = request.clone({
                setHeaders: { 
                    'Authorization': `Bearer ${authToken}`
                }
            });
        }
        console.log(request)
        return next.handle(request);
    }
}