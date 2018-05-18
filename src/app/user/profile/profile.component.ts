import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import { MatDialog} from '@angular/material';
import {PopupComponent} from '../../shared/popup/popup.component';
import {User} from '../shared/user';
import {UserService} from 'app/user/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,
              private dialog: MatDialog,
              private userService: UserService) {}

  ngOnInit() {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '25vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getUser() {
  }


}
