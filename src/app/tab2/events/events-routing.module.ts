import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },
  {
    path: 'this',
    loadChildren: () => import('./this/this.module').then( m => m.ThisPageModule)
  },
  {
    path: 'visit',
    loadChildren: () => import('./visit/visit.module').then( m => m.VisitPageModule)
  },
  {
    path: 'downtown',
    loadChildren: () => import('./downtown/downtown.module').then( m => m.DowntownPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
