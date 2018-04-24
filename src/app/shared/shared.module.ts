import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupComponent } from './signup/signup.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent, SignupComponent, MarginIconComponent],
  exports: [MarginIconComponent]
})
export class SharedModule { }
