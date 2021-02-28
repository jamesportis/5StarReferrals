import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FineDiningPage } from './fine-dining.page';

const routes: Routes = [
  {
    path: '',
    component: FineDiningPage
  },
  {
    path: 'maynards',
    loadChildren: () => import('./maynards/maynards.module').then( m => m.MaynardsPageModule)
  },
  {
    path: 'charro',
    loadChildren: () => import('./charro/charro.module').then( m => m.CharroPageModule)
  },
  {
    path: 'charro-steak',
    loadChildren: () => import('./charro-steak/charro-steak.module').then( m => m.CharroSteakPageModule)
  },
  {
    path: 'jonathan',
    loadChildren: () => import('./jonathan/jonathan.module').then( m => m.JonathanPageModule)
  },
  {
    path: 'grill',
    loadChildren: () => import('./grill/grill.module').then( m => m.GrillPageModule)
  },
  {
    path: 'flying',
    loadChildren: () => import('./flying/flying.module').then( m => m.FlyingPageModule)
  },
  {
    path: 'primo',
    loadChildren: () => import('./primo/primo.module').then( m => m.PrimoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FineDiningPageRoutingModule {}
