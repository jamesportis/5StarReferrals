import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingPage } from './shopping.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingPage
  },
  {
    path: 'old',
    loadChildren: () => import('./old/old.module').then( m => m.OldPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'mercado',
    loadChildren: () => import('./mercado/mercado.module').then( m => m.MercadoPageModule)
  },
  {
    path: 'historic',
    loadChildren: () => import('./historic/historic.module').then( m => m.HistoricPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingPageRoutingModule {}
