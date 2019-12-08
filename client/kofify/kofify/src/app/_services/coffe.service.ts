import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { LocalizedUser, LocalizedUserMapper } from '../_models/user';
import { map, finalize } from 'rxjs/operators';


const PAGINATION_LIMIT = 6
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
  constructor(
    private http: HttpClient
    ) {   }
    
    
    sendInvitation(userIds:string[], content: string = ''){
      return this.http.post( SEND_COFFEE_INVITATION, {
        userIds : userIds,
        content: content
      })
    }
    
    
    
    findClosestUsers(mLat: number, mLong: number,  maxDistance: number = null): Observable<LocalizedUser[]>{
      return this.http.get<any>(FIND_CLOSEST_USERS_URL +
        '?longitude='+mLong+
        '&latitude='+mLat  +
        '&limit=' + PAGINATION_LIMIT + 
        '&offset=0'+
        ( maxDistance ? '&distance=' + maxDistance : "" ) )
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
        if(this.userLoading) return
        this.userLoading = true
        console.log('calling...')
        return this.http.get<LocalizedUser[]>(FIND_CLOSEST_USERS_URL +
          '?longitude='+this.mLastLong+
          '&latitude='+this.mLastLat  +
          '&limit='+ PAGINATION_LIMIT  +
          '&offset='+ ((this.localizedUsers.length ).toString() ) + 
          ( this.mMaxDistance ? '&distance=' + this.mMaxDistance : "" ) )
          .pipe(map(response=> {
            let localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
            if(localizedUsers)
            localizedUsers.map( it => this.localizedUsers.push(it))
            return localizedUsers
          }))
          .pipe(finalize(() => this.userLoading = false ))
        }
        
      }
      
      
      @Injectable({
        providedIn: 'root'
      })
      export class CoffeeServiceMock{
        constructor(
          private http: HttpClient
          ) {   }
          
          findClosestUsers(mLat: number, mLong: number,  maxDistance: number = null): Observable<any>{
            return of({
              'users':[{
                'distance' : 500,
                'user': {
                  'firstName' : 'Johnny',
                  'lastName' : 'Snow',
                  'imageUrl' : 'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/4f2eb5b3-2ed8-4ef0-b083-1e37de1b49bb/jon-snow-14-1200x630.jpg'
                }
              },
              {
                'distance' : 500,
                'user': {
                  'firstName' : 'Lindsey',
                  'lastName' : 'Pelas',
                  'imageUrl' : 'https://i.ytimg.com/vi/RMjSaQNJqHE/maxresdefault.jpg'
                }
              },
              {
                'distance' : 500,
                'user': {
                  'firstName' : 'Leone',
                  'lastName' : 'Di Lernia',
                  'imageUrl' : 'http://res.cloudinary.com/db1veme1i/image/upload/h_320,w_320/v1490204185/Leone_ck4sm4.jpg'
                }
              }]
            })
          }
          
        }
        