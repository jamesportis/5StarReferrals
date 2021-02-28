import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorbettPage } from './corbett.page';

const routes: Routes = [
  {
    path: '',
    component: CorbettPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorbettPageRoutingModule {}
