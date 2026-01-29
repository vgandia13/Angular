import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ServicesService, Appmovil } from '../services.service';

@Component({
  selector: 'app-detalles',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
  @Input() desarrollador: string = '';

  @Output() enviarTotalDescargas = new EventEmitter<number>();

  aplicaciones: Appmovil[] = [];
  filtroDescargas: number | null = null;

  constructor(private servicio: ServicesService) { }

  ngOnInit(): void {
    this.servicio.getApps().subscribe({
      next: (datos: Appmovil[]) => {
      this.aplicaciones = datos;
      this.calcularYEmitirTotal();
      },
      error: (e) => console.error(e)
    });
  }

  calcularYEmitirTotal() {
    const total = this.aplicaciones.reduce((acc, app) => acc + app.descargas, 0);
    this.enviarTotalDescargas.emit(total);
  }

  get aplicacionesFiltradas() {
    if (!this.filtroDescargas) return this.aplicaciones;
    return this.aplicaciones.filter(app => app.descargas >= this.filtroDescargas!);
  }

}
