import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoService } from '../juegos.service';
import { Juego } from '../models/juego.model';
import { ListaJuegosComponent } from '../lista-juegos/lista-juegos.component';
import { DetalleJuegoComponent } from '../detalle-juego/detalle-juego.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ListaJuegosComponent, DetalleJuegoComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lista: Juego[] = [];
  juegoSeleccionado: Juego | null = null;

  constructor(private juegoService: JuegoService) {}

  ngOnInit() {
    this.juegoService.getJuegos().subscribe({
      next: (data) => (this.lista = data),
      error: (err) => console.error('Error al conectar con Docker:', err),
    });
  }

  gestionarSeleccion(juego: Juego) {
    this.juegoSeleccionado = juego;
  }

  borrarJuego(id: number) {
    this.juegoService.deleteJuego(id).subscribe({
      next: () => {
        // Al borrar con éxito, refrescamos la lista y limpiamos el detalle
        this.juegoService.getJuegos().subscribe((data) => (this.lista = data));
        this.juegoSeleccionado = null;
      },
      error: (err) => console.error('Error al borrar:', err),
    });
  }
}
