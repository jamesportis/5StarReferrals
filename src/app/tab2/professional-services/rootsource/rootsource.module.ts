import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootsourcePageRoutingModule } from './rootsource-routing.module';

import { RootsourcePage } from './rootsource.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootsourcePageRoutingModule
  ],
  declarations: [RootsourcePage]
})
export class RootsourcePageModule {}
