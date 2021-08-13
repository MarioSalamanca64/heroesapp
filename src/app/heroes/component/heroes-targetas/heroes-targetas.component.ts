import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-targetas',
  templateUrl: './heroes-targetas.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
`]
})
export class HeroesTargetasComponent{
  //sepone signo de admiracion para que angular confie en que siempre le llegara un heroe
  @Input()heroe!:Heroe;

}
