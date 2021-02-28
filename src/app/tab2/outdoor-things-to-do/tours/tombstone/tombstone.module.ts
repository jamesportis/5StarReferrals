import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TombstonePageRoutingModule } from './tombstone-routing.module';

import { TombstonePage } from './tombstone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TombstonePageRoutingModule
  ],
  declarations: [TombstonePage]
})
export class TombstonePageModule {}
