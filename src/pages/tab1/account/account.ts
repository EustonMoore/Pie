import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  items: Array<string>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
               
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }


  presentTransferModal() {
   
    let profileModal = this.modalCtrl.create('TransferPage', { userId: 8675309 },);
    profileModal.present();
  }
 
}
