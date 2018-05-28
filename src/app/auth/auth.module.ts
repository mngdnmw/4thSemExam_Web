import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/auth.service';
import {SignupComponent} from './signup/signup.component';
import {AuthGuard} from './shared/auth-guard.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    AngularFireAuthModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignupComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
