import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { EmployeeService } from './app/services/employee.service';

import { provideRouter } from '@angular/router';

import { ROUTES } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),

    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ),
    EmployeeService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
