import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArizonaCabinetPage } from './arizona-cabinet.page';

const routes: Routes = [
  {
    path: '',
    component: ArizonaCabinetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArizonaCabinetPageRoutingModule {}
