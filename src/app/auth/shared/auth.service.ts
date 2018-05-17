import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operators';
import {User} from '../../user/shared/user';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.fireAuth.auth.signOut();
  }

  signup(user: User): Promise<any> {
    return this.fireAuth.auth
      .createUserAndRetrieveDataWithEmailAndPassword(
        user.email,
        user.password
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.authState
      .map(authState => {
        return authState !== null;
      });
  }

  deleteUser() {
    const user = firebase.auth().currentUser;
    console.log(user);
    user.delete().then(function() {
      console.log('User deleted');
    }).catch(function(error) {
      console.log(error);
    });
  }

}
