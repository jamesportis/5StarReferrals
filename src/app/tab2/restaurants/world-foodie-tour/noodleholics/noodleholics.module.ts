import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoodleholicsPageRoutingModule } from './noodleholics-routing.module';

import { NoodleholicsPage } from './noodleholics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoodleholicsPageRoutingModule
  ],
  declarations: [NoodleholicsPage]
})
export class NoodleholicsPageModule {}
