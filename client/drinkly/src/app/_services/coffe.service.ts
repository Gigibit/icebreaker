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
    return this.http.get<LocalizedUser[]>(FIND_CLOSEST_USERS_URL +
                      '?longitude='+mLong+
                      '&latitude='+mLat  +
                      ( maxDistance ? '&distance=' + maxDistance : "" ) )
  }

}
