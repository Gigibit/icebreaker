import { DEFAULT_USER_IMG } from './user';
var MessageMapper = /** @class */ (function () {
    function MessageMapper() {
    }
    MessageMapper.fromJson = function (data) {
        return {
            id: data['id'],
            user: {
                name: data['user'] && (data['user']['firstName'] + ' ' + data['user']['lastName']),
                profileImg: (data['user'] &&
                    (data['user']['imageUrl'] &&
                        (data['imageUrl'] + '?' + new Date().getTime())))
                    || DEFAULT_USER_IMG
            },
            content: data['content'],
            createdAt: data['createdAt']
        };
    };
    MessageMapper.fromJsonArray = function (data) {
        var _this = this;
        return data &&
            data.map(function (message) { return _this.fromJson(message); });
    };
    return MessageMapper;
}());
export { MessageMapper };
//# sourceMappingURL=message.js.map