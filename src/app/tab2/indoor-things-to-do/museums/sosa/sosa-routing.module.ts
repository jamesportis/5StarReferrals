import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosaPage } from './sosa.page';

const routes: Routes = [
  {
    path: '',
    component: SosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosaPageRoutingModule {}
