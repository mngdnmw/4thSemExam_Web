import {Component, OnInit} from '@angular/core';
import {Picture} from '../../shared/pictureBE/picture';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  pictures: Picture[] = [];

  constructor() {

    for (let i = 1; i < 10; i++) {
      const picture: Picture = {
          id: i.toString(),
          dateCreated: i,
          location: i,
          name: i.toString(),
          imgURl: '../../../assets/ball_pic.jpeg'
        }
      ;
      this.pictures.push(picture);
    }

  }

  ngOnInit() {
  }


}
