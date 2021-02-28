import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADTPage } from './adt.page';

const routes: Routes = [
  {
    path: '',
    component: ADTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADTPageRoutingModule {}
