import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclefinderPage } from './cyclefinder.page';

const routes: Routes = [
  {
    path: '',
    component: CyclefinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyclefinderPageRoutingModule {}
