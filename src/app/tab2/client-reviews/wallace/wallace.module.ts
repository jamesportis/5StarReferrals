import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WallacePageRoutingModule } from './wallace-routing.module';

import { WallacePage } from './wallace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WallacePageRoutingModule
  ],
  declarations: [WallacePage]
})
export class WallacePageModule {}
