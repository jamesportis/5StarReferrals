import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DowntownPage } from './downtown.page';

const routes: Routes = [
  {
    path: '',
    component: DowntownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DowntownPageRoutingModule {}
