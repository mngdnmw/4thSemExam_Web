import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.loginForm = fb.group({
    email: '',
    password: ''
  });
  }

  ngOnInit() {
    this.authService.login('test@test.dk', 'test123')
      .then(() => console.log('Logged in'))
      .catch(error => console.log(error));

    this.authService.logout()
      .then(() => console.log('Logged out'))
      .catch(error => console.log(error));

    this.authService.isAuthenticated()
      .subscribe(authState => console.log(authState),
        error1 => console.log(error1),
        () => console.log('Complete'));
  }


}
