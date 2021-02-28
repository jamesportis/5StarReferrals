import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParishPageRoutingModule } from './parish-routing.module';

import { ParishPage } from './parish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParishPageRoutingModule
  ],
  declarations: [ParishPage]
})
export class ParishPageModule {}
