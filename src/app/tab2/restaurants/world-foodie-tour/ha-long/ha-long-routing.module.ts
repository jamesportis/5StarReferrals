import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaLongPage } from './ha-long.page';

const routes: Routes = [
  {
    path: '',
    component: HaLongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaLongPageRoutingModule {}
