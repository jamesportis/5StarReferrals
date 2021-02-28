import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibationsPageRoutingModule } from './libations-routing.module';

import { LibationsPage } from './libations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibationsPageRoutingModule
  ],
  declarations: [LibationsPage]
})
export class LibationsPageModule {}
