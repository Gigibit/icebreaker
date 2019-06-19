import { UserMapper } from './user';
import { RequestMapper } from './request';
import { titleCaseWord, timeSince } from '../_utils/functions';
export var PositionType;
(function (PositionType) {
    PositionType["POINT"] = "Point";
})(PositionType || (PositionType = {}));
var ProposalMapper = /** @class */ (function () {
    function ProposalMapper() {
    }
    ProposalMapper.fromJson = function (data) {
        console.log(data);
        return data ? {
            id: data['id'],
            title: titleCaseWord(data['title']),
            createdBy: data['created_by'],
            ownerInfo: UserMapper.fromJson(data['owner_info']),
            description: titleCaseWord(data['description']),
            joinRequests: RequestMapper.fromJsonArray(data['join_requests']),
            users: UserMapper.fromJsonArray(data['users']),
            position: data['position'],
            img: data['img'],
            createdAt: timeSince(data['created_at'])
        } : null;
    };
    ProposalMapper.fromJsonArray = function (data) {
        return data ? data.map(function (value) { return ProposalMapper.fromJson(value); }) : [];
    };
    return ProposalMapper;
}());
export { ProposalMapper };
//# sourceMappingURL=proposal.js.map