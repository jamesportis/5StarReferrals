import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidecarPageRoutingModule } from './sidecar-routing.module';

import { SidecarPage } from './sidecar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidecarPageRoutingModule
  ],
  declarations: [SidecarPage]
})
export class SidecarPageModule {}
