import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KristinePage } from './kristine.page';

const routes: Routes = [
  {
    path: '',
    component: KristinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KristinePageRoutingModule {}
