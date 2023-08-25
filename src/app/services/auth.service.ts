import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../components/login/User";
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

  login(user: User) {
    console.log(user.email);
    this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        console.log(userCredential.user);
        this.isLoggedIn = true;
        this.router.navigate(['home']);
      })
      .catch(error => {
        alert('Error registering user: ' + error.message);
      });
  }

  // TODO: Implement user registration using this.afAuth.createUserWithEmailAndPassword

  saveUser(newUser: User, password: any) {

    this.afAuth.createUserWithEmailAndPassword(newUser.email, password)
      .then(userCredential => {
        console.log('User registered:', userCredential.user);
      })
      .catch(error => {
        alert('Error registering user: ' + error.message);
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

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged((user) => {
        if (user) {
          // Utilizatorul este autentificat, poți returna detaliile utilizatorului
          const currentUser: User = { email: user.email || '', password: '' };
          resolve(currentUser);
        } else {
          // Utilizatorul nu este autentificat
          resolve(null);
        }
      });
    });
  }
  logout() {
    this.isLoggedIn = false;
  }
}
