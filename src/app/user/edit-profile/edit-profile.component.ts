import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User;
  updateForm: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private snack: MatSnackBar,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.updateForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.getUser();
  }

  // Gets current user
  getUser() {
    this.user = this.userService.getUser();
  }

  // Update Email
  updateEmail() {
    const updateModel = this.updateForm.value;
    this.authService.reAuthenticate(updateModel.password).then(() =>
      this.userService.updateEmail(updateModel.email)
        .then(() =>
          this.snack.open('Email updated', '', {
            duration: 3000
          })))
      .catch(error => {
        this.snack.open(error, '', {
          duration: 5000
        });
      });
  }

  cancel() {
    this.router.navigateByUrl('/profile');
  }

}
