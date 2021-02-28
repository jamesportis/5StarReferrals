import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaPage } from './pizza.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaPage
  },
  {
    path: 'rocco',
    loadChildren: () => import('./rocco/rocco.module').then( m => m.RoccoPageModule)
  },
  {
    path: 'flora',
    loadChildren: () => import('./flora/flora.module').then( m => m.FloraPageModule)
  },
  {
    path: 'empire',
    loadChildren: () => import('./empire/empire.module').then( m => m.EmpirePageModule)
  },
  {
    path: 'brooklyn',
    loadChildren: () => import('./brooklyn/brooklyn.module').then( m => m.BrooklynPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaPageRoutingModule {}
