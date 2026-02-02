import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrayectoServiceService } from '../Trayecto/trayecto-service.service';
import { Trayecto } from '../Trayecto/Trayecto';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  trayecto: Trayecto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicio: TrayectoServiceService
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.obtenerTrayecto(id).subscribe({
      next: (datos) => {
        this.trayecto = datos;
      },
      error: (e) => console.error('Error al cargar el trayecto: ', e),
    });
  }
}
