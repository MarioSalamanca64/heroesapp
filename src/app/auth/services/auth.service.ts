import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //lo tomamos del environment
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  //hacemos un geter para muestrar la informacion del usuario --destructurar para que no sse cabien de alguna manera
  //get esta estructurado por el root y se peude usar en todos lados solo falta inyectar
  get auth():Auth{
    return {...this._auth!}
  }


  constructor(private http:HttpClient, ) { }

  verificaAutentificacion(): Observable<boolean> {
    //si existe el token
    //of espara trasformar el boolean en  un obserbable
    if( !localStorage.getItem('token') ){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            //operador map trasformar de como biene del ultimo operador y retornar un nuevo valor
            .pipe(
              map( auth => {
                //para que muestre el nombre siempre que recargemos
                this._auth = auth;
                return true;
              })
            );

    
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
          //no puede pasar por el subcribe ya que lo eliminara por eso se usa el pipe
          .pipe(
            //tap genera efectos secundarios
            tap(auth => this._auth = auth),
            //guardar en el localStorage para el ususario que entra en este caso es por id del ususario 
            tap(auth => localStorage.setItem('token', auth.id)),
          );
  }
}
