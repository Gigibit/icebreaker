import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../_services/coffe.service';
import { ChatService } from '../_services/chat.service';

@Component({
  selector: 'app-tabs',
  template : `
  <ion-tabs >
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="user-profile">
        <ion-icon ios="md-contact" md="md-contact"></ion-icon>
      </ion-tab-button>
        <ion-tab-button tab="home">
          <ion-icon md="ios-cafe" ios="ios-cafe"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="messages">
        <ion-badge *ngIf="notificationCount>0" class="notification-tab-badge">{{notificationCount}}</ion-badge>
        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>`,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  notificationCount = 0
  constructor(
    chatService: ChatService
  ) {
      chatService.notificationCount.subscribe(count=>this.notificationCount = count)
      chatService.getNotificationCount()
    }

  ngOnInit() {
  }

}
