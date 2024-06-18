import { Component, OnInit } from '@angular/core';
import { Pedido } from '../services/tienda/Pedido';
import { Tienda } from '../services/auth/Tienda';
import { PedidoService } from '../services/tienda/pedido.service';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.tienda = this.loginService.currentUserValue;
    if (this.tienda) {
      this.loadPendingPedidos();
    }
  }

  loadPendingPedidos() {
    this.pedidoService.getPedidosByTienda(this.tienda!.idTienda).subscribe(
      pedidos => {
        this.pedidos = pedidos;
      },
      error => {
        console.error('Error al cargar pedidos:', error);
      }
    );
  }

  updatePedidoStatus(idPedido: number, estado: string) {
    this.pedidoService.updatePedidoStatus(idPedido, estado).subscribe(
      () => {
        this.loadPendingPedidos();
      },
      error => {
        console.error('Error al actualizar el estado del pedido:', error);
      }
    );
  }
}
