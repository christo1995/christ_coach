import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as HighCharts from 'highcharts';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
        text: null
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
 

}
