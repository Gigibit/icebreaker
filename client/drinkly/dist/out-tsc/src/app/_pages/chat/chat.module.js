import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChatRoomPage } from './chat.page';
var ChatRoomPageModule = /** @class */ (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                TranslateModule.forChild(),
                RouterModule.forChild([
                    {
                        path: '',
                        component: ChatRoomPage
                    }
                ])
            ],
            declarations: [ChatRoomPage]
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());
export { ChatRoomPageModule };
//# sourceMappingURL=chat.module.js.map