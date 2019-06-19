import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ng-socket-io';
import { HttpClient } from '@angular/common/http';
import { SERVICE_SERVER } from '../config';
import { MessageMapper } from '../_models/message';
var KEY = '%KEY%';
var MESSAGE_API_URL = SERVICE_SERVER + ("/chats/" + KEY + "/lines");
var GET_CHATS_API_URL = SERVICE_SERVER + '/users/me/chats';
var RECEIVE_ENDPOINT = SERVICE_SERVER + ("/chat/" + KEY + "/receive");
var SEND_ENDPOINT = SERVICE_SERVER + ("/chat/" + KEY + "/send");
var ChatService = /** @class */ (function () {
    function ChatService(socket, http) {
        this.socket = socket;
        this.http = http;
    }
    ChatService.prototype.connect = function (key) {
        if (key) {
            this.key = key;
            this.socket.connect();
        }
    };
    ChatService.prototype.sendMessage = function (msg) {
        this.socket.emit(SEND_ENDPOINT.replace(KEY, this.key), msg);
    };
    ChatService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.http.get(MESSAGE_API_URL.replace(KEY, _this.key)).subscribe(function (response) {
                MessageMapper.fromJsonArray(response['chatLines']).forEach(function (message) {
                    observer.next(message);
                });
                _this.socket.on('message', function (data) {
                    observer.next(data);
                });
            });
        });
        return observable;
    };
    ChatService.prototype.getUsers = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatService.prototype.getChats = function () {
        return this.http.get(GET_CHATS_API_URL);
    };
    ChatService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Socket,
            HttpClient])
    ], ChatService);
    return ChatService;
}());
export { ChatService };
function keyNotVoid() {
    return function (target) {
    };
}
//# sourceMappingURL=chat.service.js.map