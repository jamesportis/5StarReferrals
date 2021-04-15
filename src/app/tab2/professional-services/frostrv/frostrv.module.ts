import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrostrvPageRoutingModule } from './frostrv-routing.module';

import { FrostrvPage } from './frostrv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrostrvPageRoutingModule
  ],
  declarations: [FrostrvPage]
})
export class FrostrvPageModule {}
