import { Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  {path: '', redirectTo: 'datos', pathMatch: 'full'},
  {path: 'datos', component: DatosComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: '**', redirectTo: '/datos'}
];
