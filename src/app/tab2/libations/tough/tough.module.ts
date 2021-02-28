import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToughPageRoutingModule } from './tough-routing.module';

import { ToughPage } from './tough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToughPageRoutingModule
  ],
  declarations: [ToughPage]
})
export class ToughPageModule {}
