import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaguaroPage } from './saguaro.page';

const routes: Routes = [
  {
    path: '',
    component: SaguaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaguaroPageRoutingModule {}
