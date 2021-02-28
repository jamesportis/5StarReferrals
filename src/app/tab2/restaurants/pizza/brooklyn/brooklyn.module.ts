import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrooklynPageRoutingModule } from './brooklyn-routing.module';

import { BrooklynPage } from './brooklyn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrooklynPageRoutingModule
  ],
  declarations: [BrooklynPage]
})
export class BrooklynPageModule {}
