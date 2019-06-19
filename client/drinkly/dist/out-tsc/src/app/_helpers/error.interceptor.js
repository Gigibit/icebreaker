import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../_services/auth.service';
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(catchError(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            console.log(err);
            var error = (err.error ? err.error.message : '') || err.statusText;
            return throwError(error);
        }));
    };
    ErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map