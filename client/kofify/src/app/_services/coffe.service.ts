import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { LocalizedUser, LocalizedUserMapper } from '../_models/user';
import { map, finalize } from 'rxjs/operators';
import { FILTER_PREFERENCES_KEY, QueryFilter } from '../_models/queryFilter';


const PAGINATION_LIMIT = 10
const FIND_CLOSEST_USERS_URL  = SERVICE_SERVER + '/users/me/users'
const SEND_COFFEE_INVITATION  = SERVICE_SERVER + '/invitations'
// const SINGLE_PROPOSAL_SERVICE = SERVICE_SERVER + '/api/proposal'
// const JOIN_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/join-proposal/'
// const APPROVE_REQUEST_SERVICE   = SERVICE_SERVER + '/api/approve-request'
// const DENY_REQUEST_SERVICE   = SERVICE_SERVER + '/api/deny-request'
// const BLOCK_USER_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/block-user-proposal/'

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  mLastLat
  mLastLong
  mMaxDistance
  localizedUsers: LocalizedUser[] = []
  constructor( private http: HttpClient ) {   
    
  }
  
  clearSearch(){
    this.localizedUsers.length = 0
  }

  reload(): Observable<LocalizedUser[]>{
    this.clearSearch()
    return this.moreUsersOnLastUsers()
  }
  
  sendInvitation(userIds:string[], content: string = ''){
    return this.http.post( SEND_COFFEE_INVITATION, {
      userIds : userIds,
      content: content
    })
  }
  
  
  
  findClosestUsers(mLat: number, mLong: number,  maxDistance: number = null): Observable<LocalizedUser[]>{
    this.clearSearch()
    var queryUrl = FIND_CLOSEST_USERS_URL +
    '?longitude=' + mLong +
    '&latitude='  + mLat  +
    '&limit=' + PAGINATION_LIMIT + 
    '&offset=0'+ ( maxDistance ? '&distance=' + maxDistance : "" )
    
    queryUrl = this.appendFilters(queryUrl)
    
    return this.http
    .get<any>(queryUrl)
    .pipe(map(response=> {
      this.mLastLat = mLat;
      this.mLastLong = mLong;
      this.mMaxDistance = maxDistance
      let localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
      if(localizedUsers)
      localizedUsers.map( it => this.localizedUsers.push(it) )
      return this.localizedUsers
    }))
  }
  
  userLoading = false
  moreUsersOnLastUsers(): Observable<LocalizedUser[]>{
    console.log(this.userLoading, 'moreUsers')
    if(this.userLoading) return
    var queryUrl = FIND_CLOSEST_USERS_URL +
    '?longitude='+this.mLastLong+
    '&latitude='+this.mLastLat  +
    '&limit='+ PAGINATION_LIMIT  +
    '&offset='+ ((this.localizedUsers.length ).toString() ) + 
    ( this.mMaxDistance ? '&distance=' + this.mMaxDistance : "" )
    queryUrl = this.appendFilters(queryUrl)
    console.log(queryUrl, 'queryUrl')

    this.userLoading = true
    return this.http.get<LocalizedUser[]>( queryUrl )
    .pipe(map(response=> {
      console.log('responseeee')
      let localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
      console.log(response)
      if(localizedUsers)
      localizedUsers.map( it => this.localizedUsers.push(it))
      return localizedUsers
    }))
    .pipe(finalize(() => this.userLoading = false ))
  }
  
  
  appendFilters(queryUrl:string){
    let queryFilter: QueryFilter = JSON.parse(localStorage.getItem(FILTER_PREFERENCES_KEY))
    if(queryFilter){
      if(queryFilter.enableMen && !queryFilter.enableWomen) queryUrl += '&gender=MALE'
      if(!queryFilter.enableMen && queryFilter.enableWomen) queryUrl += '&gender=FEMALE'
      if(queryFilter.onlyOnline) queryUrl += '&online=true' 
      queryUrl += `&ageMin=${queryFilter.ageRange.lower}`
      queryUrl += `&ageMax=${queryFilter.ageRange.upper}`
    }
    return queryUrl
  }      
}