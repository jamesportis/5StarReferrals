import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivePage } from './active.page';

const routes: Routes = [
  {
    path: '',
    component: ActivePage
  },
  {
    path: 'golf',
    loadChildren: () => import('./golf/golf.module').then( m => m.GolfPageModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./get/get.module').then( m => m.GetPageModule)
  },
  {
    path: 'funtastics',
    loadChildren: () => import('./funtastics/funtastics.module').then( m => m.FuntasticsPageModule)
  },
  {
    path: 'rocks',
    loadChildren: () => import('./rocks/rocks.module').then( m => m.RocksPageModule)
  },
  {
    path: 'murals',
    loadChildren: () => import('./murals/murals.module').then( m => m.MuralsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivePageRoutingModule {}
