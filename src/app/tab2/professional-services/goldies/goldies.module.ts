import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoldiesPageRoutingModule } from './goldies-routing.module';

import { GoldiesPage } from './goldies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoldiesPageRoutingModule
  ],
  declarations: [GoldiesPage]
})
export class GoldiesPageModule {}
