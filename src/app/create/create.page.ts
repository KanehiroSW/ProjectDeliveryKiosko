import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit  {
  myData: any;
  fotoTomada: string | undefined;
  
  constructor() { }

  ngOnInit() {
    this.myData = 'Datos inicializados';
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }

  async seleccionarDesdeGaleria() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });

    this.fotoTomada = 'data:image/jpeg;base64,' + image.base64String;
  }
}
