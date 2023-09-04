import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';
import { User } from "../components/login/User";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  isSignOutVisible: boolean = false;
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().then((currentUser) => {
      this.user = currentUser;
    });
  }

  showSignOutButton() {
    this.isSignOutVisible = true;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  closeButton() {
    this.isSignOutVisible = false;
  }
}
