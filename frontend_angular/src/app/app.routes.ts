import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing-page.component').then(
        (m) => m.LandingPageComponent,
      ),
  },
  {
    path: 'home-centric-console',
    title: 'Home centric console',
    loadComponent: () =>
      import('./pages/home-centric-console/home-centric-console.component').then(
        (m) => m.HomeCentricConsoleComponent,
      ),
  },
];
