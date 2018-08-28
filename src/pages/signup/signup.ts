import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account : {
  	email: string,
  	name: string,
  	password: string,
  }= {
  	email: '',
  	name: '',
  	password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  create(){
  	console.log(this.account);
  }
  login(){
  	this.navCtrl.push('LoginPage', {}, {
  		animate:true,
  		direction: "forward"
  	});
  }

}
