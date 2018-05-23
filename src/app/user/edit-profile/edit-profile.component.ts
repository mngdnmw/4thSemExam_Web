import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  // Gets current user
  getUser() {
    this.user = this.userService.getUser();
  }

  save() {
    console.log('Saved');
  }

  cancel() {
    this.router.navigateByUrl('');
  }

}
