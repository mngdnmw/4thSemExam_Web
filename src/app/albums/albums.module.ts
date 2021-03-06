import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: [AlbumsListComponent],
  exports: [AlbumsListComponent]
})
export class AlbumsModule { }
