import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from './auth/shared/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  authenticated: boolean;
  navBarOpen = false;

  constructor(private authService: AuthService,
              private router: Router,
              private snack: MatSnackBar) {}

  // Toggles the navbar
  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.authenticate();
  }

  // Logout
  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login').then(() => {
        this.snack.open('Logged out', '', {
          duration: 3500
        });
      }).catch((error) => {
        console.log(error);
        this.snack.open('Error logging out', '', {
          duration: 5000
        });
      });
    });
  }

  // Authenticates the current user
  authenticate() {
    this.authService.isAuthenticated()
      .subscribe((authState => this.authenticated = authState),
        (error => console.log(error)));
  }

}
