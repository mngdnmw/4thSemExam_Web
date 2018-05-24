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
  return this.afs.collection<Ball>('balls').valueChanges();
  }

  // Downloads image from Firebase Storage
  getImageFromFirebase(path: string, imgUrl: string) {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = firebase.storage();
    // Create a storage reference from our storage service
    const storageRef = storage.ref();
    // Create a reference to the file we want to download
    const picRef = storageRef.child(path);

    // Get the download URL
    picRef.getDownloadURL().then((url) => {
      // Insert url into an <img> tag to "download"
      imgUrl = url;
    }).catch(function(error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          console.log('File doesn\'t exist');
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          console.log('Unknown error');
          break;
      }
    });
  }

}
