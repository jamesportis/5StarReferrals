import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RitaPage } from './rita.page';

const routes: Routes = [
  {
    path: '',
    component: RitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RitaPageRoutingModule {}
