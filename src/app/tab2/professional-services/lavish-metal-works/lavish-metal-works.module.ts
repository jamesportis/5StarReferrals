import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LavishMetalWorksPageRoutingModule } from './lavish-metal-works-routing.module';

import { LavishMetalWorksPage } from './lavish-metal-works.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LavishMetalWorksPageRoutingModule
  ],
  declarations: [LavishMetalWorksPage]
})
export class LavishMetalWorksPageModule {}
