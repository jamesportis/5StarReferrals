import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShishPageRoutingModule } from './shish-routing.module';

import { ShishPage } from './shish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShishPageRoutingModule
  ],
  declarations: [ShishPage]
})
export class ShishPageModule {}
