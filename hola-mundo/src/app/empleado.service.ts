import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:8080/api/empleados.php';

  constructor(private http: HttpClient) { }

  private empleados: Empleado[] = [
    new Empleado(1, 'Pérez', 25, true),
      new Empleado(2, 'Gómez', 30),
      new Empleado(3, 'Rodríguez', 35, true)
  ];

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  } 
  obtenerEmpleado(id: number): Observable<Empleado> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get<Empleado>(url);
  }

  insertarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  } 

  borrarEmpleado(id: number): Observable<void> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.delete<void>(url);
  }

  modificarEmpleado(id: number, empleado: Empleado): Observable<Empleado> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.put<Empleado>(url, empleado);
  }
}