import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account : {
  	email: string,
  	password: string,
  } = {
  	email: '',
  	password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logform(){
  	console.log(this.account);

  }
  openHome(){
    this.navCtrl.push('HomePage', {}, {
      animate:true,
      direction:'forward'
    });
  }
  signup(){
  	this.navCtrl.push('SignupPage', {}, {
  		animate:true,
  		direction:'forward'
  	})
  }

}
