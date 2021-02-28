import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GardensPage } from './gardens.page';

const routes: Routes = [
  {
    path: '',
    component: GardensPage
  },
  {
    path: 'botanical',
    loadChildren: () => import('./botanical/botanical.module').then( m => m.BotanicalPageModule)
  },
  {
    path: 'yumi',
    loadChildren: () => import('./yumi/yumi.module').then( m => m.YumiPageModule)
  },
  {
    path: 'tohono',
    loadChildren: () => import('./tohono/tohono.module').then( m => m.TohonoPageModule)
  },
  {
    path: 'gethsemane',
    loadChildren: () => import('./gethsemane/gethsemane.module').then( m => m.GethsemanePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardensPageRoutingModule {}
