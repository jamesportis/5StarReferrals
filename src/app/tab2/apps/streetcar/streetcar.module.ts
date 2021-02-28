import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreetcarPageRoutingModule } from './streetcar-routing.module';

import { StreetcarPage } from './streetcar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetcarPageRoutingModule
  ],
  declarations: [StreetcarPage]
})
export class StreetcarPageModule {}
