import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavayaPageRoutingModule } from './savaya-routing.module';

import { SavayaPage } from './savaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavayaPageRoutingModule
  ],
  declarations: [SavayaPage]
})
export class SavayaPageModule {}
