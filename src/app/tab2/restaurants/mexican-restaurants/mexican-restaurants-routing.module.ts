import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MexicanRestaurantsPage } from './mexican-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: MexicanRestaurantsPage
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then( m => m.CafePageModule)
  },
  {
    path: 'calle',
    loadChildren: () => import('./calle/calle.module').then( m => m.CallePageModule)
  },
  {
    path: 'minuto',
    loadChildren: () => import('./minuto/minuto.module').then( m => m.MinutoPageModule)
  },
  {
    path: 'elviras',
    loadChildren: () => import('./elviras/elviras.module').then( m => m.ElvirasPageModule)
  },
  {
    path: 'penca',
    loadChildren: () => import('./penca/penca.module').then( m => m.PencaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MexicanRestaurantsPageRoutingModule {}
