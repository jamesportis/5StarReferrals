import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeroPage } from './vero.page';

const routes: Routes = [
  {
    path: '',
    component: VeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeroPageRoutingModule {}
