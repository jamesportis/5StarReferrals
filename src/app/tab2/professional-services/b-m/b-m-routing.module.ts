import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BMPage } from './b-m.page';

const routes: Routes = [
  {
    path: '',
    component: BMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BMPageRoutingModule {}
