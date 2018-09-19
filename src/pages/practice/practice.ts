import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-practice',
  templateUrl: 'practice.html',
})
export class PracticePage {
 task : {
  	what_happened: string,
  	instead_of: string,
  	decided_to: string,
  }= {
  	what_happened: '',
  	instead_of: '',
  	decided_to: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PracticePage');
  }
  openReport(){
  	this.navCtrl.push('ReportPage', {}, {
  		animate:true,
  		direction: "forward"
  	});
  }
  saveTask(){
  	
  }

}
