import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Ball} from '../ball/ball';
import {AgmMap} from '@agm/core';


@Component({
  selector: 'app-popup-map',
  templateUrl: './popup-map.component.html',
  styleUrls: ['./popup-map.component.css']
})
export class PopupMapComponent implements OnInit {
  ball: Ball;

  @ViewChild(AgmMap)
  public agmMap: AgmMap;

  constructor(public dialogRef: MatDialogRef<PopupMapComponent>,
              @Inject
              (MAT_DIALOG_DATA) public data: Ball) {
    this.ball = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.agmMap.triggerResize();
  }


}
