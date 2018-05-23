import {Component, Inject, OnInit} from '@angular/core';
import { MatDialog} from '@angular/material';
import {PopupComponent} from '../../shared/popup/popup.component';
import {User} from '../shared/user';
import {UserService} from 'app/user/shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private dialog: MatDialog,
              private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  // Opens Dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '25vw'
    });
  }

  // Gets current user
  getUser() {
    this.user = this.userService.getUser();
  }

  // Changes the page to editprofile
  changeEmail() {
    this.router.navigateByUrl('/changemail');
  }

  changePassword() {
    this.router.navigateByUrl('/changepass');
  }

}
