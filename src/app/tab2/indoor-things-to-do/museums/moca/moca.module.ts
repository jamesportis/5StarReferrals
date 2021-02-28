import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MocaPageRoutingModule } from './moca-routing.module';

import { MocaPage } from './moca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MocaPageRoutingModule
  ],
  declarations: [MocaPage]
})
export class MocaPageModule {}
