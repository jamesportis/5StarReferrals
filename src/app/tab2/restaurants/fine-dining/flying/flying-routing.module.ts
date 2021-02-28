import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlyingPage } from './flying.page';

const routes: Routes = [
  {
    path: '',
    component: FlyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlyingPageRoutingModule {}
