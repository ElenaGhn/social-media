import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


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
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.minLength(3)])
    });
  }

  createUser() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      this.authService.saveUser(email, password);
      this.registerForm.reset();

      this.router.navigate(['/home']);
    }
  }
}
