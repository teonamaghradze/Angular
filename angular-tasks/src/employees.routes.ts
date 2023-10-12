import { Routes } from '@angular/router';
import { EmployeesComponent } from './app/Features/Employees-feature/components/employees/employees.component';
import { EmployeeDetailsComponent } from './app/Features/Employees-feature/components/employee-details/employee-details.component';

export const EMPLOYEES_ROUTES: Routes = [
  { path: '', component: EmployeesComponent },
  { path: ':id', component: EmployeeDetailsComponent },
];
