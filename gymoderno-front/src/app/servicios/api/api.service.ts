import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import {
  ClientesResponse,
  Cliente,
  ListarClientes,
  ListarClientesID,
} from '../../modelo/listaclientes.interface';

@Injectable({
  providedIn: 'root',
})
export class apiService {
  url_clientes: string = "https://dnacodecreation.com:8443/gymoderno-0.0.1-SNAPSHOT";
  url_nuevo: string = "https://dnacodecreation.com:8443/gymoderno-0.0.1-SNAPSHOT";
  url_editar: string = "https://dnacodecreation.com:8443/gymoderno-0.0.1-SNAPSHOT";
  
  constructor(private http: HttpClient) {}
  /**
   * Servico para consulta de los clientes registrados
   */

  getClientes(): Observable<ListarClientes> {
    let url = `${this.url_clientes}/clientes`;
    return this.http.get<ListarClientes>(url);
  }
  /**
   * Servicio para crear nuevos clientes
   */

  saveClientes(body: any) {
    let url = `${this.url_nuevo}/nuevo`;
    return this.http.post(url, body);
  }
  /*
   * Servicio para Buscar Registros por Id
   */

  getClientesId(id : number): Observable<ListarClientesID> {
    let url = `${this.url_clientes}/editar/${id}`;
    return this.http.get<ListarClientesID>(url);
  }
  /**
   * Servicio para eliminar clientes
   */

  deleteClientes(id: number){
    let url = `${this.url_clientes}/clientes/${id}`;
    console.log (url);
    return this.http.delete(url);
  }

  /**
   * Servicio para actualziar clientes
   */
  updateClientes(body: any , id: any){
    let url = `${this.url_editar}/${id}`;
    return this.http.put(url, body)
  }
}
