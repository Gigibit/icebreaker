import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ToastController, IonContent } from '@ionic/angular';
import { ChatService } from '../../_services/chat.service';
import { Proposal } from '../../_models/proposal';
import { AuthService } from '../../_services/auth.service';
import { timeSince } from '../../_utils/functions';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatRoomPage implements OnInit{
  @ViewChild(IonContent)  messagesContent: IonContent;
  email: string

  messages = [];
  name = '';
  message = '';
  chatKey: string
  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private location: Location,
    private ngZone: NgZone,
    private route: ActivatedRoute) {
      this.authService.currentUser.subscribe(user=> this.name = user.name)
  }
  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => {
        this.chatKey = params.get("with")
        this.chatService.connect(this.chatKey)
        return this.chatService.getMessages(this.chatKey)    
      })
    ).subscribe(message => {
      console.log(message)
      this.messages.push(message);
      setTimeout(()=>{ try{ this.ngZone.run(()=> this.messagesContent.scrollToBottom(400) )}catch(ex){}});
    });
  }



  sendMessage(){
    if(this.chatKey)
    this.chatService.sendMessage(this.message, this.chatKey).subscribe(data => {
        console.log(data)
    });
    this.message = '';
  }
 
  ionViewWillLeave() {
    this.chatService.disconnect();
  }

  getTime(date: string){
    return timeSince(date)
  }

}
