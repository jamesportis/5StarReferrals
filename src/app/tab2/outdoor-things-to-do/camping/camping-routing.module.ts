import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampingPage } from './camping.page';

const routes: Routes = [
  {
    path: '',
    component: CampingPage
  },
  {
    path: 'powell',
    loadChildren: () => import('./powell/powell.module').then( m => m.PowellPageModule)
  },
  {
    path: 'roosevelt',
    loadChildren: () => import('./roosevelt/roosevelt.module').then( m => m.RooseveltPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampingPageRoutingModule {}
