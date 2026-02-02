import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trayecto } from './Trayecto';

@Injectable({
  providedIn: 'root'
})

export class TrayectoServiceService {

  private apiUrl = 'http://localhost:8080/api/trayectos.php';

  constructor(private http: HttpClient) { }

  obtenerTrayectos(): Observable<Trayecto[]>{
    return this.http.get<Trayecto[]>(this.apiUrl);
  }

  obtenerTrayecto(id: number): Observable<Trayecto> {
    return this.http.get<Trayecto>(`${this.apiUrl}/${id}`);
  }

  borrarTrayecto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  insertarTrayecto(trayecto: Trayecto): Observable<Trayecto> {
    return this.http.post<Trayecto>(this.apiUrl, trayecto);
  }
}
