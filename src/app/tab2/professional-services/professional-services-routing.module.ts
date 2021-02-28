import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalServicesPage } from './professional-services.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalServicesPage
  },
  {
    path: 'adt',
    loadChildren: () => import('./adt/adt.module').then( m => m.ADTPageModule)
  },
  {
    path: 'american',
    loadChildren: () => import('./american/american.module').then( m => m.AmericanPageModule)
  },
  {
    path: 'a-pro',
    loadChildren: () => import('./a-pro/a-pro.module').then( m => m.AProPageModule)
  },
  {
    path: 'arizona-cabinet',
    loadChildren: () => import('./arizona-cabinet/arizona-cabinet.module').then( m => m.ArizonaCabinetPageModule)
  },
  {
    path: 'aunt',
    loadChildren: () => import('./aunt/aunt.module').then( m => m.AuntPageModule)
  },
  {
    path: 'ben-cardenas',
    loadChildren: () => import('./ben-cardenas/ben-cardenas.module').then( m => m.BenCardenasPageModule)
  },
  {
    path: 'blue-house',
    loadChildren: () => import('./blue-house/blue-house.module').then( m => m.BlueHousePageModule)
  },
  {
    path: 'b-m',
    loadChildren: () => import('./b-m/b-m.module').then( m => m.BMPageModule)
  },
  {
    path: 'dakota-plumbing',
    loadChildren: () => import('./dakota-plumbing/dakota-plumbing.module').then( m => m.DakotaPlumbingPageModule)
  },
  {
    path: 'jack-furrier',
    loadChildren: () => import('./jack-furrier/jack-furrier.module').then( m => m.JackFurrierPageModule)
  },
  {
    path: 'masonry',
    loadChildren: () => import('./masonry/masonry.module').then( m => m.MasonryPageModule)
  },
  {
    path: 'zona-concrete',
    loadChildren: () => import('./zona-concrete/zona-concrete.module').then( m => m.ZonaConcretePageModule)
  },
  {
    path: 'lavish-metal-works',
    loadChildren: () => import('./lavish-metal-works/lavish-metal-works.module').then( m => m.LavishMetalWorksPageModule)
  },
  {
    path: 'window',
    loadChildren: () => import('./window/window.module').then( m => m.WindowPageModule)
  },
  {
    path: 'rootsource',
    loadChildren: () => import('./rootsource/rootsource.module').then( m => m.RootsourcePageModule)
  },
  {
    path: 'termagon',
    loadChildren: () => import('./termagon/termagon.module').then( m => m.TermagonPageModule)
  },
  {
    path: 'kristine',
    loadChildren: () => import('./kristine/kristine.module').then( m => m.KristinePageModule)
  },
  {
    path: 'marchetti',
    loadChildren: () => import('./marchetti/marchetti.module').then( m => m.MarchettiPageModule)
  },
  {
    path: 'caps',
    loadChildren: () => import('./caps/caps.module').then( m => m.CapsPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'goldies',
    loadChildren: () => import('./goldies/goldies.module').then( m => m.GoldiesPageModule)
  },
  {
    path: 'holmes',
    loadChildren: () => import('./holmes/holmes.module').then( m => m.HolmesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessionalServicesPageRoutingModule {}
