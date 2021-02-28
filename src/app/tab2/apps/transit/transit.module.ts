import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitPageRoutingModule } from './transit-routing.module';

import { TransitPage } from './transit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitPageRoutingModule
  ],
  declarations: [TransitPage]
})
export class TransitPageModule {}
