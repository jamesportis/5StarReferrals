import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TridentPageRoutingModule } from './trident-routing.module';

import { TridentPage } from './trident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TridentPageRoutingModule
  ],
  declarations: [TridentPage]
})
export class TridentPageModule {}
