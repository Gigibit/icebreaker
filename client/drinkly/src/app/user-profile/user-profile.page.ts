import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User, UserMapper } from '../_models/user';
import { ToastController, ActionSheetController, Platform, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/Camera/ngx';
import { Location } from '@angular/common';
import { OverlayEventDetail } from '@ionic/core';
import { ImageModalComponent } from '../_components/image-modal/image-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../_services/auth.service';

const COLUMN_COUNT = 4


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  section = 'gallery'
  images = []
  uri
  //requestedProposals: Proposal[]
  userInfo: User 
  constructor(
    private location: Location,
    private actionSheetController: ActionSheetController, 
    private toastController: ToastController,
    private modalController: ModalController,
    private translateService : TranslateService,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef, 
    private popoverController: PopoverController,
    private userService: UserService,
    private authService : AuthService
    ) { 
    }
    
    ngOnInit() {
      
      this.userInfo = this.authService.currentUserValue
      
      // this.userService.getContext().subscribe(data=>{
      //   console.log(data)
      //   //this.requestedProposals = data['requested_proposals']
      //   const info = UserMapper.fromJson(data['user_info'])
      //   if(this.userInfo == null && info != null && info.imgs != null ){
      //     this.userInfo = info
      //     this.userInfo.imgs.forEach((img, index) => {
      //       if(index % COLUMN_COUNT == 0) {
      //         let row = [];
      //         row.push(img);
      //         this.images.push(row);
      //       } else {
      //         this.images[this.images.length - 1].push(img);
      //       }
      //     });
      //     if(this.images[this.images.length -1] && this.images[this.images.length -1].length%COLUMN_COUNT !== 0){
      //       for(var i = 0; i < this.images[this.images.length -1].length%COLUMN_COUNT; i++ )
      //       this.images[this.images.length - 1].push('');
      //     }
      //   }
      //   else{
      //     console.log('data not found or user already loaded')
      //   }
      // })
    }
    
    async editProfileImg() {
      this.uploadImage(
        () => {
          this.userService.udateProfileImg(PictureSourceType.CAMERA );
        },
        () => {
          this.userService.udateProfileImg(PictureSourceType.PHOTOLIBRARY);
        })
      }
      
      
      
      async presentToast(text) {
        const toast = await this.toastController.create({
          message: text,
          position: 'bottom',
          duration: 3000
        });
        toast.present();
      }
      
      async selectImage() {
        this.uploadImage(
          () => {
            this.userService.uploadImage(PictureSourceType.CAMERA, (uri)=> this.images.push(uri) );
          },
          () => {
            this.userService.uploadImage(PictureSourceType.PHOTOLIBRARY, (uri)=> this.images.push(uri));
          })
        }
        // async userPopover(event){
        //   const popover = await this.popoverController.create({
        //     component: UserProfilePopoverComponent,
        //     event: event,
        //     translucent: true,
        //     // componentProps:{
        //     //   userId : proposal.createdBy
        //     // }
        //   });
        //   // popover.onDidDismiss().then((hasDoneSomethingOverlay:OverlayEventDetail)=>{
        //   //   if(hasDoneSomethingOverlay.data){
        //   //     this.getGeolocation()
        //   //   }
        //   // })
        //   return await popover.present();
        // }
        
        //   modal.onDidDismiss().then((proposal: OverlayEventDetail<Proposal>) => {
        //     if (proposal.data != null) {
        //       console.log('The result:', proposal.data.id);
        //     }
        //   });
        
        //   await modal.present();
        // }
        
        
        async uploadImage(cameraHandler: ()=> void, libraryHandler: ()=>void ){
          let selectImageSourceString = await this.translateService.get('select_image_source').toPromise()
          let loadFromLibrariString = await this.translateService.get('load_from_library').toPromise()
          let useCameraString = await this.translateService.get('use_camera').toPromise()
          let cancelString = await this.translateService.get('cancel').toPromise()
          
          
          const actionSheet = await this.actionSheetController.create({
            header: selectImageSourceString,
            buttons: [{
              text: loadFromLibrariString,
              handler: libraryHandler
            },
            {
              text: useCameraString,
              handler: cameraHandler
            },
            {
              text: cancelString,
              role: 'cancel'
            }
          ]
        });
        await actionSheet.present();
      }
      
      
      openPreview(img) {
        this.modalController.create({
          component: ImageModalComponent,
          componentProps: {
            img: img
          }
        }).then(modal => {
          modal.present();
        });
      }
    }
