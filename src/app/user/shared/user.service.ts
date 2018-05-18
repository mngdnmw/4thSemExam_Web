import { Injectable } from '@angular/core';
import {User} from './user';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../../auth/shared/auth.service';

@Injectable()
export class UserService {

  constructor(private afs: AngularFirestore,
              private authService: AuthService) { }

  deleteUser() {
    const user = firebase.auth().currentUser;
    console.log(user);
    user.delete().then(function() {
      console.log('User deleted');
    }).catch(function(error) {
      console.log(error);
    });
  }

  getUser() {

  }

}
