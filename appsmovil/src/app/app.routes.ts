import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/detalles', pathMatch: 'full' },
    {path: 'appsmovil', redirectTo: '/appsmovil', pathMatch: 'full' },
    {path: 'acercade', redirectTo: '/acercade', pathMatch: 'full' },
    {path: 'resumen', redirectTo: '/resumen', pathMatch: 'full' },
    {path: 'borrado/:id', redirectTo: '/borrado/:id', pathMatch: 'full' },
    {path: '**', redirectTo: '/detalles', pathMatch: 'full' }
];
