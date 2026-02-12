import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Juego } from '../models/juego.model';
import { EstadoJuegoPipe } from '../pipes/estado-juego.pipe';

@Component({
  selector: 'app-detalle-juego',
  standalone: true,
  imports: [CommonModule, EstadoJuegoPipe],
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css'],
})
export class DetalleJuegoComponent {
  @Output() onBorrar = new EventEmitter<number>();
  @Input() juego: Juego | null = null;

  solicitarBorrado() {
    if (this.juego?.id && confirm('¿Seguro que quieres borrar este juego?')) {
      this.onBorrar.emit(this.juego.id);
    }
  }
}
