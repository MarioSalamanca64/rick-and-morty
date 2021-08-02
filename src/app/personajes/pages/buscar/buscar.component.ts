import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {  Personajes, Result } from '../../interface/personajes.interface';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino:string = '';
  personajes: Result[] = [];
  personajeSelecionado: any = [];

  constructor(private personajeServices:PersonajesService) { }

  ngOnInit(): void {
  }
  //toma las sugerencias del servicio 
  buscando(){
    this.personajeServices.getPersonajeSugerencias(this.termino)
    .subscribe((personaje) => this.personajes = personaje.results)
  }
  //el evento de autocompletar y selecione el nombre bucado
  opcionSelecionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.personajeSelecionado = undefined;
      
      return;
    }

    //los elementos para insertar 
    const personaje:any = event.option.value; 
    this.termino = personaje.name;

    //toma le id del persoanje para seleccionarlo
    this.personajeServices.getPersonajePorId( personaje.id!)
    .subscribe((personaje:Personajes) => this.personajeSelecionado = personaje)

    
  }

}
