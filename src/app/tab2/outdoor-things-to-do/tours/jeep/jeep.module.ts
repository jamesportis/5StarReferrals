import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeepPageRoutingModule } from './jeep-routing.module';

import { JeepPage } from './jeep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeepPageRoutingModule
  ],
  declarations: [JeepPage]
})
export class JeepPageModule {}
