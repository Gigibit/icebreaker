import { UserMapper } from './user';
export var RequestState;
(function (RequestState) {
    RequestState["PENDING"] = "PENDING";
    RequestState["APPROVED"] = "APPROVED";
    RequestState["DENIED"] = "DENIED";
    RequestState["NOT_REQUESTED"] = "NOT_REQUESTED";
})(RequestState || (RequestState = {}));
var RequestMapper = /** @class */ (function () {
    function RequestMapper() {
    }
    RequestMapper.fromJson = function (data) {
        return data ? {
            proposalId: data['proposal_id'],
            user: UserMapper.fromJson(data['user']),
            state: data['state']
        } : null;
    };
    RequestMapper.fromJsonArray = function (data) {
        return data ? data.map(function (value) { return RequestMapper.fromJson(value); }) : [];
    };
    return RequestMapper;
}());
export { RequestMapper };
//# sourceMappingURL=request.js.map