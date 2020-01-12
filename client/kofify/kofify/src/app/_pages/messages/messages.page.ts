  import { Component, OnInit, NgZone, OnChanges, AfterViewChecked, SimpleChanges } from '@angular/core';
import { Chat, ChatMapper } from 'src/app/_models/chat';
import { Router, NavigationStart } from '@angular/router';
import { ChatService } from 'src/app/_services/chat.service';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { Subscription } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit{
  private chatSubscription : Subscription
  chats : Chat[]
  user: User
  constructor(
    private router : Router,
    private authService : AuthService,
    private loadCtrl: LoadingController,
    private chatService : ChatService,
    private zone: NgZone,
  ) { 
    this.chatService.notificationCount.next(0)
    this.authService.currentUser.subscribe(user=>{
        this.user = user
    })
  }

  ngOnInit(){
    // let imgs = document.getElementsByClassName('user-img')
    // for(var index = 0; index < imgs.length; index++) {
    //   const element = imgs[index];
    //   element.classList.remove('imgLoaded')
    //   element.classList.add('imgInLoading')
    // }
    this.getChats()
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route) =>this.getChats());
    this.chatService.updateChatSubject.subscribe((e)=>this.getChats())
  }

  getChats(){
    if(this.chatSubscription != null) this.chatSubscription.unsubscribe()
    this.chatSubscription = this.chatService.getChats().subscribe(response=>{
      this.zone.run(()=> this.chats = ChatMapper.fromJsonArray(response['chats']))
    })
  }
  async goToChat(chat:Chat){
    if(chat.enabled){
      this.chatService.setActiveChat(chat)
      this.router.navigate(['/chat', chat.id])
    }else{
      let image = document.getElementById('chat-img-'+chat.id)
      let loader = await this.loadCtrl.create()
      loader.present()
      this.chatService.unlock(chat)
      .pipe(finalize(()=> loader.dismiss()))
      .subscribe(_chat=>{
        image.classList.remove('user-message-img-show')
        image.classList.add('user-message-img-hide')
        chat.img = _chat.img
        chat.enabled = _chat.enabled

        setTimeout(()=>{
          image.classList.add('user-message-img-show')
          image.classList.remove('user-message-img-hide')
          this.chatService.setActiveChat(chat)
          this.router.navigate(['/chat', chat.id])
        }, 1000)
      })
    }
    

  }
  loadImg($event){
    // this.zone.run(()=>{
    //   $event.target.classList.remove('imgInLoading')
    //   $event.target.classList.add('imgLoaded')
    // })
  }


  ngOnDestroy() {
    // always unsubscribe your subscriptions to prevent leaks
    this.chatSubscription.unsubscribe();
  }
}
