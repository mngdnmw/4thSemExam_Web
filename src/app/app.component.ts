import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from './auth/shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  authenticated: boolean;
  navBarOpen = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.authenticate();
  }

  logout() {
    this.authService.logout().then(() =>
    this.router.navigateByUrl('login'));
  }

  authenticate() {
    this.authService.isAuthenticated()
      .subscribe((authState => this.authenticated = authState),
        (error => console.log(error)));
  }

}
