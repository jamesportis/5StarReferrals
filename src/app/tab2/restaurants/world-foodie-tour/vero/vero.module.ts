import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeroPageRoutingModule } from './vero-routing.module';

import { VeroPage } from './vero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeroPageRoutingModule
  ],
  declarations: [VeroPage]
})
export class VeroPageModule {}
