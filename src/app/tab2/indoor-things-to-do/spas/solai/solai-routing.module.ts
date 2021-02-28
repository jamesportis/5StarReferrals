import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolaiPage } from './solai.page';

const routes: Routes = [
  {
    path: '',
    component: SolaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolaiPageRoutingModule {}
