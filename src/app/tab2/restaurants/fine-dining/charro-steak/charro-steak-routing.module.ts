import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharroSteakPage } from './charro-steak.page';

const routes: Routes = [
  {
    path: '',
    component: CharroSteakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharroSteakPageRoutingModule {}
