import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreetcarPage } from './streetcar.page';

const routes: Routes = [
  {
    path: '',
    component: StreetcarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreetcarPageRoutingModule {}
