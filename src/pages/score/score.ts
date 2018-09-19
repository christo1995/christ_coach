import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
var Highcharts = require('highcharts/highstock');
// window.Highcharts = Highcharts;
declare var require: any;
require('highcharts/modules/variable-pie')(Highcharts);

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

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ScorePage');
  //   var ctx = document.getElementById("polarChart").getContext('2d');
		// 			var myChart = new Chart(ctx, {
		// 				type: 'polarArea',
		// 				data: {
		// 					labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		// 					datasets: [{
		// 						backgroundColor: [
		// 							"#2ecc71",
		// 							"#3498db",
		// 							"#95a5a6",
		// 							"#9b59b6",
		// 							 "#f1c40f",
		// 							 "#e74c3c",
		// 							 "#34495e"
		// 						],
		// 						data: [12, 19, 3, 17, 28, 24, 7]
		// 					}]
		// 				}
		// 			});
  // }
  ionViewDidLoad() {
      var myChart = Highcharts.chart('char_gragh', {
      chart: {
          type: 'variablepie',
          width: null,
          height: 250,
      },
      title: {
          text: ''
      },
      credits: {
          enabled: false
      },
      tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
              'Area (square km): <b>{point.y}</b><br/>' +
              'Population density (people per square km): <b>{point.z}</b><br/>'
      },
      series: [{
          minPointSize: 5,
          innerSize: '0%',
          zMin: 0,
          name: 'countries',
          data: [{
              name: 'love',
              y: 505370,
              z: 92.9
          }, {
              name: 'peace',
              y: 551500,
              z: 118.7
          }, {
              name: 'faith',
              y: 312685,
              z: 124.6
          }, {
              name: 'love',
              y: 78867,
              z: 137.5
          }, {
              name: 'love',
              y: 301340,
              z: 201.8
          }, {
              name: 'love',
              y: 41277,
              z: 214.5
          }, {
              name: 'love',
              y: 357022,
              z: 235.6
          }]
      }]
  });

  }
	opentraits(){
		this.navCtrl.push('TraitsPage', {}, {
			animate:true,
			direction: "forward"
		})
	}
}
