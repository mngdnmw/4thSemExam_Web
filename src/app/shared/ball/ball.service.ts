import { Injectable } from '@angular/core';
import {Ball} from './ball';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BallService {

  constructor(private afs: AngularFirestore) { }

  public getAllBalls(): Observable<Ball[]> {
  return this.afs.collection<Ball>('balls').valueChanges();
  }

}
