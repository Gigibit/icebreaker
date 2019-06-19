import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { ToastController, IonContent } from '@ionic/angular';
import { ChatService } from '../../_services/chat.service';
import { Proposal } from '../../_models/proposal';
import { AuthService } from '../../_services/auth.service';
import { timeSince } from '../../_utils/functions';
import { ActivatedRoute } from "@angular/router";
import { switchMap } from 'rxjs/operators';
 
@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss']
})
export class ChatRoomPage implements OnInit{
  @ViewChild(IonContent)  messagesContent: IonContent;
  email: string
 
 /*
  _proposal: Proposal
  @Input() public set proposal (proposal: Proposal){
    this.chatService.connect(proposal)

    this.chatService.getMessages(proposal.id)    
    .subscribe(message => {
      this.messages.push(message);
      setTimeout(()=>{ try{ this.ngZone.run(()=> this.messagesContent.scrollToBottom(400) )}catch(ex){}});
    });
    this._proposal = proposal
  }
  public get proposal(){
    return this._proposal
  }
*/
  messages = [];
  name = '';
  message = '';
  chatKey: string
  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private toastCtrl: ToastController) {
      this.authService.currentUser.subscribe(user=> this.name = user.name)
  }
  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => {
        this.chatKey = params.get("with")
        return this.chatService.getMessages(this.chatKey)    
      })
    ).subscribe(message => {
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

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
  }
}
