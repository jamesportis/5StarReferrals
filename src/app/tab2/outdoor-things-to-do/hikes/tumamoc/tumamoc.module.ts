import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TumamocPageRoutingModule } from './tumamoc-routing.module';

import { TumamocPage } from './tumamoc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TumamocPageRoutingModule
  ],
  declarations: [TumamocPage]
})
export class TumamocPageModule {}
