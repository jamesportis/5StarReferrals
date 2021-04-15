import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuralsPageRoutingModule } from './murals-routing.module';

import { MuralsPage } from './murals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuralsPageRoutingModule
  ],
  declarations: [MuralsPage]
})
export class MuralsPageModule {}
