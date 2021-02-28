import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaijinPageRoutingModule } from './raijin-routing.module';

import { RaijinPage } from './raijin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaijinPageRoutingModule
  ],
  declarations: [RaijinPage]
})
export class RaijinPageModule {}
