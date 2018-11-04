import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(['login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
