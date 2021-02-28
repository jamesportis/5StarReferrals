import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemPageRoutingModule } from './gem-routing.module';

import { GemPage } from './gem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemPageRoutingModule
  ],
  declarations: [GemPage]
})
export class GemPageModule {}
