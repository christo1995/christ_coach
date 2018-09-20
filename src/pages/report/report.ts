import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
 //  data: (function(){
	//   var data = [];

	//   for (let i = 0; i & lt; = 5; i += 1) {
	//     data.push({
	//       x: i,
	//       y: Math.floor(Math.random() * 10) + 0
	//     });
	//   }
	//   return data;
	// }());

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	 
  }
  
  ngOnInit() {
  }



  ionViewDidLoad() {
    var myChart = HighCharts.chart('container', {
    chart: {
      type: 'column',
      height:210,
    },
    title: {
      text: null
    },
    credits: {
        enabled: false
    },
    xAxis: {
      categories: ['Love', 'Peace', 'Faith', 'Love', 'Peace', 'Faith']
    },
    yAxis: {
      title: {
        text: null,
        minorTickInterval: 1,
        minorTickLength: 1
      }
    },
    series: [{
            showInLegend: false,               
            name: "<b><?php echo $title; ?></b>",
            data: [
                  {y: 1, color: '#f25f39'}, 
                  {y: 3, color: '#f25f39'}, 
                  {y: 4, color: '#f25f39'}, 
                  {y: 6, color: '#f25f39'}, 
                  {y: 8, color: '#f25f39'}, 
                  {y: 3, color: '#f25f39'},]
        }]
  });
  }
  openSuccess(){
    this.navCtrl.push('SuccessPage', {}, {
      animate:true,
      direction: "forward"
    })
  }

  

}
