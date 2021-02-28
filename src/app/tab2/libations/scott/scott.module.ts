import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScottPageRoutingModule } from './scott-routing.module';

import { ScottPage } from './scott.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScottPageRoutingModule
  ],
  declarations: [ScottPage]
})
export class ScottPageModule {}
