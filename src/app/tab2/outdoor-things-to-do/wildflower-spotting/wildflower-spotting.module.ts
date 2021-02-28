import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WildflowerSpottingPageRoutingModule } from './wildflower-spotting-routing.module';

import { WildflowerSpottingPage } from './wildflower-spotting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WildflowerSpottingPageRoutingModule
  ],
  declarations: [WildflowerSpottingPage]
})
export class WildflowerSpottingPageModule {}
