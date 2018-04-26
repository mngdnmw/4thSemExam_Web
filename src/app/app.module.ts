import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import {AlbumsModule} from './albums/albums.module';
import {AuthModule} from './auth/auth.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from './shared/shared.module';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {MapsModule} from './maps/maps.module';
import * as firebase from 'firebase';
import {AngularFirestoreModule} from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AlbumsModule,
    AuthModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

firebase.initializeApp({
  apiKey: 'AIzaSyDzl_c8NLnGcVzn6yWXy-KTYp-ChbtKhy4',
  authDomain: 'sosomafioso-5c8ef.firebaseapp.com',
  projectId: 'sosomafioso-5c8ef'
});

// Initialize Cloud Firestore through Firebase
this.db = firebase.firestore();

this.db.collection('users').add({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
})
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });

// Add a second document with a generated ID.
this.db.collection('users').add({
  first: 'Alan',
  middle: 'Mathison',
  last: 'Turing',
  born: 1912
})
  .then(function(docRef) {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });

this.db.collection('users').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
