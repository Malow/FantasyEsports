import { Component } from '@angular/core';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';
import { PasswordValidation } from '../../shared/validators/password.validator';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

const PASSWORD_REGEXP: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
const PASSWORD_HINT: string = 'Password must contain between 8 and 20 characters, at least one lowercase letter, one uppercase letter, one numeric digit, and one special CharacterData.Password between 8 and 20 characters; must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, but cannot contain whitespace.';
const DISPLAY_NAME_REGEXP: RegExp = /^[a-zA-Z0-9]{0,20}$/;
const DISPLAY_NAME_HINT: string = 'Display Name can contain any character or number and a maximum 20 characters long.';



@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      staySignedIn: new FormControl(false, [Validators.required])
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEXP)]),
      confirmPassword: new FormControl('', [Validators.required]),
      displayName: new FormControl('', [Validators.required, Validators.pattern(DISPLAY_NAME_REGEXP)])
    }, {
      validators: PasswordValidation.MatchPassword
    });
  }

  getInvalidPasswordMessage(): string {
    return PASSWORD_HINT;
  }

  getInvalidDisplayNameMessage(): string {
    return DISPLAY_NAME_HINT;
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this.authService.logIn();
      this.router.navigate(['start'])
    } else {
      console.error('Login form is not valid');
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
    } else {
      console.error('Register form is not valid');
    }
  }
}
