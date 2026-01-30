import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../empleado';

@Pipe({
  name: 'filterEmpleados'
})
export class FilterEmpleadosPipe implements PipeTransform {

  transform(empleados: Empleado[] | null | undefined, term: string | null | undefined): Empleado[] {
    if(!empleados) return [];

    if(!term) return empleados;

    const t = term.toString().toLowerCase();
    return empleados.filter(e =>
    (e.nombre || '').toLowerCase().includes(t)
    );
  }
}
