import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';

import { SuperTabsModule } from 'ionic2-super-tabs';


@NgModule({
  declarations: [
    Tab1Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab1Page),
    SuperTabsModule.forRoot()
  ],
})
export class Tab1PageModule {}
