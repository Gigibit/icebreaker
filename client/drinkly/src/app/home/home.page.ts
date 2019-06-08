import { Component } from '@angular/core';
import { NativeGeocoderOptions, NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { ProposalService } from '../_services/proposal.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { Place } from '../autocomplete-input.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';


const USE_OWN_LOCATION = 'useMyPosition'
const USE_OWN_LANGUAGE = 'useMyLanguage'
// for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filterSelectOptions = {
    header: 'filter',
    // subHeader: 'pllllll',
    // message: '$1.00 per topping',
  };

  filter = [USE_OWN_LOCATION, USE_OWN_LANGUAGE]
  flipped = false

  lastSelectedZone : Place
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
  useMyPosition = true
  useMyLanguage = true
  maxDistance = 5000
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  userImg:string
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private modalController: ModalController,
    private proposalService: ProposalService,
    private userService: UserService,
    private geolocation: Geolocation,
    public popoverController: PopoverController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private loadingCtrl : LoadingController,
    private nativeGeocoder: NativeGeocoder
  ) {
    console.log('this.authService.currentUserValue')
    this.userImg = this.authService.currentUserValue.profileImg
    console.log(this.authService.currentUserValue)
  }
 
  flipIt() {
    this.flipped = !this.flipped;
  }
}
