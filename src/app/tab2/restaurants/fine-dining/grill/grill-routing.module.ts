import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrillPage } from './grill.page';

const routes: Routes = [
  {
    path: '',
    component: GrillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrillPageRoutingModule {}
