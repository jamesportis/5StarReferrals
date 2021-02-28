import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MamasPageRoutingModule } from './mamas-routing.module';

import { MamasPage } from './mamas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MamasPageRoutingModule
  ],
  declarations: [MamasPage]
})
export class MamasPageModule {}
