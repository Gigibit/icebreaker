import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { LocalizedUser, LocalizedUserMapper } from '../_models/user';
import { map } from 'rxjs/operators';

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
  localizedUsers: LocalizedUser[]
  constructor(
    private http: HttpClient
    ) {   }
    
    
    // createProposal(proposal: Proposal): Observable<any>{
    
    //   let proposalMap = proposal
    //   proposalMap['accept_all_request'] = proposal.useOwnerPhoto
    //   proposalMap['use_owner_photo'] = proposal.autoAcceptRequest
    
    //   return this.http.post(PROPOSALS_CRUD_SERVICE, proposal)
    // }
    
    
    sendInvitation(userIds:string[], content: string = ''){
      return this.http.post( SEND_COFFEE_INVITATION, {
        userIds : userIds,
        content: content
      })
    }
    
    
    // getProposalDetail(id: string){
    //   // return of({
    //   //   title: "odnafoina",
    //   //   description: "oidnaoidncoianc",
    //   //   users: []
    //   // })
    //   return this.http.get( SINGLE_PROPOSAL_SERVICE + '/' + id)
    // }
    
    // join(id : string){
    //   return this.http.post( JOIN_PROPOSAL_SERVICE + id , {})
    // }
    
    // approveRequest(proposalId: string, userToApproveId: string){
    //   return this.http.post( APPROVE_REQUEST_SERVICE , {
    //     'user_to_approve' : userToApproveId,
    //     'proposal_id' : proposalId
    //   })
    // }
    // denyRequest(proposalId: string, userToApproveId: string){
    //   return this.http.post( DENY_REQUEST_SERVICE , {
    //     'user_to_approve' : userToApproveId,
    //     'proposal_id' : proposalId
    //   })
    // }
    // blockUser(userId: string ){
    //   return this.http.post( BLOCK_USER_PROPOSAL_SERVICE + userId , { })
    // }
    
    findClosestUsers(mLat: number, mLong: number,  maxDistance: number = null): Observable<LocalizedUser[]>{
      return this.http.get<any>(FIND_CLOSEST_USERS_URL +
        '?longitude='+mLong+
        '&latitude='+mLat  +
        ( maxDistance ? '&distance=' + maxDistance : "" ) )
        .pipe(map(response=> {
          this.mLastLat = mLat;
          this.mLastLong = mLong;
          this.mMaxDistance = maxDistance
          this.localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
          return this.localizedUsers
        }))
    }
    moreUsersOnLastUsers(): Observable<LocalizedUser[]>{
      return this.http.get<LocalizedUser[]>(FIND_CLOSEST_USERS_URL +
        '?longitude='+this.mLastLong+
        '&latitude='+this.mLastLat  +
        '&offset='+ ((this.localizedUsers.length + 5).toString() ) + 
        ( this.mMaxDistance ? '&distance=' + this.mMaxDistance : "" ) )
        .pipe(map(response=> {
          let localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
          if(localizedUsers)
            localizedUsers.map( it => this.localizedUsers.push(it) )
          return localizedUsers
        }))
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
