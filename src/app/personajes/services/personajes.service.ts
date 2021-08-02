import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
import { Personajes,} from '../interface/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private baseUrl: string = environment.baseUrlAPI;

  constructor( private http:HttpClient ) { }
  //regresa los persojes de la pagina principal 
  getPersonajes(){
   return this.http.get<Personajes>( this.baseUrl )
  }




  //regresa los personajes por id con el boton leer mas 
  getPersonajePorId(id:string){
    return this.http.get<Personajes>(`${this.baseUrl}/${id}`)
  }

  

  //regresa la peticion para el buscador 
  getPersonajeSugerencias(termino:string){
    return this.http.get<Personajes>(`${this.baseUrl}/?name=${termino}`)
  }

}
