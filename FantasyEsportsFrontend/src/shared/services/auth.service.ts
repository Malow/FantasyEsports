import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') ? true : false;
  }

  logIn(): void {
    localStorage.setItem('loggedIn', 'true');
  }

  logOut(): void {
    localStorage.removeItem('loggedIn');
  }

}
