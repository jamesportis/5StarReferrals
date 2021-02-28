import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TohonoPageRoutingModule } from './tohono-routing.module';

import { TohonoPage } from './tohono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TohonoPageRoutingModule
  ],
  declarations: [TohonoPage]
})
export class TohonoPageModule {}
