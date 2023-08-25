import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isSignOutVisible: boolean = false;


  constructor(private authService: AuthService) {
  }


  hideSignOutButton() {
    this.isSignOutVisible = false;
  }


  logout() {
    this.authService.logout()
  }
}
