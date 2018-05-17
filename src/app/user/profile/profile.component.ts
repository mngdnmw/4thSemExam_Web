import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../auth/shared/auth.service';
import {ModalService} from '../shared/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  delete() {
    this.authService.deleteUser();
  }



}
