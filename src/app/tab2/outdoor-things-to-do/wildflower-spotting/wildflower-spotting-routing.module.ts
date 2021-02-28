import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WildflowerSpottingPage } from './wildflower-spotting.page';

const routes: Routes = [
  {
    path: '',
    component: WildflowerSpottingPage
  },
  {
    path: 'catalina',
    loadChildren: () => import('./catalina/catalina.module').then( m => m.CatalinaPageModule)
  },
  {
    path: 'lost',
    loadChildren: () => import('./lost/lost.module').then( m => m.LostPageModule)
  },
  {
    path: 'picacho',
    loadChildren: () => import('./picacho/picacho.module').then( m => m.PicachoPageModule)
  },
  {
    path: 'saguaro',
    loadChildren: () => import('./saguaro/saguaro.module').then( m => m.SaguaroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WildflowerSpottingPageRoutingModule {}
