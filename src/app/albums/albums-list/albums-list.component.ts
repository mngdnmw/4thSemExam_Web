import {Component, OnInit} from '@angular/core';
import {BallService} from '../../shared/ball/ball.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  ballsArray = [];

  constructor(private bs: BallService) {

  }

  ngOnInit() {
    this.getBalls();
  }

  getBalls() {
    this.bs.getAllBalls().subscribe(balls => {
      this.ballsArray = balls;
    });
  }

  deleteBall() {
    this.bs.delete();
  }

}
