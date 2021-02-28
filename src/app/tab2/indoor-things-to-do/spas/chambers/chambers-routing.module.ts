import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChambersPage } from './chambers.page';

const routes: Routes = [
  {
    path: '',
    component: ChambersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChambersPageRoutingModule {}
