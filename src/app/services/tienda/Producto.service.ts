import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = `${environment.urlHost}api/producto`;
  
  private productosSubject = new BehaviorSubject<Producto[]>([]);
  productos$ = this.productosSubject.asObservable();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Producto[]>(`${this.apiUrl}/list`,  { withCredentials: true });
  }

  createProducto(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, formData, { observe: 'response' });
  }

  refreshProductos() {
    this.list().subscribe(
      (productos) => {
        this.productosSubject.next(productos);
      },
      (error) => {
        console.error('Error al listar productos', error);
      }
    );
  }
}
