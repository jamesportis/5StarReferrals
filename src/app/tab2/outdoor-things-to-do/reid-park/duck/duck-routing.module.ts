import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuckPage } from './duck.page';

const routes: Routes = [
  {
    path: '',
    component: DuckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuckPageRoutingModule {}
