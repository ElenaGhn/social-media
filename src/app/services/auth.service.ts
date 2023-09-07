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
  ) { }

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

  //ein neuen user zu registrieren und seine info zu speichern.
  saveUser(newUser: User, password: any) {
    this.afAuth.createUserWithEmailAndPassword(newUser.email, password)
      .then(userCredential => { //Wenn alles gut geht uns einzuloggen, kann ich sehen wer sich eingeloggt hat.
        console.log('User registered:', userCredential.user);
      })
      .catch(error => {
        alert('Error registering user: ' + error.message);
      });
  }

// neue freunde im club adden
  registerUser(email: string, password: string) {
    const newUser: User = {email: email, password: password};
    this.saveUser(newUser, password);
  }

//überprüft on gespeicherte daten sind von user
  getSavedUsers(): { email: string, password: string }[] {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  }

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => { //
      this.afAuth.onAuthStateChanged((user) => { //wenn jemand in meine App reinkommt oder rausgeht
        if (user) {
          // wenn der user eingellogt ist kann man user details returnieren
          const currentUser: User = { email: user.email || '', password: '' };
          resolve(currentUser);
        } else {
          // nicht eingellogt
      resolve(null);
        }
      });
    });
  }

  logout() {
    this.isLoggedIn = false;
  }
}

// Promise : as ist wie der Vertrag oder das Versprechen, das du machst.
// Du sagst: "Ich verspreche, etwas für dich zu tun,
// aber ich werde es nur tun, wenn alles gut geht."


//  getSavedUsers(), die dazu verwendet wird, gespeicherte
//  Benutzerdaten aus dem lokalen Speicher deines Browsers abzurufen
