import { Component } from '@angular/core';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-resumen',
  imports: [DetallesComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  desarrollador = 'Juan';
  totalDescargas = 0;

  actualizarTotal(total: number) {
    this.totalDescargas = total;
  }
}
