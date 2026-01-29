import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appmovil{
  id: number;
  nombre: string;
  descargas: number;
  gratuita: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiURL = 'http://localhost:8080/api/apps_movil.php';

  constructor(private http: HttpClient) { }

  getApps(): Observable<Appmovil[]> {
    return this.http.get<Appmovil[]>(this.apiURL);
  }

  borrarApp(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}?id=${id}`);
  }

  getApp(id: number): Observable<Appmovil> {
    return this.http.get<Appmovil>(`${this.apiURL}/${id}`);
  }
}
