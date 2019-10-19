import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, ModalController, LoadingController, IonCol, IonRow } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/Camera/ngx';
import { UserService } from 'src/app/_services/user.service';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss'],
})
export class EditUserProfileComponent implements OnInit {
  @ViewChild(IonRow,{static: true}) photosRow : IonRow
  userInfo : User
  bio: string
  imagesDraggingSubscription = new Subscription();

  imagesSorting = [1,2,3]

  constructor(
    private authService : AuthService,
    private loadingCtrl: LoadingController,
    private translateService : TranslateService,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController, 
    private userService: UserService,
    private dragulaService: DragulaService
  ) { 
    this.imagesDraggingSubscription.add(this.dragulaService.dropModel("VAMPIRES")
    .subscribe(({ sourceModel, targetModel, item }) => {
      console.log(sourceModel, targetModel, item)
      this.getOrder()
    })
  );
  }
  getOrder(){
    console.log(document.querySelector('.image-container-wrapper'))
    
  }

  ngOnInit() {
    this.userInfo = this.authService.currentUserValue
    this.bio = this.userInfo.bio
  }

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

  async editImage(index: number){
    const loader = await this.loadingCtrl.create()

    this.uploadImage(
      () => {
        loader.present()
        this.userService.uploadImage(index, PictureSourceType.CAMERA )
        .then(()=>loader.dismiss())
        .catch(()=>loader.dismiss());
      },
      () => {
        loader.present()

        this.userService.uploadImage(index, PictureSourceType.PHOTOLIBRARY )
        .then(()=>loader.dismiss())
        .catch(()=>loader.dismiss());
      })
      
  }
  dismiss(){
    this.modalCtrl.dismiss()
  }

  async done(bio: string){
    if(bio != this.userInfo.bio)
    {
      const loader = await this.loadingCtrl.create()
      loader.present()
      this.userService.updateInfo({
        bio: bio,
        imagesSorting : this.imagesSorting
      }).subscribe((response)=>{
        loader.dismiss()
        this.dismiss()
      }, throwable=>{
        loader.dismiss()
        this.dismiss()
      })
    }
    else{
      this.dismiss()
    }
  }
}
