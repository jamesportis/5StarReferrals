import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldFoodieTourPageRoutingModule } from './world-foodie-tour-routing.module';

import { WorldFoodieTourPage } from './world-foodie-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldFoodieTourPageRoutingModule
  ],
  declarations: [WorldFoodieTourPage]
})
export class WorldFoodieTourPageModule {}
