import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumsListComponent} from './albums/albums-list/albums-list.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {MapComponent} from './maps/map/map.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
