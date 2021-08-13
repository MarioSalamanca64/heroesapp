import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes:Routes = [

  {
    path:'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    //este guards para cargar si existe usuario o no 
    canLoad: [ AuthGuard ],
    canActivate:[ AuthGuard ]
  },

  {
    path:'auth',
    /*aqui solo le dices que solo carga un modulo -then- cuando se resulebe y tanbien es una promesa*/
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    //component:ErrorPageComponent
    redirectTo:'404'
  }

]



@NgModule({
 
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]

})

export class AppRoutingModule { }
