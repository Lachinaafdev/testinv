import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './page/dashboard-page.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule, ShareModule],
})
export class DashboardModule {}
