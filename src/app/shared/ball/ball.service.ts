import { Injectable } from '@angular/core';
import {Ball} from './ball';
import { AngularFirestore } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class BallService {

  private PAGINATION_SET_SIZE = 6;
  private PAGINATION_TOTAL_SIZE = 6;
  private _data: BehaviorSubject<Ball[]>;
  public data: Observable<Ball[]>;
  private lastDataLength: number;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  public getAllBalls(): Observable<Ball[]> {
    return this.afs.collection<Ball>('pictures').valueChanges();
  }

  // You need to return the doc to get the current cursor.
  getCollection(ref, queryFn?): Observable<any[]> {
    return this.afs.collection<any>(ref, queryFn).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const doc = a.payload.doc;
        return { ...data, doc };
      });
    });
  }

  // In your first query you subscribe to the collection and save the latest entry
  firstData(length: number) {
    this.PAGINATION_TOTAL_SIZE = length;
    this._data = new BehaviorSubject([]);
    this.data = this._data.asObservable();
    // this.entryList = [];

    this.getCollection('pictures', ref => ref
      .orderBy('time', 'desc')
      .limit(length))
      .subscribe(data => {
        this.lastDataLength = data.length;
        this._data.next(data);
      });
  }

  moreData() {
    console.log('Last data: ' + this.lastDataLength + '/' + this.PAGINATION_TOTAL_SIZE);
    if (this.lastDataLength === this.PAGINATION_TOTAL_SIZE) {
      this.PAGINATION_TOTAL_SIZE = this.PAGINATION_TOTAL_SIZE + this.PAGINATION_SET_SIZE;
      this.getCollection('pictures', ref => ref
        .orderBy('time', 'desc')
        .limit(this.PAGINATION_TOTAL_SIZE))
        .subscribe(data => {
          if (data.length) {
            this.lastDataLength = data.length;
            this._data.next(data);
          }
        });
    }
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
