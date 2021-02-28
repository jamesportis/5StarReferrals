import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoccoPage } from './rocco.page';

const routes: Routes = [
  {
    path: '',
    component: RoccoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoccoPageRoutingModule {}
