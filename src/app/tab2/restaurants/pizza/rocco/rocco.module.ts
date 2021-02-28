import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoccoPageRoutingModule } from './rocco-routing.module';

import { RoccoPage } from './rocco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoccoPageRoutingModule
  ],
  declarations: [RoccoPage]
})
export class RoccoPageModule {}
