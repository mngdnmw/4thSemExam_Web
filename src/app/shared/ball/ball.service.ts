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
/*  private latestEntry: DocumentReference;
  private latestBack: DocumentReference;
  private entryList: DocumentReference[];*/

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
    this._data = new BehaviorSubject([]);
    this.data = this._data.asObservable();
    // this.entryList = [];

    this.getCollection('pictures', ref => ref
      .orderBy('time', 'desc')
      .limit(length))
      .subscribe(data => {
        // this.latestEntry = data[data.length - 1].doc;
        // this.latestBack = data[0].doc;
        // console.log('Backwards length: ' + this.entryList.length);
        this.lastDataLength = data.length;
        this._data.next(data);
      });
  }

/*  nextData() {
    console.log('Last data: ' + this.lastDataLength + '/' + this.PAGINATION_SET_SIZE);
    if (this.lastDataLength === this.PAGINATION_SET_SIZE) {
      this.entryList.push(this.latestBack);
      console.log('Backwards length: ' + this.entryList.length);
      this.getCollection('pictures', ref => ref
        .orderBy('time', 'desc')
        .startAfter(this.latestEntry)
        .limit(this.PAGINATION_SET_SIZE))
        .subscribe(data => {
          if (data.length) {
            this.latestEntry = (data[data.length - 1].doc);
            this.latestBack = data[0];
            this.lastDataLength = data.length;
            this._data.next(data);
          }
        });
    }
  }

  previousData() {
    if (this.entryList.length > 0) {
    this.getCollection('pictures', ref => ref
      .orderBy('time', 'desc')
      .startAfter(this.entryList.pop())
      .limit(this.PAGINATION_SET_SIZE))
      .subscribe(data => {
        if (data.length) {
          // And save it again for more queries
          this.latestEntry = data[data.length - 1].doc;
          this.lastDataLength = data.length;
          this._data.next(data);
        }
      });
    }
  }*/

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
