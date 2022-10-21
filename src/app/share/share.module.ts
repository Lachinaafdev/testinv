import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
  ],
  exports: [NavBarComponent],
})
export class ShareModule {}
