import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat1 = 39.017696;
  lng1 = 125.763588;
  lat2 = 59.9127;
  lng2 = 10.7461;

  constructor() { }

  ngOnInit() {
  }

}
