import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GethsemanePage } from './gethsemane.page';

const routes: Routes = [
  {
    path: '',
    component: GethsemanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GethsemanePageRoutingModule {}
