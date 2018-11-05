import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return localStorage.getItem('sessionKey') ? true : false;
  }

  logIn(sessionKey: string): void {
    localStorage.setItem('sessionKey', sessionKey);
  }

  logOut(): void {
    localStorage.removeItem('sessionKey');
  }

}
