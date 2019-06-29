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
  id : string
  chatKey: string
  constructor(
    authService: AuthService,
    private chatService: ChatService,
    private location: Location,
    private ngZone: NgZone,
    private route: ActivatedRoute) {
      console.log(authService.currentUser)
      console.log(authService.currentUserValue)
      authService.currentUser.subscribe(user=>{
        this.id = user.id
      })
  }
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.chatKey = params.get('with')
      console.log(params)
      this.chatService.connect(this.chatKey,()=>{
       this.chatService.getMessages()
       .subscribe(message => {
        this.messages.push(message);
        setTimeout(()=>{ try{ this.ngZone.run(()=> this.messagesContent.scrollToBottom(400) )}catch(ex){}});
       })
      }) 
    })
  }



  sendMessage(){
    if(this.message && this.message.length > 0){
      this.chatService.sendMessage(this.message)
      this.message = ''
    }
    
  }
 
  ionViewWillLeave() {
    this.chatService.disconnect();
  }

  getTime(date: string){
    return timeSince(date)
  }

}