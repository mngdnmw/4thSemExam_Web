import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';

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
  updateEmail(email: string): Promise<any> {
    const user = firebase.auth().currentUser;

    return user.updateEmail(email).then(function() {
      // Update successful.
      console.log(firebase.auth().currentUser);
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  // Re-authenticate user
  reauthenticateUser(userProvidedPassword: string): Promise<any> {
    const currentUser = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      currentUser.email,
      userProvidedPassword
    );

    // Prompt the user to re-provide their sign-in credentials
    return currentUser.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
      // User re-authenticated.
      console.log('User reauthenticated');
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  // Update password
  updatePassword(newPass: string): Promise<any> {
    const user = firebase.auth().currentUser;

    return user.updatePassword(newPass).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log('Error updating password');
      console.log(error);
    });
  }
}
