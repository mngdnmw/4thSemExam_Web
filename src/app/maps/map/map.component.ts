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
  db = firebase.firestore();
  ballsArray = [];

  constructor(public bs: BallService) {
  }

  ngOnInit() {
    this.getBalls();
  }

  getBalls() {
    this.bs.getAllBalls().subscribe(balls => {
      this.ballsArray.push(balls);
    });
  }

}
