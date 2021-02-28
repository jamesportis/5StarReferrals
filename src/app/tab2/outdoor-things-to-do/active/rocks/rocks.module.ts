import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RocksPageRoutingModule } from './rocks-routing.module';

import { RocksPage } from './rocks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RocksPageRoutingModule
  ],
  declarations: [RocksPage]
})
export class RocksPageModule {}
