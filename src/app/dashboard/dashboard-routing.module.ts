import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../vistas/dashboard/dashboard.component';
import { LoginComponent } from '../vistas/login/login.component';
import { DashboardPageComponent } from './page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: 'taller',
        loadChildren: () =>
          import('../talleres/talleres.module').then((m) => m.TalleresModule),
      },
      {
        path: 'multa',

        loadChildren: () =>
          import('../multas/multas.module').then((m) => m.MultasModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('../pedidos/pedidos.module').then((m) => m.PedidosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
