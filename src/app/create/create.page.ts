import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/auth/login.service';
import { ProductoService } from '../services/tienda/Producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  productoForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.productoForm = this.formBuilder.group({
      nombreProducto: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: [null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      this.productoForm.patchValue({
        imagen: this.selectedFile
      });
    }
  }

  registrarProducto() {
    if (this.productoForm.valid && this.selectedFile) {
        const formData = new FormData();
        formData.append('nombreProducto', this.productoForm.get('nombreProducto')?.value || '');
        formData.append('descripcion', this.productoForm.get('descripcion')?.value || '');
        formData.append('precio', this.productoForm.get('precio')?.value || '');
        formData.append('img', this.selectedFile);
        
        const currentUser = this.loginService.currentUserValue;
        if (currentUser && currentUser.idTienda) {
            formData.append('tiendaId', currentUser.idTienda.toString());
        }
  
        this.productoService.createProducto(formData).subscribe(
            response => {
                console.log('Producto registrado', response);
                this.router.navigate(['/tabs/tab2']);
            },
            error => {
                console.error('Error al registrar producto', error);
            }
        );
    }
  }
}