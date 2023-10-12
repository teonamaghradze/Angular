import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { UserDataService } from '../../Shared/services/user-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserDataService);
  const router = inject(Router);

  if (service.getIsLoggedIn()) {
    return true;
  } else {
    return false;
  }
};
