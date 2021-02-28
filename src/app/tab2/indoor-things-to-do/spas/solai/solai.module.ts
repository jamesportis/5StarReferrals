import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolaiPageRoutingModule } from './solai-routing.module';

import { SolaiPage } from './solai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolaiPageRoutingModule
  ],
  declarations: [SolaiPage]
})
export class SolaiPageModule {}
