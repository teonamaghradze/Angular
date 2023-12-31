import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/Core/components/app-component/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { EmployeeService } from './app/Features/Employees-feature/services/employee.service';

import { provideRouter } from '@angular/router';

import { ROUTES } from './app/Shared/routes/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),

    importProvidersFrom(BrowserModule, FormsModule, ReactiveFormsModule),
    EmployeeService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
