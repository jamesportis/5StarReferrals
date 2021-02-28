import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecibelPageRoutingModule } from './decibel-routing.module';

import { DecibelPage } from './decibel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecibelPageRoutingModule
  ],
  declarations: [DecibelPage]
})
export class DecibelPageModule {}
