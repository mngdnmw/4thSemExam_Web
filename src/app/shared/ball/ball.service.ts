import { Injectable } from '@angular/core';
import {Ball} from './ball';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class BallService {
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  public getAllBalls(): Observable<Ball[]> {
  return this.afs.collection<Ball>('pictures').valueChanges();
  }

  // Downloads image from Firebase Storage
  getImageFromFirebase(path: string): Promise<any> {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = firebase.storage();
    // Create a storage reference from our storage service
    const storageRef = storage.ref();
    // Create a reference to the file we want to download
    const picRef = storageRef.child(path);

    // Get the download URL
    return picRef.getDownloadURL();
  }

  // Deletes Ball     NB!! Catch des not work! + needs UID parameter
  delete() {
    this.afs.collection('pictures').doc('4w9kxeJ1BK6idhtpXyd3').delete().then(() => {
      console.log('Document successfully deleted');
    }).catch((error) => {
      console.log(error);
    });
  }

}
