import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HikesPage } from './hikes.page';

const routes: Routes = [
  {
    path: '',
    component: HikesPage
  },
  {
    path: 'madera',
    loadChildren: () => import('./madera/madera.module').then( m => m.MaderaPageModule)
  },
  {
    path: 'sabino',
    loadChildren: () => import('./sabino/sabino.module').then( m => m.SabinoPageModule)
  },
  {
    path: 'reddington',
    loadChildren: () => import('./reddington/reddington.module').then( m => m.ReddingtonPageModule)
  },
  {
    path: 'tumamoc',
    loadChildren: () => import('./tumamoc/tumamoc.module').then( m => m.TumamocPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HikesPageRoutingModule {}
