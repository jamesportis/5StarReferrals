import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MexicanRestaurantsPageRoutingModule } from './mexican-restaurants-routing.module';

import { MexicanRestaurantsPage } from './mexican-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MexicanRestaurantsPageRoutingModule
  ],
  declarations: [MexicanRestaurantsPage]
})
export class MexicanRestaurantsPageModule {}
