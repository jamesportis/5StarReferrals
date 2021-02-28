import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SunstreetPage } from './sunstreet.page';

const routes: Routes = [
  {
    path: '',
    component: SunstreetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SunstreetPageRoutingModule {}
