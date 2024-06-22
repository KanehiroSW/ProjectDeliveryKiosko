import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-deliman',
  templateUrl: './order-deliman.page.html',
  styleUrls: ['./order-deliman.page.scss'],
})
export class OrderDelimanPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController,
    private router:Router,
  ) { 

  }

  async cerrarSesion() {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          role: 'destructive',
          handler: () => {
            this.router.navigate(['/']);
          }
        },
        {
          text: 'No',
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
