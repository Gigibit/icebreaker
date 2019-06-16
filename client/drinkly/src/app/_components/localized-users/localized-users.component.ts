import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LocalizedUser } from 'src/app/_models/user';

@Component({
  selector: 'app-localized-users',
  templateUrl: './localized-users.component.html',
  styleUrls: ['./localized-users.component.scss'],
})
export class LocalizedUsersComponent implements OnInit {
  localizedUsers : LocalizedUser[]
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.localizedUsers = this.navParams.get('localizedUsers');
    console.log(this.localizedUsers)
  }
  close(){
    this.modalCtrl.dismiss()
  }
}
