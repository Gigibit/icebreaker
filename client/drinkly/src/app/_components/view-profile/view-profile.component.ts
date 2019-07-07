import { Component, OnInit } from '@angular/core';
import { User, UserMapper, LocalizedUser } from 'src/app/_models/user';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from 'src/app/_services/user.service';
import { TranslateService } from '@ngx-translate/core';

const OF_DISTANCE_KEY = "of_distance"

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
    private userService: UserService,
    private translateService: TranslateService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    const localizedUser = this.navParams.get('localizedUser') as LocalizedUser;
    this.getFormattedDistance(localizedUser)
    this.userService.getUserById(localizedUser.user.id).subscribe(response=>{
      this.user = UserMapper.fromJson(response['user'])
      console.log(this.user)
    })
  }
  getFormattedDistance(localizedUser: LocalizedUser){
    const distance = localizedUser.distance
    this.translateService.get(OF_DISTANCE_KEY).subscribe(value=>{
      this.distance = distance ? 
                      distance > 1000  ? `${Math.round(distance/10) / 100} km ${value}` : 
                      `${distance} m ${value}` : ''
    })
    
  }



  dismiss(){
    this.modalCtrl.dismiss()
  }

}
