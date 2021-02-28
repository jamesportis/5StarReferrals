import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlueHousePage } from './blue-house.page';

const routes: Routes = [
  {
    path: '',
    component: BlueHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlueHousePageRoutingModule {}
