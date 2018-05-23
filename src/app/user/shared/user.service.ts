import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class UserService {
  user: User;

  constructor() { }


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

  // Update email
  updateEmail(email: string) {
    const user = firebase.auth().currentUser;

    user.updateEmail(email).then(function() {
      // Update successful.
      console.log(firebase.auth().currentUser);
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }
/*
  // Re-authenticate user
  reauthenticateUser() {
    const user = firebase.auth().currentUser;
    const credential;

    // Prompt the user to re-provide their sign-in credentials
    user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
      // User re-authenticated.
    }).catch(function(error) {
      // An error happened.
    });
  }*/

}
