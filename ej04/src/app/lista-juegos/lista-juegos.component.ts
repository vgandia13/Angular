import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../models/juego.model';

@Component({
  selector: 'app-lista-juegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css'],
})
export class ListaJuegosComponent {
  @Input() juegos: Juego[] = [];
  @Output() onSeleccion = new EventEmitter<Juego>();

  seleccionar(juego: Juego) {
    this.onSeleccion.emit(juego);
  }
}
