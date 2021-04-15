import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuralsPage } from './murals.page';

const routes: Routes = [
  {
    path: '',
    component: MuralsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuralsPageRoutingModule {}
