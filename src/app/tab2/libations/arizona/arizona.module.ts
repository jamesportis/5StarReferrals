import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArizonaPageRoutingModule } from './arizona-routing.module';

import { ArizonaPage } from './arizona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArizonaPageRoutingModule
  ],
  declarations: [ArizonaPage]
})
export class ArizonaPageModule {}
