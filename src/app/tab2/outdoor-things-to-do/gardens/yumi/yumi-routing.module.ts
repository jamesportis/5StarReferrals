import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YumiPage } from './yumi.page';

const routes: Routes = [
  {
    path: '',
    component: YumiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YumiPageRoutingModule {}
