import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstateServicesPage } from './real-estate-services.page';

const routes: Routes = [
  {
    path: '',
    component: RealEstateServicesPage
  },
  {
    path: 'stages',
    loadChildren: () => import('./stages/stages.module').then( m => m.StagesPageModule)
  },
  {
    path: 'sunstreet',
    loadChildren: () => import('./sunstreet/sunstreet.module').then( m => m.SunstreetPageModule)
  },
  {
    path: 'fidelity',
    loadChildren: () => import('./fidelity/fidelity.module').then( m => m.FidelityPageModule)
  },
  {
    path: 'nova',
    loadChildren: () => import('./nova/nova.module').then( m => m.NovaPageModule)
  },
  {
    path: 'fairway',
    loadChildren: () => import('./fairway/fairway.module').then( m => m.FairwayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateServicesPageRoutingModule {}
