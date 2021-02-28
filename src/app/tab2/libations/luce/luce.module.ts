import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucePageRoutingModule } from './luce-routing.module';

import { LucePage } from './luce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucePageRoutingModule
  ],
  declarations: [LucePage]
})
export class LucePageModule {}
