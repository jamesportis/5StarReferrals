import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PencaPage } from './penca.page';

const routes: Routes = [
  {
    path: '',
    component: PencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PencaPageRoutingModule {}
