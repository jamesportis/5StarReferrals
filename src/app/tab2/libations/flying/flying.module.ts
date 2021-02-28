import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlyingPageRoutingModule } from './flying-routing.module';

import { FlyingPage } from './flying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlyingPageRoutingModule
  ],
  declarations: [FlyingPage]
})
export class FlyingPageModule {}
