import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignupComponent } from './signup/signup.component';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import {MatIconModule} from '@angular/material';
import { MapComponent } from '../maps/map/map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB92wF6pGNxwCiIahxb5s5LXR49tsXQ0OQ'
    })
  ],
  declarations: [ToolbarComponent, SignupComponent, MarginIconComponent, MapComponent],
  exports: [MarginIconComponent, MapComponent]
})
export class SharedModule { }
