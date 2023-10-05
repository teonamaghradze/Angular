import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { FormsComponent } from './components/user-forms/forms/forms.component';
import { UsersListComponent } from './components/user-forms/users-list/users-list.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { CurrencyConventerComponent } from './components/currency-conventer/currency-conventer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
  {
    path: 'currency',
    component: CurrencyConventerComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
