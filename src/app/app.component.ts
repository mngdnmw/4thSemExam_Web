import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

 constructor() {

 }
 navBarOpen = false;

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnDestroy(): void {
  }


}
