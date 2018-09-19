import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TraitsPage } from './traits';

@NgModule({
  declarations: [
    TraitsPage,
  ],
  imports: [
    IonicPageModule.forChild(TraitsPage),
  ],
})
export class TraitsPageModule {}
