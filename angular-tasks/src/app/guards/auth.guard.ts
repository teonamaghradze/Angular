import { CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserDataService);

  if (service.getIsLoggedIn()) {
    return false;
  } else {
    return true;
  }
};
