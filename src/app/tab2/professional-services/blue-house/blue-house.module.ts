import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlueHousePageRoutingModule } from './blue-house-routing.module';

import { BlueHousePage } from './blue-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlueHousePageRoutingModule
  ],
  declarations: [BlueHousePage]
})
export class BlueHousePageModule {}
