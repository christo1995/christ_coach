import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScorePage } from './score';
// import * as HighCharts from 'highcharts';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ScorePage,
  ],
  imports: [
    IonicPageModule.forChild(ScorePage),
    ChartsModule
  ],
})
export class ScorePageModule {}
