import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicesService, Appmovil } from '../services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-borrado',
  imports: [CommonModule, RouterLink],
  templateUrl: './borrado.component.html',
  styleUrl: './borrado.component.css'
})
export class BorradoComponent implements OnInit {
  
  app: Appmovil | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicio: ServicesService
  ) { }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getApp(id).subscribe({
      next: (datos) => {
        this.app = datos;
      },
      error: (e) => console.error("Error al cargar la app: ", e)
    });
  }

  borrarAplicacion(){
    if (this.app) {
      this.servicio.borrarApp(this.app.id).subscribe({
        next: () => {
          alert('Aplicación borrada correctamente');
          this.router.navigate(['/resumen']);
        },
        error: (e) => console.error("Error al borrar la app: ", e)
      });
    }
  }
}
