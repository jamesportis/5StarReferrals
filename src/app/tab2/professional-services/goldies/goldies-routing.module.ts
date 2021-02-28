import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoldiesPage } from './goldies.page';

const routes: Routes = [
  {
    path: '',
    component: GoldiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoldiesPageRoutingModule {}
