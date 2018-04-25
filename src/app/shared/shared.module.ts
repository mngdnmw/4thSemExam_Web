import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatIconModule, MatListModule} from '@angular/material';
import { MapComponent } from '../maps/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent, SignupComponent, MarginIconComponent],
  exports: [MarginIconComponent]
})
export class SharedModule { }
