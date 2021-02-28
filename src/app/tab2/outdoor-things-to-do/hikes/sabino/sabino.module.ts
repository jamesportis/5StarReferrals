import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SabinoPageRoutingModule } from './sabino-routing.module';

import { SabinoPage } from './sabino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SabinoPageRoutingModule
  ],
  declarations: [SabinoPage]
})
export class SabinoPageModule {}
