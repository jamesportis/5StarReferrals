import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScottPage } from './scott.page';

const routes: Routes = [
  {
    path: '',
    component: ScottPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScottPageRoutingModule {}
