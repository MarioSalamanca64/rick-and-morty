import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {path: 'listado', component:ListadoComponent},
      {path: 'buscar', component:BuscarComponent},
      {path: ':id', component:PersonajeComponent},
      {path: '**', component:ListadoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
