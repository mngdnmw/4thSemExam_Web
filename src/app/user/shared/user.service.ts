import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../../auth/shared/auth.service';

@Injectable()
export class UserService {
  user: User;
  constructor(private afs: AngularFirestore,
              private authService: AuthService) { }

  // Deletes current user
  deleteUser() {
    const user = firebase.auth().currentUser;
    console.log(user);
    user.delete().then(function() {
      console.log('User deleted');
    }).catch(function(error) {
      console.log(error);
    });
  }

  // Gets current user
  getUser(): User {
    const user = firebase.auth().currentUser;

    if (user != null) {
      return user;
    }
  }

}
