import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuertoPage } from './puerto.page';

const routes: Routes = [
  {
    path: '',
    component: PuertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuertoPageRoutingModule {}
