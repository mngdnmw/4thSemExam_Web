import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolbarComponent, SignupComponent]
})
export class SharedModule { }
