import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalleresRoutingModule } from './talleres-routing.module';
import { TallerPageComponent } from './pages/taller-page/taller-page.component';


@NgModule({
  declarations: [
    TallerPageComponent
  ],
  imports: [
    CommonModule,
    TalleresRoutingModule
  ]
})
export class TalleresModule { }
