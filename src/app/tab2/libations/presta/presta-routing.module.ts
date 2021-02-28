import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestaPage } from './presta.page';

const routes: Routes = [
  {
    path: '',
    component: PrestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestaPageRoutingModule {}
