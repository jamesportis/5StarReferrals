import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpasPage } from './spas.page';

const routes: Routes = [
  {
    path: '',
    component: SpasPage
  },
  {
    path: 'solai',
    loadChildren: () => import('./solai/solai.module').then( m => m.SolaiPageModule)
  },
  {
    path: 'chambers',
    loadChildren: () => import('./chambers/chambers.module').then( m => m.ChambersPageModule)
  },
  {
    path: 'touch',
    loadChildren: () => import('./touch/touch.module').then( m => m.TouchPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpasPageRoutingModule {}
