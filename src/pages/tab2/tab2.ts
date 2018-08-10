import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  @ViewChild("fab") fabHandler: FabContainer;

  page1: any = 'SocialPage';
  page2: any = 'GroupsPage';
  selectedTabIndex: number = 0;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public superTabsCtrl: SuperTabsController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
    this.superTabsCtrl.showToolbar(true);
  }

  onTabSelect(event){
    this.selectedTabIndex = event.index;
    if(this.fabHandler._listsActive){
      this.fabHandler.close();
    }
  }

  ionViewWillLeave(){
    if(this.fabHandler._listsActive){
      this.fabHandler.close();
    }
  }

}
