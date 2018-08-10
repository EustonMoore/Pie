import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  feeds: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams ,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController, 
              ) {

    let loadingPopup = this.loadingCtrl.create({
      spinner: 'crescent',
      content: ''
    });
    loadingPopup.present();
    this.feeds = [1,2,3,4,5,6]
     
    loadingPopup.dismiss();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

}
