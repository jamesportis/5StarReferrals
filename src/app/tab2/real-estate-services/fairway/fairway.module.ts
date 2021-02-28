import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FairwayPageRoutingModule } from './fairway-routing.module';

import { FairwayPage } from './fairway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FairwayPageRoutingModule
  ],
  declarations: [FairwayPage]
})
export class FairwayPageModule {}
