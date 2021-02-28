import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReidParkPage } from './reid-park.page';

const routes: Routes = [
  {
    path: '',
    component: ReidParkPage
  },
  {
    path: 'swimming',
    loadChildren: () => import('./swimming/swimming.module').then( m => m.SwimmingPageModule)
  },
  {
    path: 'duck',
    loadChildren: () => import('./duck/duck.module').then( m => m.DuckPageModule)
  },
  {
    path: 'zoo',
    loadChildren: () => import('./zoo/zoo.module').then( m => m.ZooPageModule)
  },
  {
    path: 'corbett',
    loadChildren: () => import('./corbett/corbett.module').then( m => m.CorbettPageModule)
  },
  {
    path: 'amphitheater',
    loadChildren: () => import('./amphitheater/amphitheater.module').then( m => m.AmphitheaterPageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('./rose/rose.module').then( m => m.RosePageModule)
  },
  {
    path: 'dog',
    loadChildren: () => import('./dog/dog.module').then( m => m.DogPageModule)
  },
  {
    path: 'children',
    loadChildren: () => import('./children/children.module').then( m => m.ChildrenPageModule)
  },
  {
    path: 'train',
    loadChildren: () => import('./train/train.module').then( m => m.TrainPageModule)
  },
  {
    path: 'golf',
    loadChildren: () => import('./golf/golf.module').then( m => m.GolfPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReidParkPageRoutingModule {}
