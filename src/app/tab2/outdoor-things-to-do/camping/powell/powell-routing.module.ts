import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowellPage } from './powell.page';

const routes: Routes = [
  {
    path: '',
    component: PowellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PowellPageRoutingModule {}
