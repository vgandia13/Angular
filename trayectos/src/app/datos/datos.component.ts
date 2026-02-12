import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ItinerariosComponent } from "../itinerarios/itinerarios.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trayecto } from '../Trayecto/Trayecto';

@Component({
  selector: 'app-datos',
  imports: [ItinerariosComponent, CommonModule, FormsModule],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css',
})
export class DatosComponent implements OnInit {
  @Output() enviarTextoBoton = new EventEmitter<string>();

  numTrayectos: number = 0

  trayectos: Trayecto[] = []

  textoBoton: string = '?';

  ngOnInit(): void {
  }

  actualizarBoton(input: string) {
    this.textoBoton = input;
  }

  actualizarNum(num: number){
    this.numTrayectos = num;
  }
}
