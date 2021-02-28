import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoftPage } from './loft.page';

const routes: Routes = [
  {
    path: '',
    component: LoftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoftPageRoutingModule {}
