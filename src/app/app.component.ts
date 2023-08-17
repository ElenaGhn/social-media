import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media';
  isLoggedIn = true;

  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn;
  }

}
