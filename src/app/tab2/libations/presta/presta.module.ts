import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestaPageRoutingModule } from './presta-routing.module';

import { PrestaPage } from './presta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestaPageRoutingModule
  ],
  declarations: [PrestaPage]
})
export class PrestaPageModule {}
