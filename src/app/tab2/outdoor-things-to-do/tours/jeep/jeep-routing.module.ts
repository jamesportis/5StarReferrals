import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeepPage } from './jeep.page';

const routes: Routes = [
  {
    path: '',
    component: JeepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeepPageRoutingModule {}
