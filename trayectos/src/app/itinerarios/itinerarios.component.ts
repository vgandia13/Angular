import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrayectoServiceService } from '../Trayecto/trayecto-service.service';
import { Trayecto } from '../Trayecto/Trayecto';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itinerarios',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './itinerarios.component.html',
  styleUrl: './itinerarios.component.css',
})
export class ItinerariosComponent implements OnInit {
  @Output() enviarNumTrayectos = new EventEmitter<number>();

  @Input() textoBoton: string = '?';

  filtroSalida: string = '';
  trayectos: Trayecto[] = [];

  constructor(private trayectoservice: TrayectoServiceService) {}

  ngOnInit(): void {
    this.trayectoservice.obtenerTrayectos().subscribe({
      next: (itinerario) => {
        this.trayectos = itinerario;
        this.contarYEmitirNumTrayectos();
      },
      error: (err) => console.error(err),
    });
  }

  borrar(id: number): void {
    this.trayectoservice.borrarTrayecto(id).subscribe({
      next: () => {
        this.trayectoservice
          .obtenerTrayectos()
          .subscribe((itinerario) => (this.trayectos = itinerario));
      },
      error: (err) => console.error(err),
    });
  }

  contarYEmitirNumTrayectos() {
    const total: number = this.trayectos.length;
    this.enviarNumTrayectos.emit(total);
  }

  get trayectosFiltrados() {
    if (!this.filtroSalida) return this.trayectos;
    return this.trayectos.filter((app) =>
      app.salida.toLowerCase().includes(this.filtroSalida),
    );
  }
}
