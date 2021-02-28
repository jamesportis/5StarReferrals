import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaLongPageRoutingModule } from './ha-long-routing.module';

import { HaLongPage } from './ha-long.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaLongPageRoutingModule
  ],
  declarations: [HaLongPage]
})
export class HaLongPageModule {}
