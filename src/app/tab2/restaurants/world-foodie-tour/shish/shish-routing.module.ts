import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShishPage } from './shish.page';

const routes: Routes = [
  {
    path: '',
    component: ShishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShishPageRoutingModule {}
