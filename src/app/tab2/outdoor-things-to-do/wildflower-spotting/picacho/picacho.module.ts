import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicachoPageRoutingModule } from './picacho-routing.module';

import { PicachoPage } from './picacho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicachoPageRoutingModule
  ],
  declarations: [PicachoPage]
})
export class PicachoPageModule {}
