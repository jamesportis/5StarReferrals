import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BMPageRoutingModule } from './b-m-routing.module';

import { BMPage } from './b-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BMPageRoutingModule
  ],
  declarations: [BMPage]
})
export class BMPageModule {}
