import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RooseveltPage } from './roosevelt.page';

const routes: Routes = [
  {
    path: '',
    component: RooseveltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RooseveltPageRoutingModule {}
