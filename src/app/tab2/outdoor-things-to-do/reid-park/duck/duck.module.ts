import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DuckPageRoutingModule } from './duck-routing.module';

import { DuckPage } from './duck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuckPageRoutingModule
  ],
  declarations: [DuckPage]
})
export class DuckPageModule {}
