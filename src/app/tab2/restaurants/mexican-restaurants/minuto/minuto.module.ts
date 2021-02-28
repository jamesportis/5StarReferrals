import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinutoPageRoutingModule } from './minuto-routing.module';

import { MinutoPage } from './minuto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinutoPageRoutingModule
  ],
  declarations: [MinutoPage]
})
export class MinutoPageModule {}
