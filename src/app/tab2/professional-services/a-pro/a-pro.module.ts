import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AProPageRoutingModule } from './a-pro-routing.module';

import { AProPage } from './a-pro.page'
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AProPageRoutingModule
  ],
  declarations: [AProPage]
})
export class AProPageModule {}
