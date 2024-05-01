import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  myData: any; 

  products = [
    {
      name: 'Galleta Soda',
      description: 'Galleta de soda hecho con productos premium',
      image: 'https://placehold.co/300x200',
      price: 'S/1.5'
    },
    {
      name: 'Galleta Soda',
      description: 'Galleta de soda hecho con productos premium',
      image: 'https://placehold.co/300x200',
      price: 'S/1.5'
    }
  ];

  constructor() { }

  ngOnInit(): void {this.myData = 'Datos inicializados';
  }

  updateProduct(product: any) {
    console.log('Actualizar producto:', product);
  }

  deleteProduct(product: any) {
    console.log('Borrar producto:', product);
  }

  addProduct() {
    console.log('Agregar producto');
  }
}


