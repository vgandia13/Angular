import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from '../juegos.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-juego',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-juego.component.html',
  styleUrls: ['./form-juego.component.css'],
})
export class FormJuegoComponent {
  juegoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private juegoService: JuegoService,
    private router: Router, // Inyectamos el router
  ) {
    this.juegoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', Validators.required],
      plataforma: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0)]],
      completado: [false],
    });
  }

  enviar() {
    if (this.juegoForm.valid) {
      // Llamada directa al servicio para guardar en la API de Docker
      this.juegoService.addJuego(this.juegoForm.value).subscribe({
        next: () => {
          // Una vez guardado con éxito, navegamos de vuelta al catálogo
          this.router.navigate(['/dashboard']);
        },
        error: (err) => alert('Error al guardar: ' + err.message),
      });
    }
  }
}
