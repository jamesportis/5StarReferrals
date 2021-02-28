import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FineDiningPageRoutingModule } from './fine-dining-routing.module';

import { FineDiningPage } from './fine-dining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FineDiningPageRoutingModule
  ],
  declarations: [FineDiningPage]
})
export class FineDiningPageModule {}
