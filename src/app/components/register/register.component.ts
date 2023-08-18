import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)])
    });

    //this.registerForm = new FormGroup({
    //  email: new FormControl('', Validators.required),
    //  password: new FormControl('', [Validators.required, Validators.minLength(8)])
    //});
  }

  createUser() {
   console.log(this.registerForm.value);

   //TODO: funktionalität: User aus form in den auth-service speichen
  }
}
