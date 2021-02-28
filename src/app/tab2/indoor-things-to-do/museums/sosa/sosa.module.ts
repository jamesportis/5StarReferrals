import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosaPageRoutingModule } from './sosa-routing.module';

import { SosaPage } from './sosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosaPageRoutingModule
  ],
  declarations: [SosaPage]
})
export class SosaPageModule {}
