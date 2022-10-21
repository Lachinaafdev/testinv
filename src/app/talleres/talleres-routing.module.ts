import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TallerPageComponent } from './pages/taller-page/taller-page.component';

const routes: Routes = [
  {
    path: '',
    component: TallerPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalleresRoutingModule {}
