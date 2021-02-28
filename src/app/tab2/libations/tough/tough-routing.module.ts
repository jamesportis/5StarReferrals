import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToughPage } from './tough.page';

const routes: Routes = [
  {
    path: '',
    component: ToughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToughPageRoutingModule {}
