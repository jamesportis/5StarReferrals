import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmphitheaterPageRoutingModule } from './amphitheater-routing.module';

import { AmphitheaterPage } from './amphitheater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmphitheaterPageRoutingModule
  ],
  declarations: [AmphitheaterPage]
})
export class AmphitheaterPageModule {}
