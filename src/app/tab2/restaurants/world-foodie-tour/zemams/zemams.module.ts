import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZemamsPageRoutingModule } from './zemams-routing.module';

import { ZemamsPage } from './zemams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZemamsPageRoutingModule
  ],
  declarations: [ZemamsPage]
})
export class ZemamsPageModule {}
