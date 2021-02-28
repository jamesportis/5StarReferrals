import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharroSteakPageRoutingModule } from './charro-steak-routing.module';

import { CharroSteakPage } from './charro-steak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharroSteakPageRoutingModule
  ],
  declarations: [CharroSteakPage]
})
export class CharroSteakPageModule {}
