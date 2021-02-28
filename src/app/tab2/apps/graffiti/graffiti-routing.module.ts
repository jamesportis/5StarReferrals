import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraffitiPage } from './graffiti.page';

const routes: Routes = [
  {
    path: '',
    component: GraffitiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraffitiPageRoutingModule {}
