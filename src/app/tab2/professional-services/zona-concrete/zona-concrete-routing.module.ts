import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonaConcretePage } from './zona-concrete.page';

const routes: Routes = [
  {
    path: '',
    component: ZonaConcretePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonaConcretePageRoutingModule {}
