import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JewishPage } from './jewish.page';

const routes: Routes = [
  {
    path: '',
    component: JewishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JewishPageRoutingModule {}
