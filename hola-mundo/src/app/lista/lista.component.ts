import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterEmpleadosPipe } from '../empleado/filter-empleados.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink, FormsModule, FilterEmpleadosPipe],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  empleados: Empleado[] = [];
  busqueda: string = '';

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.obtenerEmpleados(
    ).subscribe({
      next: lista => this.empleados = lista,
      error: err => console.error(err)
    }
    );
  }

  borrar(id: number): void {
    this.empleadoService.borrarEmpleado(id).subscribe({
      next: () => {
        this.empleadoService.obtenerEmpleados().subscribe(lista => this.empleados = lista);
      },
      error: err => console.error(err)
    });
  }
}
  
