import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabinoPage } from './sabino.page';

const routes: Routes = [
  {
    path: '',
    component: SabinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SabinoPageRoutingModule {}
