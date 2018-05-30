import { Injectable } from '@angular/core';
import {Ball} from './ball';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Injectable()
export class BallService {
  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  public getAllBalls(): Observable<Ball[]> {
    return this.afs.collection<Ball>('pictures').valueChanges();
  }

  // Downloads image from Firebase Storage
  getImageFromFirebase(path: string): Observable<any> {
    const ref = this.storage.ref(path);
    return ref.getDownloadURL();
  }

  // Deletes Ball
  delete(ball: Ball) {
    this.afs.collection('pictures/').doc(ball.uid).delete().then(() => {
      console.log('Document successfully deleted');
    }).catch((error) => {
      console.log(error);
    });
  }

}
