import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuertoPageRoutingModule } from './puerto-routing.module';

import { PuertoPage } from './puerto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuertoPageRoutingModule
  ],
  declarations: [PuertoPage]
})
export class PuertoPageModule {}
