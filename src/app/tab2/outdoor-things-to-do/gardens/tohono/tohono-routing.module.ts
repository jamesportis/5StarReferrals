import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TohonoPage } from './tohono.page';

const routes: Routes = [
  {
    path: '',
    component: TohonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TohonoPageRoutingModule {}
