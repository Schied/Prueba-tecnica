import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  AUTH_SERVER: string = 'http://localhost:8080/apiM';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient : HttpClient ) { }

  getMedicamentos(): Observable<any> {
    return this.httpClient.get(`${this.AUTH_SERVER}/ConsultarMedicamentos`)
  }

  save(medicamento: any): Observable<any>{
    return this.httpClient.post(`${this.AUTH_SERVER}/CrearMedicamento`, medicamento);
  }

  update(medicamento: any): Observable<any>{
    return this.httpClient.put(`${this.AUTH_SERVER}/ModificarMedicamento`, medicamento);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.AUTH_SERVER}/EliminarMedicamento/${id}`);
  }
}
