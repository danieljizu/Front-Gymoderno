export interface ListarClientes {
    clientesResponse: ClientesResponse;
}

export interface ListarClientesID {
    clientesResponse: ClientesResponse;
}

export interface ClientesResponse {
    clientes: Cliente[];
}

export interface Cliente {
    id:             number;
    nombre:         string;
    apellidos:      string;
    email:          string;
    observacion:    string;
    celular:        number;
    identificacion: number;
    altura:         number;
    peso:           number;
}

/*
export interface clientesResponse{
    clientes: clientes[];
}

export interface clientes{
    id: string;
    nombre: string;
    apellidos: string;
    identificacion: string;
    celular:string;
    email: string;
    altura: string;
    peso: string;
    observacion: string;
}*/