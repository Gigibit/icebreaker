import { Component, OnInit } from '@angular/core';
import { User, UserMapper, LocalizedUser } from 'src/app/_models/user';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ChatService } from 'src/app/_services/chat.service';
import { CoffeeService } from 'src/app/_services/coffe.service';
import { ToastService } from 'src/app/_services/toast.service';
import { ChatMapper } from 'src/app/_models/chat';
import { Router } from '@angular/router';

const OF_DISTANCE_KEY = "of_distance"
const INVITATION_SENT = 'invitation_sent'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  user: User
  distance: string
   // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
   slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(
    private modalCtrl:ModalController,
    private chatService: ChatService,
    private coffeeService: CoffeeService,
    private toastService: ToastService,
    private userService: UserService,
    private router: Router,
    private translateService: TranslateService,
    private navParams: NavParams
  ) { }

  ngOnInit() {

    const id = this.navParams.get('userId'); 
    this.userService.getUserById(id).subscribe(response=>{
      this.user = UserMapper.fromJson(response['user'])
      console.log(response)
      if(response['user']['distance'])
        this.getFormattedDistance(response['user']['distance'])
      console.log(this.user)
    })
  }
  getFormattedDistance(distance: number){
    this.translateService.get(OF_DISTANCE_KEY).subscribe(value=>{
      this.distance = distance ? 
                      distance > 1000  ? `${Math.round(distance/10) / 100} km ${value}` : 
                      `${distance} m ${value}` : ''
    })
    
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
    })
  }


  dismiss(){
    this.modalCtrl.dismiss()
  }

}
