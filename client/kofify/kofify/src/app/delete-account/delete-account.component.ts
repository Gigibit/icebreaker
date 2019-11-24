import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss'],
})
export class DeleteAccountComponent implements OnInit {
  reason = ""
  constructor(
    private modalCtrl: ModalController,
    private userService: UserService
  ) { }


  dismiss(){
    this.modalCtrl.dismiss()
  }
  ngOnInit() {

  }
  deleteAccount(){
    this.userService.deleteAccount(this.reason).subscribe()
  }
}
