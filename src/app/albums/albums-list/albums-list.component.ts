import {Component, OnInit} from '@angular/core';
import {BallService} from '../../shared/ball/ball.service';
import {Ball} from '../../shared/ball/ball';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  ballsArray = [];
  path = 'images/';

  constructor(private bs: BallService) {

  }

  ngOnInit() {
    this.getBalls();
  }

  paginationMore() {
    this.bs.moreData();
  }

  // Gets balls
  getBalls() {
    this.bs.firstData(6);
    this.bs.data.subscribe(balls => {
      console.log(balls);
      this.ballsArray = balls;
      this.getImages(balls);
    });
  }

  // Deletes ball
  deleteBall(ball: Ball) {
    this.bs.delete(ball);
  }

  // Gets images
  getImages(balls: Ball[]) {
    for (const ball of balls) {
      // Set imgUrl to the url from Firebase
      this.bs.getImageFromFirebase(this.path + ball.uid + '.jpg').subscribe(
        url => ball.imgUrl = url);
    }
  }


}
