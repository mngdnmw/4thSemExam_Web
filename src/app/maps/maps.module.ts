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
      apiKey: 'AIzaSyAtxbJ-os_tVgM00gTsc04VEn9gX8pwCqM'
    }),
    MatListModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapsModule { }
