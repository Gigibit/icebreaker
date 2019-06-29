import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NativeGeocoderOptions, NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { CoffeeService, CoffeeServiceMock } from '../../_services/coffe.service';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { joinWithCommaOrEmpty } from '../../_utils/functions';
import { LocalizedUserMapper, LocalizedUser, DEFAULT_USER_IMG } from '../../_models/user';
import { ToastService } from '../../_services/toast.service';
import { Router } from '@angular/router';
import { Place } from '../../_components/autocomplete/autocomplete-input.component';
import { LocalizedUsersComponent } from '../../_components/localized-users/localized-users.component';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { from } from 'rxjs';


const USE_OWN_LOCATION = 'useMyPosition'
const USE_OWN_LANGUAGE = 'useMyLanguage'



// for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  filterSelectOptions = {
    header: 'filter',
    // subHeader: 'pllllll',
    // message: '$1.00 per topping',
  };
  
  filter = [USE_OWN_LOCATION, USE_OWN_LANGUAGE]
  flipped = false
  coffeeContainerVisibilitiy = 'visibile'
  lastSelectedZone : Place
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy:number;
  geoAddress: string;
  useMyPosition = true
  useMyLanguage = true
  maxDistance = 2500
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  localizedUsers: LocalizedUser[]
  userImg:string = DEFAULT_USER_IMG
  loadClass: string = ''
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private modalController: ModalController,
    private coffeeService: CoffeeService,
    private userService: UserService,
    private geolocation: Geolocation,
    public popoverController: PopoverController,
    private ngZone: NgZone,
    private oneSignal: OneSignal,
    private router: Router,
    private renderer: Renderer,
    private authService: AuthService,
    private toastService: ToastService,
    private loadingCtrl : LoadingController,
    private nativeGeocoder: NativeGeocoder
    ) {
      this.getGeolocation()
    }
    
    
    flipIt() {
      if(!this.flipped){
        this.findClosestUsers()
      } 
      else{
        this.flipped = !this.flipped;
        this.coffeeContainerVisibilitiy = 'visibile'
      }
    }
    
    profile(){
      this.router.navigate(['user-profile'])
    }
    
    ngOnInit(){
      this.authService.userInfo().subscribe(data=>{
        console.log(data)
      })
      from(this.oneSignal.getIds()).subscribe(data=>{
        this.userService
        .subscribeToPushNotifications(data.userId ,data.pushToken)
        .subscribe()
      })
      this.authService.currentUser.subscribe(user=>{
        this.userImg = user.profileImg || DEFAULT_USER_IMG
      })
    }
    
    //Get current coordinates of device
    async getGeolocation(){
      
      this.geolocation.getCurrentPosition().then((resp) => {
        this.useMyPosition = true;
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.geoAccuracy = resp.coords.accuracy;
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      }).catch((error) => {
        this.useMyPosition = false;
        console.log(error)
      });
    }
    
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(latitude,longitude){
      this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.geoAddress = joinWithCommaOrEmpty( /* result[0].thoroughfare,*/ result[0].locality , result[0].subLocality , /* result[0].administrativeArea ,*/ result[0].countryName );
        this.userService.updateAddress(this.geoAddress, latitude, longitude).subscribe()
      })
      .catch((error: any) => {
        console.log(error)
        this.userService.updateAddress(null, latitude, longitude).subscribe()
      });
    }
    onUseMyPositionStatusChanged(){
      this.geoLatitude = null
      this.geoLongitude = null
      if(this.useMyPosition){ this.getGeolocation() }
      else if ( this.lastSelectedZone ){
        this.geoLatitude = Number.parseFloat(this.lastSelectedZone.y)
        this.geoLongitude = Number.parseFloat(this.lastSelectedZone.x) 
      }  
      
    }
    onFilterChanged(){
      let useMyPosition = this.filter.indexOf(USE_OWN_LOCATION) != -1
      this.useMyLanguage = this.filter.indexOf(USE_OWN_LANGUAGE) != -1
      if(useMyPosition != this.useMyPosition){
        this.useMyPosition = useMyPosition
        this.onUseMyPositionStatusChanged()
      }
    }
    
    onZoneSelected(zone: Place){
      this.lastSelectedZone = zone;
      this.geoLatitude = Number.parseFloat(zone.y)
      this.geoLongitude = Number.parseFloat(zone.x)
    }
    //Return Comma saperated address
    generateAddress(addressObj){
      let obj = [];
      let address = "";
      for (let key in addressObj) {
        obj.push(addressObj[key]);
      }
      obj.reverse();
      for (let val in obj) {
        if(obj[val].length)
        address += obj[val]+', ';
      }
      return address.slice(0, -2);
    }
    async findClosestUsers(){
      if(this.geoLatitude && this.geoLongitude) {
        this.loadClass = 'coffee-load'
        this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance)
        .subscribe(response=>{
          // loader.dismiss()
          this.coffeeContainerVisibilitiy = 'gone'
          this.loadClass = ''
          this.localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
          this.flipped = !this.flipped
        },error =>{
          this.loadClass = ''
          console.log(error);
          this.toastService.somethingWentWrong()
        })
      }
      else{
        this.getGeolocation()
      }
    }
    
    
    openLocalizedUsersModal(){
      console.log(this.localizedUsers)
      this.modalController.create({
        component: LocalizedUsersComponent,
        componentProps: {
          localizedUsers: this.localizedUsers
        }
      }).then(modal => {
        modal.present();
      });
    }    
    
    
    onRangeChanged(){
      this.getGeolocation()
    }
    
    // async presentPopover(ev: any, proposal: Proposal) {
    //   const popover = await this.popoverController.create({
    //     component: ProposalThreeDotsPopoverComponent,
    //     event: ev,
    //     translucent: true,
    //     componentProps:{
    //       userId : proposal.createdBy
    //     }
    //   });
    //   popover.onDidDismiss().then((hasDoneSomethingOverlay:OverlayEventDetail)=>{
    //     if(hasDoneSomethingOverlay.data){
    //       this.getGeolocation()
    //     }
    //   })
    //   return await popover.present();
    // }
    distanceInPercentage(){
      return this.maxDistance/5000*100 
    }
  }