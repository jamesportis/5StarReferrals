import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArizonaCabinetPageRoutingModule } from './arizona-cabinet-routing.module';

import { ArizonaCabinetPage } from './arizona-cabinet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArizonaCabinetPageRoutingModule
  ],
  declarations: [ArizonaCabinetPage]
})
export class ArizonaCabinetPageModule {}
