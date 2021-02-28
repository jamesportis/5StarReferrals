import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimoPage } from './primo.page';

const routes: Routes = [
  {
    path: '',
    component: PrimoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimoPageRoutingModule {}
