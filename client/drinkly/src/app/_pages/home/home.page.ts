import { Component, OnInit, NgZone,  Renderer, OnDestroy } from '@angular/core';
import { NativeGeocoderOptions, NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { CoffeeService } from '../../_services/coffe.service';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { joinWithCommaOrEmpty } from '../../_utils/functions';
import { ToastService } from '../../_services/toast.service';
import { Router, NavigationEnd } from '@angular/router';
import { Place } from '../../_components/autocomplete/autocomplete-input.component';
import { LocalizedUsersComponent } from '../localized-users/localized-users.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { from, Subscription } from 'rxjs';
import { promptEnter } from 'src/app/_animations/promptEnter';
import { promptExit } from 'src/app/_animations/promptExit';
import { OnEnter } from '../../_helpers/on-enter.interface'

const USE_OWN_LOCATION = 'useMyPosition'
const USE_OWN_LANGUAGE = 'useMyLanguage'
const ENABLE_LOCALIZATION_KEY = 'enable_localization'


// for integrate maps https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnEnter, OnDestroy {
  
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
  private navSubscription: Subscription;
  userImg:string
  loadClass: string = ''
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(
    private coffeeService: CoffeeService,
    private userService: UserService,
    private geolocation: Geolocation,
    public popoverController: PopoverController,
    private ngZone: NgZone,
    private oneSignal: OneSignal,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private nativeGeocoder: NativeGeocoder
    ) { 
      //todo: remove mock parameters
      this.geoLongitude = 9.164747499999999
      this.geoLatitude = 45.480588499999996
      const _this = this
      window['ackSetLat'] =function(o){
        _this.geoLatitude = o
        
      }    
      window['ackSetLon'] =function(o){
        _this.geoLongitude = o
        
      } 
      window['ackMaxD'] =function(o){
        _this.maxDistance = o
        
      } 
    }
    
    
    flipIt() {
      if(this.flipped == false){
        console.log('finding...')
        this.findClosestUsers()
      } 
      else{
        this.flipped = true;
        this.coffeeContainerVisibilitiy = 'visibile'
      }
    }
    
    
    public async ngOnInit(): Promise<void> {
      this.getGeolocation()
      await this.onEnter();
      
      this.navSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/tabs/home') {
          this.onEnter();
        }
      });
      this.authService.userInfo().subscribe(data=>{
        console.log(data)
      })
      from(this.oneSignal.getIds()).subscribe(data=>{
        this.userService
        .subscribeToPushNotifications(data.userId ,data.pushToken)
        .subscribe()
      })
      this.authService.currentUser.subscribe(user=>{
        this.userImg = user && user.profileImg 
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
        console.log('error while getting position',error)
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
    public async onEnter(): Promise<void> {
      // do your on enter page stuff here
      setTimeout(()=>{
        this.coffeeContainerVisibilitiy = 'visible'
        this.flipped = false;
      },100)
    }
    
    public ngOnDestroy(): void {
      this.navSubscription.unsubscribe();
    }
    async findClosestUsers(){
      if(this.geoLatitude && this.geoLongitude) {
        this.ngZone.run(()=>this.loadClass = 'coffee-load')
        console.log('fiiiii...')
        
        this.coffeeService.findClosestUsers(this.geoLatitude, this.geoLongitude, this.maxDistance)
        .subscribe(response=>{

          this.coffeeContainerVisibilitiy = 'gone'
          this.ngZone.run(()=>this.loadClass = '')
          this.flipped = true
          this.openLocalizedUsersModal()
        },error =>{
          console.log('found (error ahah, nothing to laught)' + error)
          
          this.loadClass = ''
          console.log(error);
          this.toastService.somethingWentWrong()
        })
      }
      else{
        this.toastService.alert(ENABLE_LOCALIZATION_KEY)
        this.getGeolocation()
      }
    }  
    openLocalizedUsersModal(){
      this.router.navigate(['localized-users'])
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
