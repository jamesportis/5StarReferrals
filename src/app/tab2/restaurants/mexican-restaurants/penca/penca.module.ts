import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PencaPageRoutingModule } from './penca-routing.module';

import { PencaPage } from './penca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PencaPageRoutingModule
  ],
  declarations: [PencaPage]
})
export class PencaPageModule {}
