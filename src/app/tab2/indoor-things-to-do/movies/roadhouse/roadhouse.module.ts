import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoadhousePageRoutingModule } from './roadhouse-routing.module';

import { RoadhousePage } from './roadhouse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoadhousePageRoutingModule
  ],
  declarations: [RoadhousePage]
})
export class RoadhousePageModule {}
