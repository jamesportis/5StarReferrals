import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouchPageRoutingModule } from './touch-routing.module';

import { TouchPage } from './touch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouchPageRoutingModule
  ],
  declarations: [TouchPage]
})
export class TouchPageModule {}
