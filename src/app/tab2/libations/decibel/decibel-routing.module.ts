import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecibelPage } from './decibel.page';

const routes: Routes = [
  {
    path: '',
    component: DecibelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecibelPageRoutingModule {}
