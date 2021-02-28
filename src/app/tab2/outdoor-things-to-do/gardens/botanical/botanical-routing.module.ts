import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotanicalPage } from './botanical.page';

const routes: Routes = [
  {
    path: '',
    component: BotanicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotanicalPageRoutingModule {}
