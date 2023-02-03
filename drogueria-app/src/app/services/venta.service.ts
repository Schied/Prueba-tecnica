import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  AUTH_SERVER: string = 'http://localhost:8080/apiV';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient : HttpClient) { }

  getVentas(): Observable<any> {
    return this.httpClient.get(`${this.AUTH_SERVER}/ConsultarVentas`)
  }

  save(venta: any): Observable<any>{
    return this.httpClient.post(`${this.AUTH_SERVER}/CrearVenta`, venta);
  }
}
