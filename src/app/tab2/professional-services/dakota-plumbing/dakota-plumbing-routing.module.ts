import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DakotaPlumbingPage } from './dakota-plumbing.page';

const routes: Routes = [
  {
    path: '',
    component: DakotaPlumbingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DakotaPlumbingPageRoutingModule {}
