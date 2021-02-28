import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarchettiPageRoutingModule } from './marchetti-routing.module';

import { MarchettiPage } from './marchetti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarchettiPageRoutingModule
  ],
  declarations: [MarchettiPage]
})
export class MarchettiPageModule {}
