import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WallacePage } from './wallace.page';

const routes: Routes = [
  {
    path: '',
    component: WallacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WallacePageRoutingModule {}
