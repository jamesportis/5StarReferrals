import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldFoodieTourPage } from './world-foodie-tour.page';

const routes: Routes = [
  {
    path: '',
    component: WorldFoodieTourPage
  },
  {
    path: 'zemams',
    loadChildren: () => import('./zemams/zemams.module').then( m => m.ZemamsPageModule)
  },
  {
    path: 'shish',
    loadChildren: () => import('./shish/shish.module').then( m => m.ShishPageModule)
  },
  {
    path: 'vero',
    loadChildren: () => import('./vero/vero.module').then( m => m.VeroPageModule)
  },
  {
    path: 'senae',
    loadChildren: () => import('./senae/senae.module').then( m => m.SenaePageModule)
  },
  {
    path: 'parish',
    loadChildren: () => import('./parish/parish.module').then( m => m.ParishPageModule)
  },
  {
    path: 'polish',
    loadChildren: () => import('./polish/polish.module').then( m => m.PolishPageModule)
  },
  {
    path: 'ha-long',
    loadChildren: () => import('./ha-long/ha-long.module').then( m => m.HaLongPageModule)
  },
  {
    path: 'indian-twist',
    loadChildren: () => import('./indian-twist/indian-twist.module').then( m => m.IndianTwistPageModule)
  },
  {
    path: 'villa',
    loadChildren: () => import('./villa/villa.module').then( m => m.VillaPageModule)
  },
  {
    path: 'rendezvous',
    loadChildren: () => import('./rendezvous/rendezvous.module').then( m => m.RendezvousPageModule)
  },
  {
    path: 'mamas',
    loadChildren: () => import('./mamas/mamas.module').then( m => m.MamasPageModule)
  },
  {
    path: 'sushi',
    loadChildren: () => import('./sushi/sushi.module').then( m => m.SushiPageModule)
  },
  {
    path: 'raijin',
    loadChildren: () => import('./raijin/raijin.module').then( m => m.RaijinPageModule)
  },
  {
    path: 'noodleholics',
    loadChildren: () => import('./noodleholics/noodleholics.module').then( m => m.NoodleholicsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldFoodieTourPageRoutingModule {}
