import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresidioPageRoutingModule } from './presidio-routing.module';

import { PresidioPage } from './presidio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresidioPageRoutingModule
  ],
  declarations: [PresidioPage]
})
export class PresidioPageModule {}
