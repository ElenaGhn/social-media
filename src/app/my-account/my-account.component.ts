import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';
import {User} from "../components/login/User";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  @Output() logoutClicked = new EventEmitter<void>();


  constructor(private authService: AuthService, private router: Router) {
  }

  isSignOutVisible: boolean = false;
  user : User;

  ngOnInit(): void {}

  showSignOutButton() {
    this.isSignOutVisible = true;
  }

  hideSignOutButton() {
    this.isSignOutVisible = false;
  }




  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
