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

  public page:number = 0;

  ngOnInit(): void {
    //lapeticion para regresar los elementos de la api
    this.personajesServices.getPersonajes()
    .subscribe((personajes:Personajes) =>  { this.personajes = personajes.results } 
    );
    //ver los elemetos en consola 
    this.activatedRouter.params.subscribe(({id})=> {
      console.log(id);
    })
  }
  //la directiva para la paginaciion y no sige al boton seguiente en el ultimo elemento 
  siguientePagina(){
    if(this.page <= 15)
    this.page += 6;
  }
  //la directiva para no dar mas atras si no existe 
  paguinaAnterior(){
    if(this.page > 0)
      this.page -= 6;
  
  }

}
