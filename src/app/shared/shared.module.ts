import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatDialogModule, MatButtonModule, MatIconModule} from '@angular/material';
import {BallService} from './ball/ball.service';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, PopupComponent],
  exports: [MarginIconComponent, PopupComponent],
  providers: [BallService],

})
export class SharedModule { }
