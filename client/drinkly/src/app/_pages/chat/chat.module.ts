import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { ChatRoomPage } from './chat.page';
// import { SocketIoConfig, SocketIoModule } from 'ng-socket-io';
import { WEBSOCKET_SERVICE_SERVER } from '../../config';

// const config: SocketIoConfig = { url: WEBSOCKET_SERVICE_SERVER + '/', options: {} };
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // SocketIoModule.forRoot(config),

    TranslateModule.forChild(),
    RouterModule.forChild([
      {
        path: '',
        component: ChatRoomPage,
      }
    ])
  ],
  declarations: [ChatRoomPage]
})
export class ChatRoomPageModule {}
