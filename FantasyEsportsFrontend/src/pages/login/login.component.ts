import { Component } from '@angular/core';
import { FormGroup, FormControl, EmailValidator, Validators } from '@angular/forms';
import { PasswordValidation } from '../../shared/validators/password.validator';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { HttpService, URI } from '../../shared/services/http.service';

const PASSWORD_REGEXP: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
const PASSWORD_HINT: string = 'Password between 8 and 20 characters; must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, but cannot contain whitespace.';
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
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
    this.httpClient.post(URI.LOGIN, {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }).subscribe((data) => {
      console.log(data);
      this.authService.logIn(data['sessionKey']);
      this.router.navigate(['home']);
    }, (error) => {
      this.loginFailed = true;
      console.error(error);
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.httpClient.post(URI.REGISTER, {
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value,
        displayName: this.registerForm.controls.displayName.value
      }).subscribe((data) => console.log(data));
      console.log(this.registerForm);
    } else {
      console.error('Register form is not valid');
    }
  }
}
