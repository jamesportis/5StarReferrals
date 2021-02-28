import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugoPageRoutingModule } from './tugo-routing.module';

import { TugoPage } from './tugo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugoPageRoutingModule
  ],
  declarations: [TugoPage]
})
export class TugoPageModule {}
