import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TombstonePage } from './tombstone.page';

const routes: Routes = [
  {
    path: '',
    component: TombstonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TombstonePageRoutingModule {}
