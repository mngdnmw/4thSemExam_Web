import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';

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
              private snackBar: MatSnackBar,
              private fb: FormBuilder) {
    this.updateForm = fb.group({
      email: ['']
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

    if (this.userService.updateEmail(updateModel.email)) {
      this.snackBar.open('Email updated', '', {
        duration: 3000
      });
    } else {
      this.snackBar.open('Error updating email', '', {
        duration: 3500
      });
    }
  }

  cancel() {
    this.router.navigateByUrl('');
  }

}
