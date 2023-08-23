import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import {User} from "../login/User";
import firebase from "firebase/compat";
import { environment } from 'src/environments/environment'; // Importă environment


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  createUser() {
    if (this.registerForm.valid) {
      const email: string  = this.registerForm.value.email;
      const password: string = this.registerForm.value.password;
      this.authService.registerUser(email, password);
      this.registerForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
