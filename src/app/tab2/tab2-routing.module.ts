import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'personal-services',
    loadChildren: () => import('./personal-services/personal-services.module').then( m => m.PersonalServicesPageModule)
  },
  {
    path: 'professional-services',
    loadChildren: () => import('./professional-services/professional-services.module').then( m => m.ProfessionalServicesPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'real-estate-services',
    loadChildren: () => import('./real-estate-services/real-estate-services.module').then( m => m.RealEstateServicesPageModule)
  },
  {
    path: 'libations',
    loadChildren: () => import('./libations/libations.module').then( m => m.LibationsPageModule)
  },
  {
    path: 'indoor-things-to-do',
    loadChildren: () => import('./indoor-things-to-do/indoor-things-to-do.module').then( m => m.IndoorThingsToDoPageModule)
  },
  {
    path: 'outdoor-things-to-do',
    loadChildren: () => import('./outdoor-things-to-do/outdoor-things-to-do.module').then( m => m.OutdoorThingsToDoPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'client-reviews',
    loadChildren: () => import('./client-reviews/client-reviews.module').then( m => m.ClientReviewsPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then( m => m.AppsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
