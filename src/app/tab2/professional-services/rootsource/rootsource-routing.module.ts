import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootsourcePage } from './rootsource.page';

const routes: Routes = [
  {
    path: '',
    component: RootsourcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootsourcePageRoutingModule {}
