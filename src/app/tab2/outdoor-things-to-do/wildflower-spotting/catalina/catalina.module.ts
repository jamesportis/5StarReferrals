import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalinaPageRoutingModule } from './catalina-routing.module';

import { CatalinaPage } from './catalina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalinaPageRoutingModule
  ],
  declarations: [CatalinaPage]
})
export class CatalinaPageModule {}
