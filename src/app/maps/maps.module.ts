import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {MatIconModule, MatListModule} from '@angular/material';
import {MapComponent} from './map/map.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB92wF6pGNxwCiIahxb5s5LXR49tsXQ0OQ'
    }),
    MatListModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapsModule { }
