import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermagonPage } from './termagon.page';

const routes: Routes = [
  {
    path: '',
    component: TermagonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermagonPageRoutingModule {}
