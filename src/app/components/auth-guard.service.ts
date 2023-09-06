import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {Inject, Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {  // darf man sich einlogen oder nicht
// es ist getstrichen weil schon aalt ist und bald ersetzt sein soll
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}


// Route: Wo du auf die seite gehen kannst
// auth service: Dass sind die 'schlussel' die man braucht die 'türen' in deiner app zu öffnen
