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
import {ChangePassComponent} from './user/change-pass/change-pass.component';
import {AuthGuard} from './auth/shared/auth-guard.service';

const routes: Routes = [
  { path: 'albums', component: AlbumsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'changemail', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'changepass', component: ChangePassComponent, canActivate: [AuthGuard] }
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
