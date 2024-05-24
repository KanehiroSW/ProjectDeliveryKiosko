import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private actionSheetController: ActionSheetController,
    private router:Router) {}
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

}
