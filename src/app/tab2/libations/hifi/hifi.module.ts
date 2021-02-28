import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HifiPageRoutingModule } from './hifi-routing.module';

import { HifiPage } from './hifi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HifiPageRoutingModule
  ],
  declarations: [HifiPage]
})
export class HifiPageModule {}
