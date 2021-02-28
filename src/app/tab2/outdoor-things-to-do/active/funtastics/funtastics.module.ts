import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuntasticsPageRoutingModule } from './funtastics-routing.module';

import { FuntasticsPage } from './funtastics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuntasticsPageRoutingModule
  ],
  declarations: [FuntasticsPage]
})
export class FuntasticsPageModule {}
