import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArizonaPage } from './arizona.page';

const routes: Routes = [
  {
    path: '',
    component: ArizonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArizonaPageRoutingModule {}
