import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personajes } from '../../interface/personajes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private personajesServices: PersonajesService,
              private activatedRouter: ActivatedRoute) { }

  personajes: any = []; 

  ngOnInit(): void {

    this.personajesServices.getPersonajes()
    .subscribe((personajes:Personajes) =>  { this.personajes = personajes.results }
    //  console.log(personajes.results[0].name); 
    );

    this.activatedRouter.params.subscribe(({id})=> {
      console.log(id);
    })

  }

}
