import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsPage } from './groups.page';

const routes: Routes = [
  {
    path: '',
    component: GroupsPage
  },
  {
    path: 'knights',
    loadChildren: () => import('./knights/knights.module').then( m => m.KnightsPageModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./pet/pet.module').then( m => m.PetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsPageRoutingModule {}
