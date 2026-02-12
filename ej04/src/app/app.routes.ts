import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormJuegoComponent } from './form-juego/form-juego.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nuevo', component: FormJuegoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
