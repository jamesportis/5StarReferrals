import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarchettiPage } from './marchetti.page';

const routes: Routes = [
  {
    path: '',
    component: MarchettiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarchettiPageRoutingModule {}
