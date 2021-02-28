import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChambersPageRoutingModule } from './chambers-routing.module';

import { ChambersPage } from './chambers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChambersPageRoutingModule
  ],
  declarations: [ChambersPage]
})
export class ChambersPageModule {}
