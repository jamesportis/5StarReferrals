import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HikesPageRoutingModule } from './hikes-routing.module';

import { HikesPage } from './hikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HikesPageRoutingModule
  ],
  declarations: [HikesPage]
})
export class HikesPageModule {}
