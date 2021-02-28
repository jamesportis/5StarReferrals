import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaynardsPageRoutingModule } from './maynards-routing.module';

import { MaynardsPage } from './maynards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaynardsPageRoutingModule
  ],
  declarations: [MaynardsPage]
})
export class MaynardsPageModule {}
