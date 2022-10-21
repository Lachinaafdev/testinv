import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
