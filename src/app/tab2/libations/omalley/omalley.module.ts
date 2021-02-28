import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmalleyPageRoutingModule } from './omalley-routing.module';

import { OmalleyPage } from './omalley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmalleyPageRoutingModule
  ],
  declarations: [OmalleyPage]
})
export class OmalleyPageModule {}
