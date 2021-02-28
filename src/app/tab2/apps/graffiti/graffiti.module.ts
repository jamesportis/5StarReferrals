import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraffitiPageRoutingModule } from './graffiti-routing.module';

import { GraffitiPage } from './graffiti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraffitiPageRoutingModule
  ],
  declarations: [GraffitiPage]
})
export class GraffitiPageModule {}
