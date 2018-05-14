import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  routes = [
    { route: '/', title: 'Home', icon: 'home' },
    { route: '/albums', title: 'Albums', icon: 'folder' },
    { route: '/map', title: 'Map', icon: 'map' },
    { route: '/login', title: 'Login', icon: 'input' },
    {route: '/signup', title: 'Sign up', icon: 'create' }
  ];
 constructor() {

 }
 navBarOpen = true;

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnDestroy(): void {
  }


}
