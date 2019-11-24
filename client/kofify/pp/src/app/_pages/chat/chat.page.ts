import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ToastController, IonContent, ModalController } from '@ionic/angular';
import { ChatService } from '../../_services/chat.service';
import { Proposal } from '../../_models/proposal';
import { AuthService } from '../../_services/auth.service';
import { timeSince } from '../../_utils/functions';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Chat } from 'src/app/_models/chat';
import { ViewProfileComponent } from 'src/app/_pages/view-profile/view-profile.page';
 
@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatRoomPage implements OnInit{
  @ViewChild(IonContent, {static : true})  messagesContent: IonContent;
  email: string
  chat: Chat
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
    private modalCtrl: ModalController,
    private route: ActivatedRoute) {
      console.log(authService.currentUser)
      console.log(authService.currentUserValue)
      authService.currentUser.subscribe(user=>{
        this.id = user.id
      })
  }
  ngOnInit(){
    this.chat = this.chatService.getActiveChat()
    this.route.paramMap.subscribe(params=>{
      this.chatKey = params.get('with')
      this.chatService.getMessages(this.chatKey).subscribe(data=>{
        data.forEach(message=>{
          this.messages.push(message)
          this.toBottom()
        })
      })

      this.chatService.connect(this.chatKey,()=>{
       this.chatService.bindToMessages()
       .subscribe(message => {
        this.messages.push(message);
        this.toBottom()
       })
      }) 
    })
  }
  
  sendInvitation(){
    this.chatService.sendInvitation()
  }


  toBottom(){
    setTimeout(()=>{ try{ this.ngZone.run(()=> this.messagesContent.scrollToBottom(400) )}catch(ex){}});
  }

  viewProfile(id: string){
    this.modalCtrl.create({
      component: ViewProfileComponent,
      componentProps: {
        userId: id
      }
    }).then(modal => {
      modal.present();
    });
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
