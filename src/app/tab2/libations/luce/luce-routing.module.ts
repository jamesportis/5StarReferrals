import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucePage } from './luce.page';

const routes: Routes = [
  {
    path: '',
    component: LucePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucePageRoutingModule {}
