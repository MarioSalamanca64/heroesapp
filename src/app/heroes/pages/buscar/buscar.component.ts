import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string = ''; 
  heroes:Heroe[] = [];
  //hay q hacer la peticion http para el buscador
  heroeSeleccionado: Heroe| undefined;

  constructor( private heroesServices:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesServices.getSugerencias( this.termino.trim() )
    .subscribe(heroes => this.heroes = heroes)
  }
  
  // encontrar el objeto en MatAutocompleteModule es option/value
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
    //error inicio si no se encuentra en la base de datos hace que al dar click al erro se reinice 
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    //error final
    const heroe:Heroe = event.option.value;
    this.termino = heroe.superhero;
    console.log(heroe);

    //heroe id se pone ese signo ya que no se sabe que le llegara 
    this.heroesServices.getHeroePorId(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe)
  }

}
