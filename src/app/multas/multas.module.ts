import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultasRoutingModule } from './multas-routing.module';
import { MultasPageComponent } from './pages/multas-page/multas-page.component';


@NgModule({
  declarations: [
    MultasPageComponent
  ],
  imports: [
    CommonModule,
    MultasRoutingModule
  ]
})
export class MultasModule { }
