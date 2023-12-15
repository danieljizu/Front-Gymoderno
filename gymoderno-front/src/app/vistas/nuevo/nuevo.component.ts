import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
})
export class NuevoComponent implements OnInit {

  public cliente: FormGroup;

  constructor(private fb: FormBuilder, private _cliente: apiService) {
    this.cliente = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      celular: [''],
      email: [''],
    });
  }

  ngOnInit(): void {}

  guardar() {
    let data = {
      id: this.cliente.get('id')?.value,
      nombre: this.cliente.get('nombre')?.value,
      apellidos: this.cliente.get('apellidos')?.value,
      identificacion: this.cliente.get('identificacion')?.value,
      peso: this.cliente.get('peso')?.value,
      altura: this.cliente.get('altura')?.value,
      celular: this.cliente.get('celular')?.value,
      email: this.cliente.get('email')?.value,
    };

    this._cliente.saveClientes(data).subscribe((data) => {});
  }

}
