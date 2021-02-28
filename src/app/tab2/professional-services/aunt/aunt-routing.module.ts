import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuntPage } from './aunt.page';

const routes: Routes = [
  {
    path: '',
    component: AuntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuntPageRoutingModule {}
