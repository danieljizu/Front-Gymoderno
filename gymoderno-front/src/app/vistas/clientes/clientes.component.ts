import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { apiService } from '../../servicios/api/api.service';
import { Cliente } from 'src/app/modelo/listaclientes.interface';
import { SharedService } from 'src/app/servicios/shared.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  cliente: Cliente[] = [];
  clientesid: Cliente[] = [];

  constructor(
    private Users: apiService,
    private router: Router,
    private sharedcustom: SharedService
  ) {}

  ngOnInit() {
    this.presentarClientes();
  }

  /**
   * Cargar lista de clientes existentes al acceder a la vista /clientes.
   */

  presentarClientes() {
    this.Users.getClientes().subscribe((response) => {
      this.cliente = response.clientesResponse.clientes;
    });
  }

  /**
   * Metodo para buscar cliente por Id
   */
  listar(pasoClientes: any) {
    this.cliente = pasoClientes;
    this.sharedcustom.setCliente(this.cliente);
  }

  /**
   * Metodo para eliminar cliente
   */

  eliminar(id: number) {
    this.Users.deleteClientes(id).subscribe((data) => {});
    window.location.reload();
  }
}
