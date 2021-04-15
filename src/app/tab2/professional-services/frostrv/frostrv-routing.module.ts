import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrostrvPage } from './frostrv.page';

const routes: Routes = [
  {
    path: '',
    component: FrostrvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrostrvPageRoutingModule {}
