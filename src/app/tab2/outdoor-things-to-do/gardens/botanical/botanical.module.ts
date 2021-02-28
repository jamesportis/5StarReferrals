import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotanicalPageRoutingModule } from './botanical-routing.module';

import { BotanicalPage } from './botanical.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotanicalPageRoutingModule
  ],
  declarations: [BotanicalPage]
})
export class BotanicalPageModule {}
