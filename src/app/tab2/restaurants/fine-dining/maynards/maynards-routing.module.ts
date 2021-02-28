import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaynardsPage } from './maynards.page';

const routes: Routes = [
  {
    path: '',
    component: MaynardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaynardsPageRoutingModule {}
