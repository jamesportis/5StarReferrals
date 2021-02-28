import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YumiPageRoutingModule } from './yumi-routing.module';

import { YumiPage } from './yumi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YumiPageRoutingModule
  ],
  declarations: [YumiPage]
})
export class YumiPageModule {}
