import { Routes } from '@angular/router';
import { loginGuard } from '../../Features/Login-feature/guards/login.guard';
import { authGuard } from '../../Core/guards/auth.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import(
        '../../Features/Login-feature/components/login/login.component'
      ).then((mod) => mod.LoginComponent),
    canActivate: [loginGuard],
  },

  {
    path: 'users',

    loadComponent: () =>
      import(
        '../../Features/Forms-feature/components/users-list/users-list.component'
      ).then((mod) => mod.UsersListComponent),
    canActivate: [authGuard],
  },

  {
    path: 'currency',
    loadComponent: () =>
      import(
        '../../Features/Conventer-feature/currency-conventer/currency-conventer.component'
      ).then((mod) => mod.CurrencyConventerComponent),
    canActivate: [authGuard],
  },

  {
    path: 'employees',
    loadChildren: () =>
      import('../../Features/Employees-feature/routes/employees.routes').then(
        (r) => r.EMPLOYEES_ROUTES
      ),
  },

  {
    path: 'edit/:id',

    loadComponent: () =>
      import(
        '../../Features/Employees-feature/components/edit-employee/edit-employee.component'
      ).then((mod) => mod.EditEmployeeComponent),
  },
];
