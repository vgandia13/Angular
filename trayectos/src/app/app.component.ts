import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
=======
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
>>>>>>> 9010283fb37cb42c8bda013e44af50a1735f6e3b
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trayectos';
}
