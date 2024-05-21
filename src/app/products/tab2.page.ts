import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../services/tienda/Producto.service';
import { Producto } from '../services/tienda/Producto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  
  private productoService = inject(ProductoService);

  productos: Producto[] = [];

  ngOnInit(): void {
    this.listProductos();
  }

  listProductos() {
    this.productoService.list()
      .subscribe(productos => {
        this.productos = productos;
      });
  }
}


