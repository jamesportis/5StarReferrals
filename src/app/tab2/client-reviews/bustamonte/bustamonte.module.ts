import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BustamontePageRoutingModule } from './bustamonte-routing.module';

import { BustamontePage } from './bustamonte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BustamontePageRoutingModule
  ],
  declarations: [BustamontePage]
})
export class BustamontePageModule {}
