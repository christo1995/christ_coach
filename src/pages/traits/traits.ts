import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TraitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traits',
  templateUrl: 'traits.html',
})
export class TraitsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TraitsPage');
  }
  openStory(){
  	
  	this.navCtrl.push('StoryPage', {}, {
  		animate:true,
  		direction: "forward"
  	});
  }

}
