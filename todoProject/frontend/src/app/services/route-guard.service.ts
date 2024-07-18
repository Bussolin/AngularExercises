import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { HardAuthenticationService } from './hard-authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  private authenticate = inject(HardAuthenticationService);
  private router = inject(Router);

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.authenticate.isUserLoggedIn()){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
