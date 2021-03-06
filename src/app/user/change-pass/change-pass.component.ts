import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {matchPassword} from '../../auth/shared/password-validator';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  user: User;
  passwordForm: FormGroup;
  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private snack: MatSnackBar,
              private authService: AuthService) {
    this.passwordForm = fb.group({
      oldPass: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPass: ['', [Validators.required, matchPassword()]]
    });
  }

  ngOnInit() {
    this.getUser();
  }

  // Gets current user
  getUser() {
    this.user = this.userService.getUser();
  }


  // Updates password
  updatePassword() {
    const passwordModel = this.passwordForm.value;
    const newPass = passwordModel.password;
    this.authService.reAuthenticate(passwordModel.oldPass).then(() =>
      this.userService.updatePassword(newPass)
        .then(() => this.snack.open('Password updated', '', {
          duration: 3000}))
        .then(() => this.cancel()))
      .catch((error) =>
        this.snack.open(error, '', {
          duration: 5000
        })
      );
  }

  cancel() {
    this.router.navigateByUrl('/profile');
  }

  fcError(fc: string, error: string, pre?: string[]): boolean {
    if (pre && pre.length > 0) {
      for (let i = 0; i < pre.length; i++) {
        if (this.passwordForm.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return this.passwordForm.get(fc).hasError(error);
  }

}
