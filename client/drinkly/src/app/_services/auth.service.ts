import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { BehaviorSubject, Observable, of } from  'rxjs';
import { Storage } from  '@ionic/storage';
import { Platform } from '@ionic/angular';
import { AUTH_SERVER } from '../config';
import { User, UserMapper } from '../_models/user';
import { map } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';

const REGISTER_URL = AUTH_SERVER + '/public/users'
const LOGIN_URL = AUTH_SERVER + '/oauth/token'
const LOGOUT_URL = AUTH_SERVER + '/api/logout'
const USER_INFO = AUTH_SERVER + '/users/me'

//TODO: replace localstorage with nativestorage
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken : string
  authenticationState = new BehaviorSubject(false);
  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.authToken = localStorage.getItem(TOKEN_KEY)
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  nativeLogin(email: string, password: string) {
    return this.login(`username=${email}&password=${password}&grant_type=password`)
  }
  facebookLogin(token: string){
    return this.login(`access_token=${token}&grant_type=social&network=facebook`)
  }
  
  
  login (loginParams: any) : Observable<String>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization' : 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA=='
      })
    };
    return this.http.post<string>(LOGIN_URL, loginParams, httpOptions)
    .pipe(map(response => {
      let token = response['access_token']
      // login successful if there's a jwt token in the response
      if (token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(TOKEN_KEY, token);
        
        this.authToken = token;
      }
      return token;
    }));
  }
  
  userInfo(): Observable<User>{
    return this.http.get<User>(USER_INFO)
    .pipe(map(response=>{
      
      let user = response && 
                  response['context'] && 
                  response['context']['user'] && 
                  UserMapper.fromJson(response['context']['user']['user'])
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }))
    
  }
  
  
  
  
  contextRefresh(user:User){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem(TOKEN_KEY);
    this.authToken = null;
    this.currentUserSubject.next(null);
    return this.http.get(LOGOUT_URL)
  }
  
  register(form){
    return this.http.post(REGISTER_URL, form)
  }
  
  
  isAuthenticated() {
    return this.authenticationState.value;
  }
}
