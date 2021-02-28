import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADTPageRoutingModule } from './adt-routing.module';

import { ADTPage } from './adt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADTPageRoutingModule
  ],
  declarations: [ADTPage]
})
export class ADTPageModule {}
