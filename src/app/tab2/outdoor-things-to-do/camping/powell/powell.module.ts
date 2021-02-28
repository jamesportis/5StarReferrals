import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PowellPageRoutingModule } from './powell-routing.module';

import { PowellPage } from './powell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PowellPageRoutingModule
  ],
  declarations: [PowellPage]
})
export class PowellPageModule {}
