import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrooklynPage } from './brooklyn.page';

const routes: Routes = [
  {
    path: '',
    component: BrooklynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrooklynPageRoutingModule {}
