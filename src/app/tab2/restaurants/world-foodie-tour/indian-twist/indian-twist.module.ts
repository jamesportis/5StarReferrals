import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndianTwistPageRoutingModule } from './indian-twist-routing.module';

import { IndianTwistPage } from './indian-twist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndianTwistPageRoutingModule
  ],
  declarations: [IndianTwistPage]
})
export class IndianTwistPageModule {}
