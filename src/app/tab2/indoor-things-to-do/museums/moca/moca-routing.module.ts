import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MocaPage } from './moca.page';

const routes: Routes = [
  {
    path: '',
    component: MocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MocaPageRoutingModule {}
