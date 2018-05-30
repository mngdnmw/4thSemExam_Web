import { Component, OnInit } from '@angular/core';
import {BallService} from '../../shared/ball/ball.service';
import {Ball} from '../../shared/ball/ball';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ballsArray = [];
  currentBall: Ball;
  path = 'images/';

  constructor(public bs: BallService) {
    if (!this.ballsArray) {
      this.ballsArray = [];
    }
  }

  ngOnInit() {
    this.getBalls();
  }

  getBalls() {
    this.bs.firstData(10);
    this.bs.data.subscribe(balls => {
      this.setBalls(balls);
      this.getImages(balls);
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

  // Downloads image(s) from Firebase Storage
  getImages(balls: Ball[]) {
    for (const ball of balls) {
      // Set imgUrl to the url from Firebase
      this.bs.getImageFromFirebase(this.path + ball.uid + '.jpg').subscribe(
        url => ball.imgUrl = url);
    }
  }

}
