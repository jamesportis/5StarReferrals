import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JonathanPage } from './jonathan.page';

const routes: Routes = [
  {
    path: '',
    component: JonathanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JonathanPageRoutingModule {}
