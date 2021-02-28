import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoadhousePage } from './roadhouse.page';

const routes: Routes = [
  {
    path: '',
    component: RoadhousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoadhousePageRoutingModule {}
