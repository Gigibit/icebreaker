import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { ToastController, ActionSheetController, ModalController, PopoverController } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/Camera/ngx';
import { Location } from '@angular/common';
import { ImageModalComponent } from '../../_components/image-modal/image-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../_services/auth.service';
import { UserProfilePopoverComponent } from 'src/app/_components/user-profile-popover/user-profile-popover.component';
import { EditUserProfileComponent } from 'src/app/_components/edit-user-profile/edit-user-profile.component';

const COLUMN_COUNT = 4


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  userInfo: User 
  constructor(
    private location: Location,
    private toastController: ToastController,
    private modalController: ModalController,

    // private loadingController: LoadingController,
    // private ref: ChangeDetectorRef, 
    private popoverController: PopoverController,
    private userService: UserService,
    private authService : AuthService,
    // private router: Router

    ) { 
    }
    
    ngOnInit() {
      
      this.authService.currentUser.subscribe(user=>{
         this.userInfo = user
         console.log(this.userInfo)

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
    
        async userPopover(event){
          const popover = await this.popoverController.create({
            component: UserProfilePopoverComponent,
            event: event
          });
          return await popover.present();
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
      editProfile(){
        this.modalController.create({
          component: EditUserProfileComponent,
        }).then(modal => {
          modal.present();
        });
      }

    }
