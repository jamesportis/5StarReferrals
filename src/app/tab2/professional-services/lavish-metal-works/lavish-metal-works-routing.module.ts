import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavishMetalWorksPage } from './lavish-metal-works.page';

const routes: Routes = [
  {
    path: '',
    component: LavishMetalWorksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LavishMetalWorksPageRoutingModule {}
