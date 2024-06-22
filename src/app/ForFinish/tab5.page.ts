import { Component, OnInit } from '@angular/core';
import { Pedido } from '../services/tienda/Pedido';
import { PedidoService } from '../services/tienda/pedido.service';
import { Tienda } from '../services/auth/Tienda';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit {

  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;
  selectedEstado!: string;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.tienda = this.loginService.currentUserValue;
    if (this.tienda) {
      this.loadGestionPedidos();
    }
  }

  ionViewWillEnter() {
    if (this.tienda) {
      this.loadGestionPedidos();
    }
  }

  loadGestionPedidos() {
    if (this.tienda) {
      this.pedidoService.getPedidosEnProcesoByTienda(this.tienda.idTienda).subscribe(
        pedidos => {
          this.pedidos = pedidos;
        },
        error => {
          console.error('Error al cargar pedidos:', error);
          this.pedidos = [];
        }
      );
    }
  }

  updateEstadoPedido(pedido: Pedido) {
    this.pedidoService.updatePedidoStatus(pedido.idPedido, this.selectedEstado)
      .subscribe(updatedPedido => {
        pedido.estadoPedido = updatedPedido.estadoPedido;
        this.loadGestionPedidos();
      }, error => {
        console.error('Error al actualizar estado del pedido:', error);
      });
  }
}