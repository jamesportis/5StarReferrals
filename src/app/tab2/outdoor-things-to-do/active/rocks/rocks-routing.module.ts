import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RocksPage } from './rocks.page';

const routes: Routes = [
  {
    path: '',
    component: RocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocksPageRoutingModule {}
