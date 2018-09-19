import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
export interface Slide{
	title: string;
	description: string;
	image: string;
}

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
  slides: Slide[] = [
   	{
   		title: 'Lorem ipsum dolor tempor sit amet, labore consectetur',
   		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   		image: 'assets/imgs/success_screen.png',
   	},
   	{
   		title: 'Lorem ipsum dolor tempor sit amet, labore consectetur',
   		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   		image: 'assets/imgs/success_screen.png',
   	},
   	{
   		title: 'Lorem ipsum dolor tempor sit amet, labore consectetur',
   		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   		image: 'assets/imgs/success_screen.png',	
   	}
  ];
  showSkip: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  onSlideChange(slider){
  	this.showSkip = !slider.isEnd();
  }

  startApp(){
  	this.navCtrl.setRoot('WelcomePage', {}, {
  		animate:true,
  		direction:'forward'
  	});
  }

}
