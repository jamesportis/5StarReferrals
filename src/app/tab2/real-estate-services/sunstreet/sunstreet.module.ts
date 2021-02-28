import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SunstreetPageRoutingModule } from './sunstreet-routing.module';

import { SunstreetPage } from './sunstreet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SunstreetPageRoutingModule
  ],
  declarations: [SunstreetPage]
})
export class SunstreetPageModule {}
