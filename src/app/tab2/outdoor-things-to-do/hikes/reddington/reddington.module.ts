import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReddingtonPageRoutingModule } from './reddington-routing.module';

import { ReddingtonPage } from './reddington.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReddingtonPageRoutingModule
  ],
  declarations: [ReddingtonPage]
})
export class ReddingtonPageModule {}
