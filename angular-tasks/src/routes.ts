import { RouterModule, Routes, Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      //   import('./admin/panel.component').then((mod) => mod.AdminPanelComponent),

      import('./app/components/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
  },
];
