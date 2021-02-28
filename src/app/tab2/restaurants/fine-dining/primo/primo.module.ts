import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimoPageRoutingModule } from './primo-routing.module';

import { PrimoPage } from './primo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimoPageRoutingModule
  ],
  declarations: [PrimoPage]
})
export class PrimoPageModule {}
