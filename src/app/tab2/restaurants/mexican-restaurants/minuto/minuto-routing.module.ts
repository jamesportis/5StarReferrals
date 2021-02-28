import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinutoPage } from './minuto.page';

const routes: Routes = [
  {
    path: '',
    component: MinutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinutoPageRoutingModule {}
