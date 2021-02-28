import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DowntownPageRoutingModule } from './downtown-routing.module';

import { DowntownPage } from './downtown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DowntownPageRoutingModule
  ],
  declarations: [DowntownPage]
})
export class DowntownPageModule {}
