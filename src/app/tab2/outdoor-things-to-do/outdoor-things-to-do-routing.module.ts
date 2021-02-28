import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutdoorThingsToDoPage } from './outdoor-things-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: OutdoorThingsToDoPage
  },
  {
    path: 'wildflower-spotting',
    loadChildren: () => import('./wildflower-spotting/wildflower-spotting.module').then( m => m.WildflowerSpottingPageModule)
  },
  {
    path: 'reid-park',
    loadChildren: () => import('./reid-park/reid-park.module').then( m => m.ReidParkPageModule)
  },
  {
    path: 'gardens',
    loadChildren: () => import('./gardens/gardens.module').then( m => m.GardensPageModule)
  },
  {
    path: 'hikes',
    loadChildren: () => import('./hikes/hikes.module').then( m => m.HikesPageModule)
  },
  {
    path: 'active',
    loadChildren: () => import('./active/active.module').then( m => m.ActivePageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then( m => m.ToursPageModule)
  },
  {
    path: 'camping',
    loadChildren: () => import('./camping/camping.module').then( m => m.CampingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutdoorThingsToDoPageRoutingModule {}
