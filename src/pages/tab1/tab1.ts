import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs, SuperTabsController } from 'ionic2-super-tabs';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  
  page1: any = 'AccountPage';
  page2: any = 'InquiryPage';
  page3: any = 'MagazinePage';
  selectedTabIndex: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public superTabsCtrl: SuperTabsController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
    this.superTabsCtrl.showToolbar(true);
  }

  // swipeEvent(event){
  //   console.log(event);
  //   if(event.direction == 4){
  //     this.superTabsCtrl.slideTo('page1')
  //   }
  //   else if(event.direction == 2){
  //     this.superTabsCtrl.slideTo('page2')
  //   }
  // }

  onTabSelect(event){
    this.selectedTabIndex = event.index;
  }

  test1(){
    console.log('sadf');

  }
  test2(){
    console.log('zzzs')
  }
}
