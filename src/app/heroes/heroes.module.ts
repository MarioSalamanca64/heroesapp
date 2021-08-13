import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesTargetasComponent } from './component/heroes-targetas/heroes-targetas.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './component/confirmar/confirmar.component';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroesTargetasComponent,
    ImagenPipe,
    ConfirmarComponent,
   
    
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule
  ]
})
export class HeroesModule { }
