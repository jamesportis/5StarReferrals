import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndianTwistPage } from './indian-twist.page';

const routes: Routes = [
  {
    path: '',
    component: IndianTwistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndianTwistPageRoutingModule {}
