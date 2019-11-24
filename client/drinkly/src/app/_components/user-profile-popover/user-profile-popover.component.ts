import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { ManageCreditsComponent } from 'src/app/_components/manage-credits/manage-credits.component';

@Component({
  selector: 'app-user-profile-popover',
  templateUrl: './user-profile-popover.component.html',
  styleUrls: ['./user-profile-popover.component.scss'],
})
export class UserProfilePopoverComponent implements OnInit {
  
  userId: string  
  constructor(
    private popoverCtrl: PopoverController,
    private router: Router,
    private modalCtrl: ModalController,
    private authService: AuthService,
    ) { }
    
    ngOnInit() {

    }
    credits(){
      this.modalCtrl.create({
        component: ManageCreditsComponent,
      }).then(modal => {
        modal.present();
      });
    }
    logout(){
      this.authService.logout().subscribe(data=>{
        console.log(data)
      },error=>{
        console.log(error)
      })
      this.popoverCtrl.dismiss()
      this.router.navigate(['/login']);

    }

    async onDismiss(confirmed: boolean) {
      try {
        await this.popoverCtrl.dismiss(confirmed);
      } catch (e) {
        //click more than one time popover throws error, so ignore...
      }
      
    }
    
  }
