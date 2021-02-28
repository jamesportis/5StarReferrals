import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealEstateServicesPageRoutingModule } from './real-estate-services-routing.module';

import { RealEstateServicesPage } from './real-estate-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealEstateServicesPageRoutingModule
  ],
  declarations: [RealEstateServicesPage]
})
export class RealEstateServicesPageModule {}
