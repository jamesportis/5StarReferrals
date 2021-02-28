import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HifiPage } from './hifi.page';

const routes: Routes = [
  {
    path: '',
    component: HifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HifiPageRoutingModule {}
