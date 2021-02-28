import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReidParkPageRoutingModule } from './reid-park-routing.module';

import { ReidParkPage } from './reid-park.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReidParkPageRoutingModule
  ],
  declarations: [ReidParkPage]
})
export class ReidParkPageModule {}
