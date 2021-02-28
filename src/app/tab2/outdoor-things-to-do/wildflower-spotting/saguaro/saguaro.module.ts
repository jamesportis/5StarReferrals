import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaguaroPageRoutingModule } from './saguaro-routing.module';

import { SaguaroPage } from './saguaro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaguaroPageRoutingModule
  ],
  declarations: [SaguaroPage]
})
export class SaguaroPageModule {}
