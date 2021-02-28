import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmalleyPage } from './omalley.page';

const routes: Routes = [
  {
    path: '',
    component: OmalleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmalleyPageRoutingModule {}
