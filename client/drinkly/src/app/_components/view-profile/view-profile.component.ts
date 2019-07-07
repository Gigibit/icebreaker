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

    const id = this.navParams.get('userId'); 
    this.userService.getUserById(id).subscribe(response=>{
      this.user = UserMapper.fromJson(response['user'])
      if(response['distance'])
        this.getFormattedDistance(response['distance'])
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



  dismiss(){
    this.modalCtrl.dismiss()
  }

}
