import {Component} from '@angular/core';
import 'firebase/compat/auth';
import {AuthService} from 'src/app/services/auth.service';
import {User} from "./User";

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

  login() {
    console.log(this.email)
    this.authService.login(new User(this.email, this.password));
  }
}
