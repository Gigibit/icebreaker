import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
var FIND_CLOSEST_USERS_URL = SERVICE_SERVER + '/users/me/users';
// const SINGLE_PROPOSAL_SERVICE = SERVICE_SERVER + '/api/proposal'
// const JOIN_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/join-proposal/'
// const APPROVE_REQUEST_SERVICE   = SERVICE_SERVER + '/api/approve-request'
// const DENY_REQUEST_SERVICE   = SERVICE_SERVER + '/api/deny-request'
// const BLOCK_USER_PROPOSAL_SERVICE   = SERVICE_SERVER + '/api/block-user-proposal/'
var CoffeeService = /** @class */ (function () {
    function CoffeeService(http) {
        this.http = http;
    }
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
    CoffeeService.prototype.findClosestUsers = function (mLat, mLong, maxDistance) {
        if (maxDistance === void 0) { maxDistance = null; }
        return this.http.get(FIND_CLOSEST_USERS_URL +
            '?longitude=' + mLong +
            '&latitude=' + mLat +
            (maxDistance ? '&distance=' + maxDistance : ""));
    };
    CoffeeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CoffeeService);
    return CoffeeService;
}());
export { CoffeeService };
var CoffeeServiceMock = /** @class */ (function () {
    function CoffeeServiceMock(http) {
        this.http = http;
    }
    CoffeeServiceMock.prototype.findClosestUsers = function (mLat, mLong, maxDistance) {
        if (maxDistance === void 0) { maxDistance = null; }
        return of({
            'users': [{
                    'distance': 500,
                    'user': {
                        'firstName': 'Johnny',
                        'lastName': 'Snow',
                        'imageUrl': 'https://cc-media-foxit.fichub.com/image/fox-it-mondofox/4f2eb5b3-2ed8-4ef0-b083-1e37de1b49bb/jon-snow-14-1200x630.jpg'
                    }
                },
                {
                    'distance': 500,
                    'user': {
                        'firstName': 'Lindsey',
                        'lastName': 'Pelas',
                        'imageUrl': 'https://i.ytimg.com/vi/RMjSaQNJqHE/maxresdefault.jpg'
                    }
                },
                {
                    'distance': 500,
                    'user': {
                        'firstName': 'Leone',
                        'lastName': 'Di Lernia',
                        'imageUrl': 'http://res.cloudinary.com/db1veme1i/image/upload/h_320,w_320/v1490204185/Leone_ck4sm4.jpg'
                    }
                }]
        });
    };
    CoffeeServiceMock = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CoffeeServiceMock);
    return CoffeeServiceMock;
}());
export { CoffeeServiceMock };
//# sourceMappingURL=coffe.service.js.map