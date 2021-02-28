import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharroPage } from './charro.page';

const routes: Routes = [
  {
    path: '',
    component: CharroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharroPageRoutingModule {}
