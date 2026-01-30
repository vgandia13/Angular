import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  imports: [FormsModule],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {
  nuevoEmpleado: Empleado = new Empleado(0, '', 0, false);

  constructor(private empleadoService: EmpleadoService, 
              private router: Router) { }
  insertarNuevoEmpleado(): void {
    this.empleadoService.insertarEmpleado(this.nuevoEmpleado).subscribe({
      next: empleado => {
        console.log('Empleado insertado:', empleado);
        this.router.navigate(['/inicio']);
      },
      error: err => console.error(err)
    });
  }
}