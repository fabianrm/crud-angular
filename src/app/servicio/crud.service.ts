import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://localhost/empleados/';

  constructor(private ClienteHttp: HttpClient) {}

  AgregarEmpleado(datosEmpleado:Empleado): Observable<any> {
    return this.ClienteHttp.post(this.API + '?insertar=1', datosEmpleado);
  }

  ObtenerEmpleados(){
    return this.ClienteHttp.get(this.API);
  }

  BorrarEmpleado(id:any): Observable<any> {
    return this.ClienteHttp.get(this.API + '?borrar='+id);
  }

  ObtenerEmpleado(id:any): Observable<any> {
    return this.ClienteHttp.get(this.API + '?consultar='+id);
  }

  EditarEmpleado(id:any, datosEmpleado:Empleado): Observable<any> {
    return this.ClienteHttp.post(this.API + '?actualizar='+id, datosEmpleado);
  }



}
