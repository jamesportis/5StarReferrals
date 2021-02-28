import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },
  {
    path: 'fine-dining',
    loadChildren: () => import('./fine-dining/fine-dining.module').then( m => m.FineDiningPageModule)
  },
  {
    path: 'world-foodie-tour',
    loadChildren: () => import('./world-foodie-tour/world-foodie-tour.module').then( m => m.WorldFoodieTourPageModule)
  },
  {
    path: 'mexican-restaurants',
    loadChildren: () => import('./mexican-restaurants/mexican-restaurants.module').then( m => m.MexicanRestaurantsPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
