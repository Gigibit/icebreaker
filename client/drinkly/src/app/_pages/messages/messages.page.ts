  import { Component, OnInit } from '@angular/core';
import { Chat, ChatMapper } from 'src/app/_models/chat';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/_services/chat.service';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  chats : Chat[]
  user: User
  constructor(
    private router : Router,
    private authService : AuthService,
    private chatService : ChatService
  ) { 
    //todo: add timestamp to last message
    this.authService.currentUser.subscribe(user=>{
        this.user = user
    })
  }

  ngOnInit() {
    this.getChats()
  }
  getChats(){
    this.chatService.getChats().subscribe(response=>{
      this.chats = ChatMapper.fromJsonArray(response['chats'])
    })
  }
  goToChat(chat:Chat){
    if(chat.enabled){
      
      this.chatService.setActiveChat(chat)
      this.router.navigate(['/chat', chat.id])
    }else{
      let image = document.getElementById('chat-img-'+chat.id)
      this.chatService.unlock(chat).subscribe(_chat=>{
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
}
