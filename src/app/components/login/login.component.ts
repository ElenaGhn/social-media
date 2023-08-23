import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment'; // Importă environment

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {
  }

  /**
   * @param email
   */
  login() {
    //TODO: email und passwort aus login HTML Form auslesen so wie bei register component

    this.authService.login();

    //TODO: mit user von login HTML Form AuthService function aufrufen

  }
}
