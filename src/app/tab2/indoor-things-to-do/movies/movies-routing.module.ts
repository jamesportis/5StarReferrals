import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  },
  {
    path: 'screening',
    loadChildren: () => import('./screening/screening.module').then( m => m.ScreeningPageModule)
  },
  {
    path: 'roadhouse',
    loadChildren: () => import('./roadhouse/roadhouse.module').then( m => m.RoadhousePageModule)
  },
  {
    path: 'century',
    loadChildren: () => import('./century/century.module').then( m => m.CenturyPageModule)
  },
  {
    path: 'loft',
    loadChildren: () => import('./loft/loft.module').then( m => m.LoftPageModule)
  },
  {
    path: 'galaxy',
    loadChildren: () => import('./galaxy/galaxy.module').then( m => m.GalaxyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
