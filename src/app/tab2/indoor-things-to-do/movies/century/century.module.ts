import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenturyPageRoutingModule } from './century-routing.module';

import { CenturyPage } from './century.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenturyPageRoutingModule
  ],
  declarations: [CenturyPage]
})
export class CenturyPageModule {}
