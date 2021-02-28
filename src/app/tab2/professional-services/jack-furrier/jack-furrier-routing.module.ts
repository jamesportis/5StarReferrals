import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JackFurrierPage } from './jack-furrier.page';

const routes: Routes = [
  {
    path: '',
    component: JackFurrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JackFurrierPageRoutingModule {}
