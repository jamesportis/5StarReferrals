import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutdoorThingsToDoPageRoutingModule } from './outdoor-things-to-do-routing.module';

import { OutdoorThingsToDoPage } from './outdoor-things-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutdoorThingsToDoPageRoutingModule
  ],
  declarations: [OutdoorThingsToDoPage]
})
export class OutdoorThingsToDoPageModule {}
