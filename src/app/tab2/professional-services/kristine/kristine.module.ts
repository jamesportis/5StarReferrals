import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KristinePageRoutingModule } from './kristine-routing.module';

import { KristinePage } from './kristine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KristinePageRoutingModule
  ],
  declarations: [KristinePage]
})
export class KristinePageModule {}
