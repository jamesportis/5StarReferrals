import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmphitheaterPage } from './amphitheater.page';

const routes: Routes = [
  {
    path: '',
    component: AmphitheaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmphitheaterPageRoutingModule {}
