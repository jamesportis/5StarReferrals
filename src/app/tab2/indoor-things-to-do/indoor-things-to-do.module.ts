import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndoorThingsToDoPageRoutingModule } from './indoor-things-to-do-routing.module';

import { IndoorThingsToDoPage } from './indoor-things-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndoorThingsToDoPageRoutingModule
  ],
  declarations: [IndoorThingsToDoPage]
})
export class IndoorThingsToDoPageModule {}
