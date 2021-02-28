import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermagonPageRoutingModule } from './termagon-routing.module';

import { TermagonPage } from './termagon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermagonPageRoutingModule
  ],
  declarations: [TermagonPage]
})
export class TermagonPageModule {}
