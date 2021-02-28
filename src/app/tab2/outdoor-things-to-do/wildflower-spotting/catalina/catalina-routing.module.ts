import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalinaPage } from './catalina.page';

const routes: Routes = [
  {
    path: '',
    component: CatalinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalinaPageRoutingModule {}
