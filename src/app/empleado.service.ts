import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Url para el listado de empleados bd
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient : HttpClient) { }

  //obtiene los empleados mediante get
  listarTodosLosEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`)
  }

  //manda un objeto empleado por post registrandolo
  registrarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  //manda mediante un put los nuevos datos del empleado para actualizarlo
  actualizarEmpleado(idEmpleado:number, empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idEmpleado}`,empleado);
  }

  //obtiene el empleado mediante su id
  obtenerEmpleadoPorId(idEmpleado:number):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${idEmpleado}`);
  }

  //elimina al empleado mediante su id
  eliminarEmpleado(idEmpleado: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idEmpleado}`);
  }

}
