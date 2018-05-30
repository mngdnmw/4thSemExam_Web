import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class UserService {
  user: User;

  constructor(public afAuth: AngularFireAuth) { }


  // Deletes current user
  deleteUser() {
    const user = this.afAuth.auth.currentUser;
    user.delete().then(function () {
      console.log('User deleted');
    }).catch(function (error) {
      console.log(error);
    });
  }

  // Gets current user
  getUser(): User {
    this.user = this.afAuth.auth.currentUser;

    if (this.user != null) {
      return this.user;
    }
  }

  // Update email
  updateEmail(email: string): Promise<any> {
    const user = this.afAuth.auth.currentUser;

    return user.updateEmail(email).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
  }

  // Update password
  updatePassword(newPass: string): Promise<any> {
    const user = this.afAuth.auth.currentUser;

    return user.updatePassword(newPass).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log('Error updating password');
      console.log(error);
    });
  }
}
