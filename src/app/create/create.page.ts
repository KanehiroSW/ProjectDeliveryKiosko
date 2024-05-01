import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  nombreProducto: string = '';
  descripcionProducto: string = '';
  precioProducto: number=0;

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  addProduct() {
    // Implementa aquí la lógica para agregar el producto
  }
}
