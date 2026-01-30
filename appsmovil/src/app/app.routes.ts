import { Routes } from '@angular/router';
import { BorradoComponent } from './borrado/borrado.component';
// Tienes que importar los otros componentes para poder usarlos
import { ResumenComponent } from './resumen/resumen.component';
import { AcercadeComponent } from './acercade/acercade.component';

export const routes: Routes = [
    // 1. Ruta vacía: Redirige al resumen (que es la pantalla principal)
    { path: '', redirectTo: '/resumen', pathMatch: 'full' },

    // 2. Rutas normales: Carga el componente, NO redirijas
    { path: 'resumen', component: ResumenComponent },
    
    // El PDF pide que cargue el componente "acerca" 
    { path: 'acercade', component: AcercadeComponent }, 

    // 3. Ruta dinámica: Esta la tenías perfecta
    { path: 'borrado/:id', component: BorradoComponent },

    // 4. Ruta error: Si escriben algo raro, volver al resumen
    { path: '**', redirectTo: '/resumen' }
];
