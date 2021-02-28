import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JewishPageRoutingModule } from './jewish-routing.module';

import { JewishPage } from './jewish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JewishPageRoutingModule
  ],
  declarations: [JewishPage]
})
export class JewishPageModule {}
