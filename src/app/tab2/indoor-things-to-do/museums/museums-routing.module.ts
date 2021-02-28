import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsPage } from './museums.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumsPage
  },
  {
    path: 'moca',
    loadChildren: () => import('./moca/moca.module').then( m => m.MocaPageModule)
  },
  {
    path: 'art',
    loadChildren: () => import('./art/art.module').then( m => m.ArtPageModule)
  },
  {
    path: 'transportation',
    loadChildren: () => import('./transportation/transportation.module').then( m => m.TransportationPageModule)
  },
  {
    path: 'presidio',
    loadChildren: () => import('./presidio/presidio.module').then( m => m.PresidioPageModule)
  },
  {
    path: 'jewish',
    loadChildren: () => import('./jewish/jewish.module').then( m => m.JewishPageModule)
  },
  {
    path: 'sosa',
    loadChildren: () => import('./sosa/sosa.module').then( m => m.SosaPageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./university/university.module').then( m => m.UniversityPageModule)
  },
  {
    path: 'children',
    loadChildren: () => import('./children/children.module').then( m => m.ChildrenPageModule)
  },
  {
    path: 'gem',
    loadChildren: () => import('./gem/gem.module').then( m => m.GemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumsPageRoutingModule {}
