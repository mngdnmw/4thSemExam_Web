import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {BallService} from '../../shared/ball/ball.service';
import {Ball} from '../../shared/ball/ball';

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

  db = firebase.firestore();
  ballsArray = [];

  constructor(public bs: BallService) {

  }

  ngOnInit() {
    this.getBalls();
  }

  getBalls() {
    this.bs.getAllBalls().subscribe(balls => {
      this.ballsArray = balls;
    });
  }

}
