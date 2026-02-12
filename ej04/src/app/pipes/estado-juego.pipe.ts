import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoJuego',
  standalone: true,
})
export class EstadoJuegoPipe implements PipeTransform {
  transform(completado: boolean): string {
    return completado ? 'Completado' : 'Pendiente de jugar';
  }
}
