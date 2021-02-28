import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TridentPage } from './trident.page';

const routes: Routes = [
  {
    path: '',
    component: TridentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TridentPageRoutingModule {}
