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

  constructor(private authService: AuthService) {
    firebase.initializeApp(environment.firebaseConfig);
  }

  login() {
    const email = 'user@example.com';
    const password = 'examplePassword';

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("work?")
        console.log( userCredential.user);
        this.authService.login();
      })
      .catch(error => {
        console.error( error);
      });
  }
}
