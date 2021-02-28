import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpasPageRoutingModule } from './spas-routing.module';

import { SpasPage } from './spas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpasPageRoutingModule
  ],
  declarations: [SpasPage]
})
export class SpasPageModule {}
