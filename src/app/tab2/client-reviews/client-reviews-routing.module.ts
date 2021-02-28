import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientReviewsPage } from './client-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ClientReviewsPage
  },
  {
    path: 'bustamonte',
    loadChildren: () => import('./bustamonte/bustamonte.module').then( m => m.BustamontePageModule)
  },
  {
    path: 'wallace',
    loadChildren: () => import('./wallace/wallace.module').then( m => m.WallacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientReviewsPageRoutingModule {}
