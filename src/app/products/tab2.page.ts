import { Component, OnInit } from '@angular/core';
import { Producto } from '../services/tienda/Producto';
import { ProductoService } from '../services/tienda/producto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.productos$.subscribe((productos) => {
      this.productos = productos;
    });
    this.productoService.refreshProductos();
  }
}
