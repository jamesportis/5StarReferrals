import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GethsemanePageRoutingModule } from './gethsemane-routing.module';

import { GethsemanePage } from './gethsemane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GethsemanePageRoutingModule
  ],
  declarations: [GethsemanePage]
})
export class GethsemanePageModule {}
