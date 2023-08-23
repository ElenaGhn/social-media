import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../components/login/User";
import firebase from "firebase/compat";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  savedUsers: { email: string, password: string }[] = [];
  isLoggedIn = false;
  user: { email: string, password: string }[] = [];

  constructor(private router: Router) {
  }

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['home']);
  }


  saveUser(newUser: User, password: any) {
    const savedUsers = this.getSavedUsers();
    savedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(savedUsers));
    console.log('User data saved:', newUser.email);
  }

  getSavedUsers(): { email: string, password: string }[] {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  }

  logout() {
    this.isLoggedIn = false;
  }
}
