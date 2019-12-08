import { Component, OnInit, NgZone } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalizedUser } from 'src/app/_models/user';
import { CoffeeService } from 'src/app/_services/coffe.service';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { isOnline, removeObjectFromArray, getFormattedDistance } from 'src/app/_utils/functions';
import { ToastService } from 'src/app/_services/toast.service';


@Component({
  selector: 'app-localized-users',
  templateUrl: './localized-users.page.html',
  styleUrls: ['./localized-users.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})
export class LocalizedUsersComponent implements OnInit {
  localizedUsers : LocalizedUser[]

  invitationIds = []
  compose = false
  constructor(
    private location: Location,
    private coffeeService: CoffeeService,
    private modalCtrl: ModalController,
    private toastService: ToastService,
    private router: Router,
    private zone: NgZone
    ) { }
    
    ngOnInit() {
      this.localizedUsers = this.coffeeService.localizedUsers;
    }

    loadImg($event){
      this.zone.run(()=>{
        $event._element.nativeElement.parentElement.classList.remove('imgInLoading')
        $event._element.nativeElement.parentElement.classList.add('imgLoaded')
      })
    }
    loadData(infiniteScroll){
      setTimeout(() => {
        this.coffeeService.moreUsersOnLastUsers().subscribe()
        infiniteScroll.target.complete();
      }, 1000)

    }
    close(){
      this.modalCtrl.dismiss()
    }
    isOnline(localizedUser: LocalizedUser){
      return isOnline(localizedUser.user.lastSeen)
    }
    onLocalizedUserTap($event, localizedUser: LocalizedUser){
      if(this.compose){
        this.add($event, localizedUser)
      }
      else{
        this.viewProfile(localizedUser)
      }
    }
    
    viewProfile(localizedUser: LocalizedUser){
      this.router.navigate(['view-profile',localizedUser.user.id])
    }
    
    invite(){
      this.coffeeService.sendInvitation(this.invitationIds).subscribe(response=>{
        this.toastService.alert('invitation_sent')
        var lights = document.getElementsByClassName("card-selected");
        while (lights.length)
        lights[0].classList.remove("card-selected");
        this.compose = false
      })
      
    }
    distanceFromUser(localizedUser: LocalizedUser){
      return getFormattedDistance(localizedUser.distance)
    }
    add($event, localizedUser : LocalizedUser) {
      $event.preventDefault()
      const element = $event.target.parentElement.parentElement.parentElement.querySelector('ion-card');
      if (element.classList.contains('localized-user-card')){
        if(element.classList.contains('card-selected')){
          element.classList.remove('card-selected')
          this.invitationIds = removeObjectFromArray(this.invitationIds, localizedUser.user.id)
        }else{
          element.classList.add('card-selected')
          this.invitationIds.push(localizedUser.user.id)
        }
      }
    }
  }
