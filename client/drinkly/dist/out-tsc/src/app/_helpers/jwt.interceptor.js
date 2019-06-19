import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
//TODO: check tokens inequality
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var authToken = this.authenticationService.authToken;
        if (authToken) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + authToken
                }
            });
        }
        console.log(request);
        return next.handle(request);
    };
    JwtInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], JwtInterceptor);
    return JwtInterceptor;
}());
export { JwtInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map