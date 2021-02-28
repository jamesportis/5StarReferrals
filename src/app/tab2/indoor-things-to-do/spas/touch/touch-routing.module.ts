import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouchPage } from './touch.page';

const routes: Routes = [
  {
    path: '',
    component: TouchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouchPageRoutingModule {}
