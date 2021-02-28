import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyclefinderPageRoutingModule } from './cyclefinder-routing.module';

import { CyclefinderPage } from './cyclefinder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyclefinderPageRoutingModule
  ],
  declarations: [CyclefinderPage]
})
export class CyclefinderPageModule {}
