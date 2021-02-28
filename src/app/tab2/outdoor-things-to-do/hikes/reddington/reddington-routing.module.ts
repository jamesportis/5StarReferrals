import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReddingtonPage } from './reddington.page';

const routes: Routes = [
  {
    path: '',
    component: ReddingtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReddingtonPageRoutingModule {}
