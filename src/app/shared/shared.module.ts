import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatIconModule} from '@angular/material';
import {BallService} from './ball/ball.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent],
  exports: [MarginIconComponent],
  providers: [BallService],

})
export class SharedModule { }
