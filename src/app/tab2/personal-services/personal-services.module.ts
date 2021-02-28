import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalServicesPageRoutingModule } from './personal-services-routing.module';

import { PersonalServicesPage } from './personal-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalServicesPageRoutingModule
  ],
  declarations: [PersonalServicesPage]
})
export class PersonalServicesPageModule {}
