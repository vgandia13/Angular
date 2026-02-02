import { Component } from '@angular/core';
import { Trayecto } from '../Trayecto/Trayecto';
import { TrayectoServiceService } from '../Trayecto/trayecto-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  imports: [FormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css',
})
export class NuevoComponent {
  nuevoTrayecto: Trayecto = new Trayecto(0, '', '', 0, false);

  constructor(
    private trayectoservice: TrayectoServiceService,
    private router: Router,
  ) {}
  insertarNuevoEmpleado(): void {
    this.trayectoservice.insertarTrayecto(this.nuevoTrayecto).subscribe({
      next: (trayecto) => {
        console.log('Trayecto insertado:', trayecto);
        this.router.navigate(['/datos']);
      },
      error: (err) => console.error(err),
    });
  }
}
