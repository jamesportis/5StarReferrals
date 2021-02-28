import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JonathanPageRoutingModule } from './jonathan-routing.module';

import { JonathanPage } from './jonathan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JonathanPageRoutingModule
  ],
  declarations: [JonathanPage]
})
export class JonathanPageModule {}
