import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KnightsPageRoutingModule } from './knights-routing.module';

import { KnightsPage } from './knights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KnightsPageRoutingModule
  ],
  declarations: [KnightsPage]
})
export class KnightsPageModule {}
