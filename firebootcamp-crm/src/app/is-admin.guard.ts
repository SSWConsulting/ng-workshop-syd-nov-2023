import { CanActivateFn } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const now = new Date();
  const seconds = now.getSeconds();
  return seconds < 30;
};
