import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedService} from './shared/shared.service';
import {PopupComponent} from '../shared/popup/popup.component';
import {UserService} from './shared/user.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ChangePassComponent } from './change-pass/change-pass.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, EditProfileComponent, ChangePassComponent],
  entryComponents: [PopupComponent],
  exports: [ProfileComponent, EditProfileComponent],
  providers: [SharedService, UserService]
})
export class UserModule { }
