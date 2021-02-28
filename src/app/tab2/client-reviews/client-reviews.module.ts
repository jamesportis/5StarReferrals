import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientReviewsPageRoutingModule } from './client-reviews-routing.module';

import { ClientReviewsPage } from './client-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientReviewsPageRoutingModule
  ],
  declarations: [ClientReviewsPage]
})
export class ClientReviewsPageModule {}
