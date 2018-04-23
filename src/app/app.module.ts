import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { MapsComponent } from './maps/maps.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserComponent } from './user/user.component';
import { SharedComponent } from './shared/shared.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    AlbumsComponent,
    UserComponent,
    SharedComponent,
    AuthComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
