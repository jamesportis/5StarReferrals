import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolmesPage } from './holmes.page';

const routes: Routes = [
  {
    path: '',
    component: HolmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolmesPageRoutingModule {}
