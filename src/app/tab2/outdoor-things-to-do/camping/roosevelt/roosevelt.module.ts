import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RooseveltPageRoutingModule } from './roosevelt-routing.module';

import { RooseveltPage } from './roosevelt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RooseveltPageRoutingModule
  ],
  declarations: [RooseveltPage]
})
export class RooseveltPageModule {}
