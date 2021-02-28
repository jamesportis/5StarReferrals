import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenCardenasPage } from './ben-cardenas.page';

const routes: Routes = [
  {
    path: '',
    component: BenCardenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenCardenasPageRoutingModule {}
