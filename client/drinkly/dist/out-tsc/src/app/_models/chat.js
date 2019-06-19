import { LocalizedUserMapper } from './user';
import { MessageMapper } from './message';
var ChatMapper = /** @class */ (function () {
    function ChatMapper() {
    }
    ChatMapper.fromJson = function (data) {
        var users = LocalizedUserMapper.fromJsonArray(data['users']);
        return {
            id: data['id'],
            lastMessage: MessageMapper.fromJson(data['lastMessage']),
            users: users,
            img: users[0].user.profileImg,
            name: users[0].user.name
        };
    };
    ChatMapper.fromJsonArray = function (data) {
        return data &&
            data.map(function (chat) { return ChatMapper.fromJson(chat); });
    };
    return ChatMapper;
}());
export { ChatMapper };
//# sourceMappingURL=chat.js.map