import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { FILTER_PREFERENCES_KEY, QueryFilter, QueryFilterUtils } from 'src/app/_models/queryFilter';
import { CoffeeService } from 'src/app/_services/coffe.service';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  queryFilter : QueryFilter = QueryFilterUtils.default()

  constructor(
    private loaderCtrl: LoadingController,
    private modalCtrl: ModalController,
    private coffeeService: CoffeeService
  ) { 
    let preferences = localStorage.getItem(FILTER_PREFERENCES_KEY)
    if(preferences)
      this.queryFilter = JSON.parse(preferences)
  }

  ngOnInit() { 
  }
  async done(){
    let loader = await this.loaderCtrl.create()
    loader.present()
    localStorage.setItem(FILTER_PREFERENCES_KEY,
        JSON.stringify(this.queryFilter)
    )
    this.coffeeService.reload().subscribe(()=>{
      loader.dismiss()
      this.modalCtrl.dismiss()
    })
  }
  dismiss(){
    this.modalCtrl.dismiss()
  }
}
