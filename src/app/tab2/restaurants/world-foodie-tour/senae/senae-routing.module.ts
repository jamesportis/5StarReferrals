import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenaePage } from './senae.page';

const routes: Routes = [
  {
    path: '',
    component: SenaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenaePageRoutingModule {}
