import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    { path: "editar/:id", component: EditarComponent},
    {path: '**', component: Pagina404Component}
];
