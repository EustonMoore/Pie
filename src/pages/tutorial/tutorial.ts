import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  slides = [
    {
      title: "Welcome to ionic 3",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide1.png",
      color: "#0099ff"
    },
    {
      title: "Layout with firebase",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide2.png",
      color: "#0099ff"
    },
    {
      title: "Components",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide3.png",
      color: "#0099ff"
    },
    {
      title: "Theme",
      description: "This is introduction header.<br>Walkthrough page. ",
      image: "./assets/slide4.png",
      color: "#0099ff"
      
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
    
    
  }

}
