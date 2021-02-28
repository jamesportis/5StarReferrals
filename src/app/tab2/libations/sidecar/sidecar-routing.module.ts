import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidecarPage } from './sidecar.page';

const routes: Routes = [
  {
    path: '',
    component: SidecarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidecarPageRoutingModule {}
