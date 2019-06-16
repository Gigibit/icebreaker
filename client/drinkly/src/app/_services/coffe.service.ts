import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { LocalizedUser } from '../_models/user';

const FIND_CLOSEST_USERS_URL  = SERVICE_SERVER + '/users/me/users'
// const SINGLE_PROPOSAL_SERVICE = SERVICE_SERVER + '/api/proposal'
// const JOIN_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/join-proposal/'
// const APPROVE_REQUEST_SERVICE   = SERVICE_SERVER + '/api/approve-request'
// const DENY_REQUEST_SERVICE   = SERVICE_SERVER + '/api/deny-request'
// const BLOCK_USER_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/block-user-proposal/'

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(
    private http: HttpClient
    ) {   }

           
  // createProposal(proposal: Proposal): Observable<any>{

  //   let proposalMap = proposal
  //   proposalMap['accept_all_request'] = proposal.useOwnerPhoto
  //   proposalMap['use_owner_photo'] = proposal.autoAcceptRequest

  //   return this.http.post(PROPOSALS_CRUD_SERVICE, proposal)
  // }


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
          'profileImg' : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwigz4G_qOziAhUKLlAKHVveDrAQjRx6BAgBEAU&url=https%3A%2F%2Fgameofthrones.fandom.com%2Fwiki%2FJon_Snow&psig=AOvVaw0JW78dzeXCQ0Rn_4qBOsAp&ust=1560716585358654'
        }
      },
      {
        'distance' : 500,
        'user': {
          'firstName' : 'Lindsey',
          'lastName' : 'Pelas',
          'profileImg' : 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.thesun.co.uk%2Fwp-content%2Fuploads%2F2017%2F04%2Finstagram.png&imgrefurl=https%3A%2F%2Fwww.thesun.co.uk%2Ftvandshowbiz%2F3232924%2Fcalum-bests-girlfriend-lindsey-pelas-reveals-theyve-not-seen-each-other-in-weeks-as-their-romance-continues-at-slow-pace%2F&docid=wMEBDa4aOfZXIM&tbnid=cCzNGMdKTSY2WM%3A&vet=10ahUKEwj5x7XWqOziAhX5QRUIHV0BBeAQMwhRKAEwAQ..i&w=593&h=594&bih=627&biw=1110&q=lindsey%20pela&ved=0ahUKEwj5x7XWqOziAhX5QRUIHV0BBeAQMwhRKAEwAQ&iact=mrc&uact=8'
        }
      }]
    })
  }

}
