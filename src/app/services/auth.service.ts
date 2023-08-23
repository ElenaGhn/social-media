import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../components/login/User";
import firebase from "firebase/compat";
import {environment} from "../../environments/environment";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  savedUsers: { email: string, password: string }[] = [];
  isLoggedIn = false;
  user: { email: string, password: string }[] = [];

  constructor(private router: Router,
              public afs: AngularFirestore, // Inject Firestore service
              public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {  }

  //TODO: login mit User als parameter
    //TODO: this.afAuth.signInWithEmailAndPassword

  login() {
    const email = "user@example.com"
    const password = "examplePassword"

    console.log(email);
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential.user);
        this.isLoggedIn = true;
        this.router.navigate(['home']);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // TODO: Implement user registration using this.afAuth.createUserWithEmailAndPassword
  saveUser(newUser: User, password: any) {
    const savedUsers = this.getSavedUsers();
    savedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(savedUsers));
    console.log('User data saved:', newUser.email);

    this.afAuth.createUserWithEmailAndPassword(newUser.email, password)
      .then(userCredential => {
        console.log('User registered:', userCredential.user);
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  }

  registerUser(email: string, password: string) {
    const newUser: User = {email: email, password: password};
    this.saveUser(newUser, password);
  }

  getSavedUsers(): { email: string, password: string }[] {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  }

  logout() {
    this.isLoggedIn = false;
  }
}
