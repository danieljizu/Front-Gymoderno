import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelo/listaclientes.interface';
import { apiService } from 'src/app/servicios/api/api.service';
import { SharedService } from 'src/app/servicios/shared.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  cliente: Cliente[] = [];
  public clientes: FormGroup;
  data: any;

  constructor(private fb: FormBuilder, private sharedcustom : SharedService, private _cliente : apiService){

    this.data = this.sharedcustom.getCliente();

     this.clientes = this.fb.group({
      id: [this.data.id],
      nombre: [this.data.nombre, Validators.required],
      apellidos: [this.data.apellidos, Validators.required],
      identificacion: [this.data.identificacion, Validators.required],
      peso: [this.data.peso, Validators.required],
      altura: [this.data.altura, Validators.required],
      celular: [this.data.celular],
      email: [this.data.email],
    });
  }
  ngOnInit(): void {
    
  }


  guardar(){
    let newData = {
      id: this.clientes.get('id')?.value,
      nombre: this.clientes.get('nombre')?.value,
      apellidos: this.clientes.get('apellidos')?.value,
      identificacion: this.clientes.get('identificacion')?.value,
      peso: this.clientes.get('peso')?.value,
      altura: this.clientes.get('altura')?.value,
      celular: this.clientes.get('celular')?.value,
      email: this.clientes.get('email')?.value,
    };

    this._cliente.saveClientes(newData).subscribe((newData) => {});
  }

}
