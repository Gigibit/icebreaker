import * as moment from 'moment';
export function titleCaseWord(word) {
    if (!word)
        return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
export function timeSince(date) {
    if (date)
        return moment(date).fromNow();
    else
        return "";
}
export function removeObjectFromArray(array, obj) {
    var index = array.indexOf(obj, 0);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
export function withCommaOrEmpty(str) {
    return str && str.length > 0 ? str + ", " : "";
}
export function joinWithCommaOrEmpty() {
    var str = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        str[_i] = arguments[_i];
    }
    if (!str || str.length < 0)
        return "";
    var res = "";
    for (var i = 0; i < str.length - 1; i++)
        res += withCommaOrEmpty(str[i]);
    res += str[str.length - 1];
    return res;
}
export function getErrorForCode(code) {
    return code;
}
export function format(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var k in args) {
        str = str.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return str;
}
//# sourceMappingURL=functions.js.map