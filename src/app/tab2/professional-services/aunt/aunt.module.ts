import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuntPageRoutingModule } from './aunt-routing.module';

import { AuntPage } from './aunt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuntPageRoutingModule
  ],
  declarations: [AuntPage]
})
export class AuntPageModule {}
