import { Injectable } from "@angular/core";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
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
  // isTesting: true
  //   autoShow: false,
  //   //id: "ca-app-pub-39402XXXXXXXX2544/6300978111"
  // };
 
  //Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    id: "ca-app-pub-3940256099942544/5224354917", //test
    isTesting: true, // Remove in production
    autoShow: true//,
    //id: "ca-app-pub-6771007436830318/9397716981"
  //   //idA: "ca-app-pub-6771007436830318/2995960166"

  };
 
  constructor(
    private admobFree: AdMobFree,
    private http: HttpClient,
    public platform: Platform
  ) {
    this.platform.ready().then(() => {
      document.addEventListener('admob.rewardvideo.events.COMPLETE', () => {
        // handle event
      })
      document.addEventListener('admob.rewardvideo.events.LOAD_FAIL', () => {
        this.onRewardVideoListener && this.onRewardVideoListener.onFail()

      })
      document.addEventListener('admob.rewardvideo.events.CLOSE', () => {
        // handle event
        this.onRewardVideoListener && this.onRewardVideoListener.onFail()

      })
      document.addEventListener('admob.rewardvideo.events.REWARD', () => {
        // handle event
       this.onRewardVideoListener && this.onRewardVideoListener.onReward()

      })
      // // Load ad configuration
      // this.admobFree.interstitial.config(this.interstitialConfig);
      // //Prepare Ad to Show
      // this.admobFree.interstitial.prepare()
      //   .then(() => {
      //     // alert(1);
      //   }).catch(e => alert(e));
 
      if(!this.RewardVideoConfig.isTesting)
      this.RewardVideoConfig.id = this.platform.is('ios')      ? 'ca-app-pub-6771007436830318/9397716981' :
                                  this.platform.is('android')  ? 'ca-app-pub-6771007436830318/2995960166' : ''

      // Load ad configuration
      this.admobFree.rewardVideo.config(this.RewardVideoConfig);
  
    });
    

  }
 

  rewardVideo() {
      //Prepare Ad to Show
      this.platform.ready().then(() => {
        this.admobFree.rewardVideo.prepare()
        .then(() => {
          //Check if Ad is loaded
          this.admobFree.rewardVideo.isReady().then(() => {
            //Will show prepared Ad
            this.admobFree.rewardVideo.show()
              .then(()=> console.log('showing...'))
              .catch(e => {
                console.log(e)
                this.onRewardVideoListener && this.onRewardVideoListener.onFail()
              });
          })
          .catch(e => {
            console.log(e)
            this.onRewardVideoListener && this.onRewardVideoListener.onFail()
          });
        }).catch(e => {
          console.log(e)
          this.onRewardVideoListener && this.onRewardVideoListener.onFail()
        });
      })
    return this
  }
  with(onRewardVideoListener: OnRewardVideoListener){
    this.onRewardVideoListener = onRewardVideoListener
  }

 
}
export interface OnRewardVideoListener{
  onReward: () => void
  onFail: () => void
}