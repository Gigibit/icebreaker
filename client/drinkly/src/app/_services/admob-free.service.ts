import { Injectable } from "@angular/core";
// import {
//   AdMobFree,
//   AdMobFreeBannerConfig,
//   AdMobFreeInterstitialConfig,
//   AdMobFreeRewardVideoConfig
// } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';
import { SERVICE_SERVER } from '../config';
import { HttpClient } from '@angular/common/http';

//ca-app-pub-6771007436830318~4109924801 ios
//ca-app-pub-6771007436830318~4967517385 android


const GET_REWARD_URL = SERVICE_SERVER + '/users/me/admob/'
 
@Injectable()
export class AdmobFreeService {
  onRewardVideoListener : OnRewardVideoListener
  // //Interstitial Ad's Configurations
  // interstitialConfig: AdMobFreeInterstitialConfig = {
  //   // add your config here
  //   // for the sake of this example we will just use the test config
  //   isTesting: true,
  //   autoShow: false,
  //   //id: "ca-app-pub-39402XXXXXXXX2544/6300978111"
  // };
 
  //Reward Video Ad's Configurations
  // RewardVideoConfig: AdMobFreeRewardVideoConfig = {
  //   isTesting: true, // Remove in production
  //   autoShow: false//,
  //   //id: "ca-app-pub-6771007436830318/9397716981"
  // //   //idA: "ca-app-pub-6771007436830318/2995960166"

  // };
 
  constructor(
    // private admobFree: AdMobFree,
    private http: HttpClient,
    public platform: Platform
  ) {

    
    // platform.ready().then(() => {
    //   // document.addEventListener('admob.reward_video.complete', () => {
    //   //   // handle event
    //   //   this.http.post(SERVICE_SERVER, {}).subscribe()
    //   // })
   
    //   // // Load ad configuration
    //   // this.admobFree.interstitial.config(this.interstitialConfig);
    //   // //Prepare Ad to Show
    //   // this.admobFree.interstitial.prepare()
    //   //   .then(() => {
    //   //     // alert(1);
    //   //   }).catch(e => alert(e));
 
    //   this.RewardVideoConfig.id = this.platform.is('ios')      ? 'ca-app-pub-6771007436830318/9397716981' :
    //                               this.platform.is('android')  ? 'ca-app-pub-6771007436830318/2995960166' : ''

    //   // Load ad configuration
    //   this.admobFree.rewardVideo.config(this.RewardVideoConfig);
    //   //Prepare Ad to Show
    //   this.admobFree.rewardVideo.prepare()
    //     .then(() => {
    //       alert('initialized')
    //       // alert(2);
    //     }).catch(e => alert(e));
 
    // });
    // this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
    //   this.admobFree.rewardVideo.prepare()
    //     .then(() => {
    //       alert("Reward Video CLOSE");
    //     }).catch(e => alert(e));
    // });
  }
 
  rewardVideo(onRewardVideoListener: OnRewardVideoListener) {
    // this.onRewardVideoListener = onRewardVideoListener
    // //Check if Ad is loaded
    // this.admobFree.rewardVideo.isReady().then(() => {
    //   //Will show prepared Ad
    //   this.admobFree.rewardVideo.show().then(() => {
        
    //     if(this.onRewardVideoListener){
    //       this.onRewardVideoListener.onReward()
    //     }
    //   })
    //     .catch(e => alert("show " + e));
    // })
    //   .catch(e => alert("isReady " + e));
  }
 

 
}
export interface OnRewardVideoListener{
  onReward: () => void
} 

