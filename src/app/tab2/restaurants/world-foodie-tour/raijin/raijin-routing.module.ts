import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaijinPage } from './raijin.page';

const routes: Routes = [
  {
    path: '',
    component: RaijinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaijinPageRoutingModule {}
