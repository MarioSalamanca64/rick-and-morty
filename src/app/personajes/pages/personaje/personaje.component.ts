import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { PersonajesService } from '../../services/personajes.service';
import { Personajes, Result } from '../../interface/personajes.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje!: any ;

  constructor(private activatedRouter:ActivatedRoute,
              private personajesServices:PersonajesService) { }

  ngOnInit(): void {
    //regresa persoanjes por id de el personaje 
    this.activatedRouter.params
    .pipe(
      switchMap( ({id}) => this.personajesServices.getPersonajePorId(id)) )
      .subscribe((personaje: Personajes) => this.personaje = personaje)
  }

}


