import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Personajes, Result } from '../interface/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private baseUrl: string = environment.baseUrlAPI;

  constructor( private http:HttpClient ) { }

  getPersonajes(){
   return this.http.get<Personajes>( environment.baseUrlAPI ) 
  }

  getPersonajePorId(id:string){
    return this.http.get<Personajes>(`${this.baseUrl}/${id}`)
  }

  getPersonajeSugerencias(termino:string):Observable<Result[]>{

    return this.http.get<Result[]>(`${this.baseUrl}/?name=${termino}`)

  }

}
