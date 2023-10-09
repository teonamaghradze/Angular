import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/user-forms/users-list/users-list.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { CurrencyConventerComponent } from './components/currency-conventer/currency-conventer.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
  {
    path: 'currency',
    component: CurrencyConventerComponent,
    canActivate: [authGuard],
  },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
