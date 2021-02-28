import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToursPage } from './tours.page';

const routes: Routes = [
  {
    path: '',
    component: ToursPage
  },
  {
    path: 'bike',
    loadChildren: () => import('./bike/bike.module').then( m => m.BikePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'jeep',
    loadChildren: () => import('./jeep/jeep.module').then( m => m.JeepPageModule)
  },
  {
    path: 'tombstone',
    loadChildren: () => import('./tombstone/tombstone.module').then( m => m.TombstonePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursPageRoutingModule {}
