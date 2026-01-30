import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  empleado: Empleado = { id: 1, nombre: '', edad: 0, contratado: false}

  constructor(private route: ActivatedRoute, private http: HttpClient, 
    private router: Router, private empleadoService: EmpleadoService) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.empleadoService.obtenerEmpleado(id)
      .subscribe({
        next: empleadoObtenido => {
          this.empleado = empleadoObtenido;
          console.log(empleadoObtenido);
        },
        error: err => console.error(err)
      });
    }
  }

  guardar(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.empleadoService.modificarEmpleado(id, this.empleado)
    .subscribe({
      next: empleadoModificado => {
        console.log(empleadoModificado);
        this.router.navigate(['/inicio']);
      },
      error: err => console.error(err)
    });
  }

  cancelar(): void {
    this.router.navigate(['/inicio']);
  }
}