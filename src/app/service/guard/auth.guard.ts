import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _route: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._loginService.isValidUser) {
      return true;
    }

    this._route.navigate(['/login']);
    return false;
  }
}
