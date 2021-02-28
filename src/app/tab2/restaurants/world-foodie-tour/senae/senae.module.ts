import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenaePageRoutingModule } from './senae-routing.module';

import { SenaePage } from './senae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenaePageRoutingModule
  ],
  declarations: [SenaePage]
})
export class SenaePageModule {}
