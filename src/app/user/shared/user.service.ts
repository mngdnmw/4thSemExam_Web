import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UserService {
  user: User;

  constructor(private snack: MatSnackBar) { }


  // Deletes current user
  deleteUser() {
    const user = firebase.auth().currentUser;
    console.log(user);
    user.delete().then(function () {
      console.log('User deleted');
    }).catch(function (error) {
      console.log(error);
    });
  }

  // Gets current user
  getUser(): User {
    this.user = firebase.auth().currentUser;

    if (this.user != null) {
      return this.user;
    }
  }

  // Update user
  updateUser(email: string) {
    const user = firebase.auth().currentUser;

    user.updateEmail(email).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

}
