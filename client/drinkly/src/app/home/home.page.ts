import { Component } from '@angular/core';
import { NativeGeocoderOptions, NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController, ToastController, LoadingController } from '@ionic/angular';
import { CoffeeService } from '../_services/coffe.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { Place } from '../autocomplete-input.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { joinWithCommaOrEmpty } from '../_utils/functions';
import { LocalizedUserMapper, LocalizedUser } from '../_models/user';
import { ToastService } from '../_services/toast.service';


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
  localizedUsers: LocalizedUser[]
  userImg:string
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
    private toastCtrl: ToastController,
    private authService: AuthService,
    private toastService: ToastService,
    private loadingCtrl : LoadingController,
    private nativeGeocoder: NativeGeocoder
    ) {
      if(this.authService.currentUserValue){
        this.userImg = this.authService.currentUserValue.profileImg
        console.log(this.authService.currentUserValue)
      }
      this.getGeolocation()
    }
    
    flipIt() {
      this.flipped = !this.flipped;
      
      if(this.flipped) this.findClosestUsers()
      
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
        this.userService.updateAddress(this.geoAddress, latitude, longitude).subscribe(data=>{
          console.log(data)
        })
      })
      .catch((error: any) => {
        console.log(error)
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
      let loader = await this.load()
      loader.present()
      this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance)
      .subscribe(response=>{
        console.log(this.geoLatitude, this.geoLongitude)
        loader.dismiss()
        this.localizedUsers = LocalizedUserMapper.fromJsonArray(response['users'])
      },error =>{
        console.log(error);
        this.toastService.somethingWentWrong()
        loader.dismiss()
      })
    }
    
    //Start location update watch
    watchLocation(){
      this.isWatching = true;
      this.watchLocationUpdates = this.geolocation.watchPosition();
      this.watchLocationUpdates.subscribe((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        this.getGeoencoder(this.geoLatitude,this.geoLongitude);
      });
    }
    
    //Stop location update watch
    stopLocationWatch(){
      this.isWatching = false;
      this.watchLocationUpdates.unsubscribe();
    }
    
    
    onRangeChanged(){
      this.getGeolocation()
    }
    
    load() {
      return this.loadingCtrl.create({
        spinner: null,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
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
    
  }
