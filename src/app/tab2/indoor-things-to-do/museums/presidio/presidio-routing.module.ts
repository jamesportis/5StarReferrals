import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresidioPage } from './presidio.page';

const routes: Routes = [
  {
    path: '',
    component: PresidioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresidioPageRoutingModule {}
