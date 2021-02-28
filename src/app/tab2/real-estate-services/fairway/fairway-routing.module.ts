import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FairwayPage } from './fairway.page';

const routes: Routes = [
  {
    path: '',
    component: FairwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FairwayPageRoutingModule {}
