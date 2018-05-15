import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar,
              private router: Router) {
    this.loginForm = fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(authState => console.log(authState),
        error1 => console.log(error1));
  }

  login() {
    const loginModel = this.loginForm.value;
    this.authService.login(loginModel.email, loginModel.password)
      .then(() => {
        this.router.navigateByUrl('')
          .then(() => {
            this.snackBar.open('You\'re logged in', '', {
              duration: 2000
            });
          });
      })
      .catch(error => {
        this.snackBar.open(error.message, '', {
          duration: 3500
        });
      });
  }

  clickSignup() {
    this.router.navigateByUrl('signup');
  }

  clickSignout() {
    this.authService.logout()
      .then(() => {
        this.snackBar.open('You\'re logged out', '', {
          duration: 2000
        });
      })
      .catch(error => {
        this.snackBar.open(error.message, '', {
          duration: 3000
        });
      });
  }

}
