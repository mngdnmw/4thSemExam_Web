import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor() {

 }
  title = 'So So Mafioso';
  navBarOpen = true;

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }


}
