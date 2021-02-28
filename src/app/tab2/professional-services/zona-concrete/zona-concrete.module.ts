import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZonaConcretePageRoutingModule } from './zona-concrete-routing.module';

import { ZonaConcretePage } from './zona-concrete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZonaConcretePageRoutingModule
  ],
  declarations: [ZonaConcretePage]
})
export class ZonaConcretePageModule {}
