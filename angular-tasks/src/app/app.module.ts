import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConventerComponent } from './currency-conventer/currency-conventer.component';

import { ReactiveFormsModule } from '@angular/forms';

import { FormsComponent } from '../app/user-forms/forms/forms.component';
import { UsersListComponent } from '../app/user-forms/users-list/users-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UsersListComponent,
    CurrencyConventerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
