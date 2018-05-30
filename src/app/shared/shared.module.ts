import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatDialogModule, MatButtonModule, MatIconModule} from '@angular/material';
import {BallService} from './ball/ball.service';
import { PopupComponent } from './popup/popup.component';
import { PopupMapComponent } from './popup-map/popup-map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtxbJ-os_tVgM00gTsc04VEn9gX8pwCqM'
    }),
  ],
  declarations: [ToolbarComponent, MarginIconComponent, PopupComponent, PopupMapComponent],
  exports: [MarginIconComponent, PopupComponent],
  providers: [BallService],
  entryComponents: [PopupMapComponent],

})
export class SharedModule { }
