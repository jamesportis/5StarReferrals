import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavayaPage } from './savaya.page';

const routes: Routes = [
  {
    path: '',
    component: SavayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavayaPageRoutingModule {}
