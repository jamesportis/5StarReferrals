import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoftPageRoutingModule } from './loft-routing.module';

import { LoftPage } from './loft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoftPageRoutingModule
  ],
  declarations: [LoftPage]
})
export class LoftPageModule {}
