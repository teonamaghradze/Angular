import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConventerComponent } from './components/currency-conventer/currency-conventer.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsComponent } from './components/user-forms/forms/forms.component';
import { UsersListComponent } from './components/user-forms/users-list/users-list.component';
import { LoginComponent } from './components/login/login.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { EmployeesComponent } from './components/employees/employees.component';

import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UsersListComponent,
    CurrencyConventerComponent,
    LoginComponent,
    TopBarComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
