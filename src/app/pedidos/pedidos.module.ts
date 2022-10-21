import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosPageComponent } from './pages/pedidos-page/pedidos-page.component';


@NgModule({
  declarations: [
    PedidosPageComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
