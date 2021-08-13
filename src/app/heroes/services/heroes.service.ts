import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


// servicios siempre se usara para que se cominique esta parte con el backend

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  /*viene de las url de environments*/
  private baseUrl: string = environment.baseUrl;


  constructor( private http: HttpClient ) { }
  
  //creacion del obserbable
  getHeroes():Observable<Heroe[]>{
    //[] es decirle que tiene una conleccion data
    return this.http.get<Heroe[]>( `${this.baseUrl}/heroes` );
  }
  /*se usa en la carpeta heroes hace que solo se vea un heroe y lo pida por el id"condition as value; else elseBlock"*/ 
  getHeroePorId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>( `${this.baseUrl}/heroes/${id}`);
  }

  /*end point que es del buscador -- url completa http://localhost:3000/heroes?q=a&_limit-6  -- limitar la busqueda a 6 elementos*/
  getSugerencias(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>( `${this.baseUrl}/heroes?q=${termino}&_limit=6` );
  } 
  // petision post para guardar los datos en la bases de datos -- get para pedir informacion
  // ,heroe es donde cae --x-www-form-- que es un formanto de posman  
  agregarHeroe( heroe:Heroe ):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe );
  }
  //editar los archivos siempre ira con el metodo put o actualizar
  actualizarHeroe( heroe:Heroe ):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe );
  }
  //para borrar targetas se quieta el heroe al final por que no se ne sesita el body lo que trae
  borrarHeroe( id:string ):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }


}
