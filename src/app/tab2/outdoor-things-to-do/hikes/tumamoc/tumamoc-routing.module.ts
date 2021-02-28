import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TumamocPage } from './tumamoc.page';

const routes: Routes = [
  {
    path: '',
    component: TumamocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TumamocPageRoutingModule {}
