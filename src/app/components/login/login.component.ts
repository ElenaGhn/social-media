import {Component} from '@angular/core';
import firebase from 'firebase/compat/app';
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  constructor(private authService: AuthService) {}

    login() {
      this.authService.login();
    }
}
