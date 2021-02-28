import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolmesPageRoutingModule } from './holmes-routing.module';

import { HolmesPage } from './holmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolmesPageRoutingModule
  ],
  declarations: [HolmesPage]
})
export class HolmesPageModule {}
