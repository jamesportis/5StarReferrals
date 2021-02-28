import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalServicesPage } from './personal-services.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalServicesPage
  },
  {
    path: 'presidio',
    loadChildren: () => import('./presidio/presidio.module').then( m => m.PresidioPageModule)
  },
  {
    path: 'rita',
    loadChildren: () => import('./rita/rita.module').then( m => m.RitaPageModule)
  },
  {
    path: 'eye',
    loadChildren: () => import('./eye/eye.module').then( m => m.EyePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalServicesPageRoutingModule {}
