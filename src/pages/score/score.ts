import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
	// Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
    var ctx = document.getElementById("polarChart").getContext('2d');
					var myChart = new Chart(ctx, {
						type: 'polarArea',
						data: {
							labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
							datasets: [{
								backgroundColor: [
									"#2ecc71",
									"#3498db",
									"#95a5a6",
									"#9b59b6",
									 "#f1c40f",
									 "#e74c3c",
									 "#34495e"
								],
								data: [12, 19, 3, 17, 28, 24, 7]
							}]
						}
					});
  }

}
