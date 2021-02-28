import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DakotaPlumbingPageRoutingModule } from './dakota-plumbing-routing.module';

import { DakotaPlumbingPage } from './dakota-plumbing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DakotaPlumbingPageRoutingModule
  ],
  declarations: [DakotaPlumbingPage]
})
export class DakotaPlumbingPageModule {}
