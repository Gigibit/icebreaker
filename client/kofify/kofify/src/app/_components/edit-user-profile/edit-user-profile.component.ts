import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_models/user';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, ModalController, LoadingController, IonCol, IonRow } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/Camera/ngx';
import { UserService } from 'src/app/_services/user.service';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { DeleteAccountComponent } from 'src/app/delete-account/delete-account.component';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss'],
})
export class EditUserProfileComponent implements OnInit {
  @ViewChild(IonRow, { static : true }) photosRow : IonRow
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
      try{
        this.dragulaService.createGroup('VAMPIRES', {
          revertOnSpill: true,
          moves: (el, container, handle, sibling):any=> {
            let value = el.getAttribute('data-position')
            return value !== 'false';
          },
          accepts: (el?: Element, target?: Element, source?: Element, sibling?: Element) => {
            let position = new Number(el.getAttribute('data-position'))
            let elementListPositions = Array.prototype.slice.call( target.children )
            .map((el)=> el.getAttribute('data-position')) 
            let firstFalse = elementListPositions
            
            .findIndex( (el)=> el == 'false')
            console.log(firstFalse)
            let valid = true
            for(var i = firstFalse; i < elementListPositions.length; i++ ) 
            if(elementListPositions[i] != 'false') 
            valid= false
            
            return this.userInfo && position <= this.userInfo.images.length && valid;
          },
        });
      }catch(ex) {}
      
    }
    
    deleteAccount(){
      this.modalCtrl.create({
        component: DeleteAccountComponent
      }).then(modal => {
        modal.present();
      });
    }
    
    
    
    ngOnInit() {
      this.imagesDraggingSubscription.add(this.dragulaService.dropModel("VAMPIRES")
      .subscribe(({ sourceModel, targetModel, item }) => {} )
      );
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
    actionSheet.present();
  }
  
  async deletePopover(deleteHandler: ()=> void){
    let deleteImage = await this.translateService.get('delete_image').toPromise()
    let cancelString = await this.translateService.get('cancel').toPromise()
    
    
    const actionSheet = await this.actionSheetController.create({
        buttons: [{
          text: deleteImage,
          cssClass: 'danger-icon',
          handler: deleteHandler,
          role: 'destructive'
        },
        {
          text: cancelString,
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


  async clickOnBox(index: number){
    let image = this.userInfo.imageIds[index-1]
    if(image){
      const loader = await this.loadingCtrl.create()
      this.deletePopover(()=>{
        this.userService.deleteImage(image).then(()=>{
          this.userInfo.images[index-1] = null
          this.userInfo.imageIds[index-1] = null
        })
        .then(()=>loader.dismiss())
        .catch(()=>loader.dismiss());
      })
    }
    else{
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
      
      
    }
    dismiss(){
      this.modalCtrl.dismiss()
    }
    
    async done(bio: string){
      var somethingChanged = false;
      let sorting = []
      if(bio != this.userInfo.bio) somethingChanged = true;
      if(JSON.stringify(this.imagesSorting) != JSON.stringify([1,2,3]))
      { 
        somethingChanged = true
        let elements = document.getElementsByClassName('image-container-wrapper')
        for (var i = 0; i < elements.length ; i++ ){
          let element = elements[i]
          let id = element.getAttribute('data-imageId')
          if(id != 'false')
            sorting.push( new Number(id) )
        }
      }
      if(somethingChanged){ 
        const loader = await this.loadingCtrl.create()
        loader.present()
        this.userService.updateInfo({
          bio: bio,
          imageIds : sorting
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
  