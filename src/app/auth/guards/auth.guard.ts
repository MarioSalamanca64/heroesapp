import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
//generar los guard que son restriciones de una url 
//ng g guard auth/huards/auth (ruta en este caso)



export class AuthGuard implements CanLoad,CanActivate {

  //inyecion de el servison de auth para saber si si tiene el objeto pasa si no no 
  constructor(private authService:AuthService,
              private router:Router){}

  //canActivate sirve para restringir si no existe el objeto o el usuario
   canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
       
      return this.authService.verificaAutentificacion()
              .pipe(
                tap(estaAutenticado => {
                  if( !estaAutenticado){
                    this.router.navigate(['./auth/login']);
                  }
                })
              )

      //Demostracion
      // if( this.authService.auth.id) {
      //   return true
      // }
      // console.log('bloqueado por el - Canactivate')
      // return false;

   }

  //canLoad es solo para no cargar la pagina no para restringirla
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean > | boolean  {

      return this.authService.verificaAutentificacion()
              .pipe(
                tap(estaAutenticado => {
                  if( !estaAutenticado){
                    this.router.navigate(['./auth/login']);
                  }
                })
              );


      // Demostracion
    // if( this.authService.auth.id) {
    //   return true
    // }

    // //pruebas para saber si paso o no 
    // // console.log('canLoad',false);
    // // console.log(route);
    // // console.log(segments);
    // console.log('bloqueado por el Authgard - canLoad')
    // return false;

  }
}
