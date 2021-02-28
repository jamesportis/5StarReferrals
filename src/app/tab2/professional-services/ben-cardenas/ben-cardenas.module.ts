import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenCardenasPageRoutingModule } from './ben-cardenas-routing.module';

import { BenCardenasPage } from './ben-cardenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenCardenasPageRoutingModule
  ],
  declarations: [BenCardenasPage]
})
export class BenCardenasPageModule {}
