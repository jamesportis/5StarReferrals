import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RitaPageRoutingModule } from './rita-routing.module';

import { RitaPage } from './rita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RitaPageRoutingModule
  ],
  declarations: [RitaPage]
})
export class RitaPageModule {}
