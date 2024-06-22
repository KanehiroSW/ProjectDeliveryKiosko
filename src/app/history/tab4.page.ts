import { Component, OnInit } from '@angular/core';
import { Pedido } from '../services/tienda/Pedido';
import { PedidoService } from '../services/tienda/pedido.service';
import { LoginService } from '../services/auth/login.service';
import { Tienda } from '../services/auth/Tienda';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  
  pedidos: Pedido[] = [];
  tienda: Tienda | null = null;

  constructor(
    private pedidoService: PedidoService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tienda = this.loginService.currentUserValue;
    if (this.tienda) {
      this.loadHistorialPedidos();
    }
  }

  ionViewWillEnter() {
    if (this.tienda) {
      this.loadHistorialPedidos();
    }
  }

  loadHistorialPedidos() {
    if (this.tienda) {
      this.pedidoService.getHistorialPedidosByTienda(this.tienda.idTienda).subscribe(
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
}