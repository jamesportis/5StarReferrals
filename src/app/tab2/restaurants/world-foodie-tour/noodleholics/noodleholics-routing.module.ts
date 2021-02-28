import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoodleholicsPage } from './noodleholics.page';

const routes: Routes = [
  {
    path: '',
    component: NoodleholicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoodleholicsPageRoutingModule {}
