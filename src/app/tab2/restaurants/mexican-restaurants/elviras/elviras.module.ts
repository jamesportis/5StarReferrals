import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElvirasPageRoutingModule } from './elviras-routing.module';

import { ElvirasPage } from './elviras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElvirasPageRoutingModule
  ],
  declarations: [ElvirasPage]
})
export class ElvirasPageModule {}
