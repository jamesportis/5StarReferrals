import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugoPage } from './tugo.page';

const routes: Routes = [
  {
    path: '',
    component: TugoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugoPageRoutingModule {}
