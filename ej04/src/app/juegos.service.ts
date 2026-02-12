import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from './models/juego.model';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  // URL de tu API en Docker
  private apiUrl = 'http://localhost:8080/api/juegos.php';

  constructor(private http: HttpClient) {}

  // GET: Obtener todos los juegos
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.apiUrl);
  }

  // GET: Obtener un solo juego por ID
  getJuego(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.apiUrl}/${id}`);
  }

  // POST: Añadir un nuevo juego
  addJuego(juego: Juego): Observable<Juego> {
    return this.http.post<Juego>(this.apiUrl, juego);
  }

  // PUT: Actualizar un juego existente
  updateJuego(id: number, juego: Juego): Observable<Juego> {
    return this.http.put<Juego>(`${this.apiUrl}/${id}`, juego);
  }

  // DELETE: Eliminar un juego
  deleteJuego(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
