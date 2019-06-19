export var DEFAULT_USER_IMG = '../../assets/imgs/user.svg';
export var LoginType;
(function (LoginType) {
    LoginType[LoginType["NATIVE"] = 0] = "NATIVE";
    LoginType[LoginType["FACEBOOK"] = 1] = "FACEBOOK";
})(LoginType || (LoginType = {}));
var LocalizedUserMapper = /** @class */ (function () {
    function LocalizedUserMapper() {
    }
    LocalizedUserMapper.fromJson = function (data) {
        return {
            address: data['address'],
            distance: data['distance'],
            user: {
                name: data['firstName'] + ' ' + data['lastName'],
                profileImg: data['imageUrl'] ? (data['imageUrl'] + '?' + new Date().getTime()) : DEFAULT_USER_IMG,
            }
        };
    };
    LocalizedUserMapper.fromJsonArray = function (data) {
        return data ? data.map(function (user) { return LocalizedUserMapper.fromJson(user); }) : [];
    };
    return LocalizedUserMapper;
}());
export { LocalizedUserMapper };
var UserMapper = /** @class */ (function () {
    function UserMapper() {
    }
    UserMapper.fromJson = function (data) {
        return data ? {
            name: data['user']['firstName'] + ' ' + data['user']['lastName'],
            age: data['age'],
            id: data['id'],
            profileImg: data['user'] && data['user']['imageUrl'] ? (data['user']['imageUrl'] + '?' + new Date().getTime()) : DEFAULT_USER_IMG,
            description: data['description'],
            iLike: data['has_propsed'],
            images: data['images'],
            props: data['props'],
            address: data['address'],
            token: data['token']
        } : null;
    };
    UserMapper.fromJsonArray = function (data) {
        return data ? data.map(function (user) { return UserMapper.fromJson(user); }) : [];
    };
    return UserMapper;
}());
export { UserMapper };
//# sourceMappingURL=user.js.map