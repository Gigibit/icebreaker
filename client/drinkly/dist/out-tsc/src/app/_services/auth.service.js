import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AUTH_SERVER } from '../config';
import { UserMapper } from '../_models/user';
import { map } from 'rxjs/operators';
var TOKEN_KEY = 'auth-token';
var REGISTER_URL = AUTH_SERVER + '/public/users';
var LOGIN_URL = AUTH_SERVER + '/oauth/token';
var LOGOUT_URL = AUTH_SERVER + '/api/logout';
var USER_INFO = AUTH_SERVER + '/users/me';
//TODO: replace localstorage with nativestorage
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authenticationState = new BehaviorSubject(false);
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.authToken = localStorage.getItem(TOKEN_KEY);
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.nativeLogin = function (email, password) {
        return this.login("username=" + email + "&password=" + password + "&grant_type=password");
    };
    AuthService.prototype.facebookLogin = function (token) {
        return this.login("access_token=" + token + "&grant_type=social&network=facebook");
    };
    AuthService.prototype.login = function (loginParams) {
        var _this = this;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA=='
            })
        };
        return this.http.post(LOGIN_URL, loginParams, httpOptions)
            .pipe(map(function (response) {
            var token = response['access_token'];
            // login successful if there's a jwt token in the response
            if (token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(TOKEN_KEY, token);
                _this.authToken = token;
            }
            return token;
        }));
    };
    AuthService.prototype.userInfo = function () {
        var _this = this;
        return this.http.get(USER_INFO)
            .pipe(map(function (response) {
            console.log('userInfo', response);
            var user = response &&
                response['context'] &&
                response['context']['user'] &&
                UserMapper.fromJson(response['context']['user']);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthService.prototype.contextRefresh = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem(TOKEN_KEY);
        this.authToken = null;
        this.currentUserSubject.next(null);
        return this.http.get(LOGOUT_URL);
    };
    AuthService.prototype.register = function (form) {
        return this.http.post(REGISTER_URL, form);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map