import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template : `
  <ion-tabs >
    <ion-tab-bar slot="top">
    <ion-tab-button tab="user-profile">
      <ion-icon ios="md-contact" md="md-contact"></ion-icon>
    </ion-tab-button>
      <ion-tab-button tab="home">
        <ion-icon md="ios-cafe" ios="ios-cafe"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="messages">
      <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>
    </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>`,
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
