import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuntasticsPage } from './funtastics.page';

const routes: Routes = [
  {
    path: '',
    component: FuntasticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuntasticsPageRoutingModule {}
