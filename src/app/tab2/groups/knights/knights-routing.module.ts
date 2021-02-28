import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnightsPage } from './knights.page';

const routes: Routes = [
  {
    path: '',
    component: KnightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnightsPageRoutingModule {}
