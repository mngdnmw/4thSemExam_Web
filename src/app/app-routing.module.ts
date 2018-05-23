import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumsListComponent} from './albums/albums-list/albums-list.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MapComponent} from './maps/map/map.component';
import {AuthModule} from './auth/auth.module';
import {SignupComponent} from './auth/signup/signup.component';
import {ProfileComponent} from './user/profile/profile.component';
import {EditProfileComponent} from './user/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
