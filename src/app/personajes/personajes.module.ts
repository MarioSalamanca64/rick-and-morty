import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonajesRoutingModule } from './personajes-routing.module';

import { MaterialModule } from '../material/material.module';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [ BuscarComponent,
    PersonajeComponent,
    HomeComponent,
    ListadoComponent,
    
    
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PersonajesModule { }
