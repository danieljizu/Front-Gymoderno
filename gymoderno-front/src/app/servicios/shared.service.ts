import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cliente: any;

  setCliente(cliente: any) {
    this.cliente = cliente;
  }

  getCliente() {
    return this.cliente;
  }
}