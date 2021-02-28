import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppsPage } from './apps.page';

const routes: Routes = [
  {
    path: '',
    component: AppsPage
  },
  {
    path: 'tugo',
    loadChildren: () => import('./tugo/tugo.module').then( m => m.TugoPageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'cyclefinder',
    loadChildren: () => import('./cyclefinder/cyclefinder.module').then( m => m.CyclefinderPageModule)
  },
  {
    path: 'streetcar',
    loadChildren: () => import('./streetcar/streetcar.module').then( m => m.StreetcarPageModule)
  },
  {
    path: 'bird',
    loadChildren: () => import('./bird/bird.module').then( m => m.BirdPageModule)
  },
  {
    path: 'razor',
    loadChildren: () => import('./razor/razor.module').then( m => m.RazorPageModule)
  },
  {
    path: 'transit',
    loadChildren: () => import('./transit/transit.module').then( m => m.TransitPageModule)
  },
  {
    path: 'graffiti',
    loadChildren: () => import('./graffiti/graffiti.module').then( m => m.GraffitiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsPageRoutingModule {}
