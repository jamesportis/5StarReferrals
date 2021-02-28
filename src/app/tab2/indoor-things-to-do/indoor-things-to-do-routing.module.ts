import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndoorThingsToDoPage } from './indoor-things-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: IndoorThingsToDoPage
  },
  {
    path: 'spas',
    loadChildren: () => import('./spas/spas.module').then( m => m.SpasPageModule)
  },
  {
    path: 'museums',
    loadChildren: () => import('./museums/museums.module').then( m => m.MuseumsPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndoorThingsToDoPageRoutingModule {}
