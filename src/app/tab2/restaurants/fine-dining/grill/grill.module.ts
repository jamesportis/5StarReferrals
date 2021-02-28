import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrillPageRoutingModule } from './grill-routing.module';

import { GrillPage } from './grill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrillPageRoutingModule
  ],
  declarations: [GrillPage]
})
export class GrillPageModule {}
