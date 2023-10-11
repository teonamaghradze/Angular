import { Routes } from '@angular/router';
import { EmployeesComponent } from './app/components/employees/employees.component';
import { EmployeeDetailsComponent } from './app/components/employee-details/employee-details.component';

export const EMPLOYEES_ROUTES: Routes = [
  { path: '', component: EmployeesComponent },
  { path: ':id', component: EmployeeDetailsComponent },
];
