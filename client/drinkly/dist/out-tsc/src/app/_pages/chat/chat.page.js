import * as tslib_1 from "tslib";
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatService } from '../../_services/chat.service';
import { AuthService } from '../../_services/auth.service';
import { timeSince } from '../../_utils/functions';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
var ChatRoomPage = /** @class */ (function () {
    function ChatRoomPage(authService, chatService, location, ngZone, route) {
        var _this = this;
        this.authService = authService;
        this.chatService = chatService;
        this.location = location;
        this.ngZone = ngZone;
        this.route = route;
        this.messages = [];
        this.name = '';
        this.message = '';
        this.authService.currentUser.subscribe(function (user) { return _this.name = user.name; });
    }
    ChatRoomPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(switchMap(function (params) {
            _this.chatKey = params.get("with");
            _this.chatService.connect(_this.chatKey);
            return _this.chatService.getMessages();
        })).subscribe(function (message) {
            console.log(message);
            _this.messages.push(message);
            setTimeout(function () { try {
                _this.ngZone.run(function () { return _this.messagesContent.scrollToBottom(400); });
            }
            catch (ex) { } });
        });
    };
    ChatRoomPage.prototype.sendMessage = function () {
        if (this.chatKey)
            this.chatService.sendMessage(this.message);
        this.message = '';
    };
    ChatRoomPage.prototype.ionViewWillLeave = function () {
        this.chatService.disconnect();
    };
    ChatRoomPage.prototype.getTime = function (date) {
        return timeSince(date);
    };
    tslib_1.__decorate([
        ViewChild(IonContent),
        tslib_1.__metadata("design:type", IonContent)
    ], ChatRoomPage.prototype, "messagesContent", void 0);
    ChatRoomPage = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: 'chat.page.html',
            styleUrls: ['chat.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            ChatService,
            Location,
            NgZone,
            ActivatedRoute])
    ], ChatRoomPage);
    return ChatRoomPage;
}());
export { ChatRoomPage };
//# sourceMappingURL=chat.page.js.map