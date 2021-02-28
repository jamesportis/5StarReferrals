import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharroPageRoutingModule } from './charro-routing.module';

import { CharroPage } from './charro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharroPageRoutingModule
  ],
  declarations: [CharroPage]
})
export class CharroPageModule {}
