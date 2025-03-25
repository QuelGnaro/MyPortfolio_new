import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/my-services/my-services.module').then(m => m.MyServicesModule)
      },
      {
        path: 'project/:id',
        loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
      },
      {
        path: 'anime-list',
        loadChildren: () => import('./pages/anime/anime.module').then(m => m.AnimeModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
