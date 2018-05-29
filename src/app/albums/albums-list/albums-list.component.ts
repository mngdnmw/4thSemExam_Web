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

  // Gets balls
  getBalls() {
    this.bs.getAllBalls().subscribe(balls => {
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
      this.bs.getImageFromFirebase(this.path + ball.uid + '.jpg').then(
        // Set imgUrl to the url from Firebase
        url => ball.imgUrl = url).catch(
        function(error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object_not_found':
              // File doesn't exist
              console.log('File doesn\'t exist');
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              console.log('Unknown error');
              break;
          }
        });
    }
  }


}
