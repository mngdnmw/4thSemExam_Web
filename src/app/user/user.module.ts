import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedService} from './shared/shared.service';
import {PopupComponent} from '../shared/popup/popup.component';
import {UserService} from './shared/user.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [ProfileComponent],
  entryComponents: [PopupComponent],
  exports: [ProfileComponent],
  providers: [SharedService, UserService]
})
export class UserModule { }
