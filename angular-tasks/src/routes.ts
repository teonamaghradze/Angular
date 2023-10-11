import { Routes } from '@angular/router';
import { loginGuard } from './app/guards/login.guard';
import { authGuard } from './app/guards/auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./app/components/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
    canActivate: [loginGuard],
  },

  {
    path: 'users',

    loadComponent: () =>
      import(
        './app/components/user-forms/users-list/users-list.component'
      ).then((mod) => mod.UsersListComponent),
    canActivate: [authGuard],
  },

  {
    path: 'currency',
    loadComponent: () =>
      import(
        './app/components/currency-conventer/currency-conventer.component'
      ).then((mod) => mod.CurrencyConventerComponent),
    canActivate: [authGuard],
  },

  {
    path: 'employees',
    loadChildren: () =>
      import('./employees.routes').then((r) => r.EMPLOYEES_ROUTES),
  },

  {
    path: 'edit/:id',

    loadComponent: () =>
      import('./app/components/edit-employee/edit-employee.component').then(
        (mod) => mod.EditEmployeeComponent
      ),
  },
];
