import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemPage } from './gem.page';

const routes: Routes = [
  {
    path: '',
    component: GemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemPageRoutingModule {}
