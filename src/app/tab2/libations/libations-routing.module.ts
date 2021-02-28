import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibationsPage } from './libations.page';

const routes: Routes = [
  {
    path: '',
    component: LibationsPage
  },
  {
    path: 'savaya',
    loadChildren: () => import('./savaya/savaya.module').then( m => m.SavayaPageModule)
  },
  {
    path: 'decibel',
    loadChildren: () => import('./decibel/decibel.module').then( m => m.DecibelPageModule)
  },
  {
    path: 'luce',
    loadChildren: () => import('./luce/luce.module').then( m => m.LucePageModule)
  },
  {
    path: 'iguana',
    loadChildren: () => import('./iguana/iguana.module').then( m => m.IguanaPageModule)
  },
  {
    path: 'presta',
    loadChildren: () => import('./presta/presta.module').then( m => m.PrestaPageModule)
  },
  {
    path: 'sage',
    loadChildren: () => import('./sage/sage.module').then( m => m.SagePageModule)
  },
  {
    path: 'scott',
    loadChildren: () => import('./scott/scott.module').then( m => m.ScottPageModule)
  },
  {
    path: 'tough',
    loadChildren: () => import('./tough/tough.module').then( m => m.ToughPageModule)
  },
  {
    path: 'sidecar',
    loadChildren: () => import('./sidecar/sidecar.module').then( m => m.SidecarPageModule)
  },
  {
    path: 'sand',
    loadChildren: () => import('./sand/sand.module').then( m => m.SandPageModule)
  },
  {
    path: 'flying',
    loadChildren: () => import('./flying/flying.module').then( m => m.FlyingPageModule)
  },
  {
    path: 'arizona',
    loadChildren: () => import('./arizona/arizona.module').then( m => m.ArizonaPageModule)
  },
  {
    path: 'trident',
    loadChildren: () => import('./trident/trident.module').then( m => m.TridentPageModule)
  },
  {
    path: 'hifi',
    loadChildren: () => import('./hifi/hifi.module').then( m => m.HifiPageModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then( m => m.PlaygroundPageModule)
  },
  {
    path: 'omalley',
    loadChildren: () => import('./omalley/omalley.module').then( m => m.OmalleyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibationsPageRoutingModule {}
