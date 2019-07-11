import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LocalizedUser } from 'src/app/_models/user';
import { CoffeeService } from 'src/app/_services/coffe.service';
import { ToastService } from 'src/app/_services/toast.service';
import { ChatService } from 'src/app/_services/chat.service';
import { Router } from '@angular/router';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { ChatMapper } from 'src/app/_models/chat';

const INVITATION_SENT = 'invitation_sent'

@Component({
  selector: 'app-localized-users',
  templateUrl: './localized-users.component.html',
  styleUrls: ['./localized-users.component.scss'],
})
export class LocalizedUsersComponent implements OnInit {
  localizedUsers : LocalizedUser[]
  constructor(
    private coffeeService: CoffeeService,
    private toastService : ToastService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private router: Router,
    private chatService : ChatService
  ) { }

  ngOnInit() {
    this.localizedUsers = this.navParams.get('localizedUsers');
    console.log(this.localizedUsers)
  }
  close(){
    this.modalCtrl.dismiss()
  }
  invite(user: LocalizedUser){
    this.coffeeService
        .sendInvitation([user.user.id])
        .subscribe(response=>{
          this.toastService.alert( INVITATION_SENT )
        })
  }

  chatWith(user:LocalizedUser){
    this.chatService
    .findOrCreate([user.user.id])
    .subscribe(data=>{
      let chat = ChatMapper.fromJson(data['chat'])
      this.chatService.setActiveChat(chat)
      this.router.navigate(['/chat', chat.id]).then( e => this.modalCtrl.dismiss())
    })
  }
  viewProfile(localizedUser: LocalizedUser){
    this.modalCtrl.create({
      component: ViewProfileComponent,
      componentProps: {
        userId: localizedUser.user.id
      }
    }).then(modal => {
      modal.present();
    });
  }
}
