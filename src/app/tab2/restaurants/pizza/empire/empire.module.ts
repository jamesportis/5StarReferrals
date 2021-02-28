import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpirePageRoutingModule } from './empire-routing.module';

import { EmpirePage } from './empire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpirePageRoutingModule
  ],
  declarations: [EmpirePage]
})
export class EmpirePageModule {}
