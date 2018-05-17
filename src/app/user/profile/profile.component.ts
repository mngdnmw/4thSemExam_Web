import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private authService: AuthService) {}
  ngOnInit() {
  }

  delete() {
    this.authService.deleteUser();
  }



}
