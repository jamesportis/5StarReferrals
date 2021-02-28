import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElvirasPage } from './elviras.page';

const routes: Routes = [
  {
    path: '',
    component: ElvirasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElvirasPageRoutingModule {}
