import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../components/login/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User[] = [
    {
    email: '',
    password: ''
  }
  ];

  isLoggedIn = false;

  constructor(private router: Router) {
  }

  public login() {
    this.isLoggedIn = true;
    this.router.navigate(['home']);
  }

  public logout() {
    this.isLoggedIn = false;
  }


}
