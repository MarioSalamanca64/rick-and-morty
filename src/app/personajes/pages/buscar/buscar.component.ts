import { Component, OnInit } from '@angular/core';
import {  Result } from '../../interface/personajes.interface';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino:string = '';
  personajes: Result[] = [];

  constructor(private personajeServices:PersonajesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.personajeServices.getPersonajes()
    .subscribe(personaje => this.personajes = personaje.results)
  }

}
