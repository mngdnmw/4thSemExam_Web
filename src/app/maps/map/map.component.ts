import { Component, OnInit } from '@angular/core';
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
  currentBall: Ball;

  constructor(public bs: BallService) {
    if (!this.ballsArray) {
      this.ballsArray = [];
    }
  }

  ngOnInit() {
    this.getBalls();
  }

  getBalls() {
    this.bs.getAllBalls().subscribe(balls => {
      this.setBalls(balls);
    });
  }

  setBalls(ballArray: Ball[]) {
    this.ballsArray = ballArray;
    this.currentBall = this.ballsArray[0];
    this.clickBall(this.currentBall);
  }

  clickBall(ball: Ball) {
    if (!this.currentBall) {
      this.currentBall = this.ballsArray[0];
    } else {
      this.currentBall = ball;
    }
  }

}


