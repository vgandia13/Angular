import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
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
>>>>>>> 9010283fb37cb42c8bda013e44af50a1735f6e3b
