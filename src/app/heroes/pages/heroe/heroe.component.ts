import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px;
  }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  //activar las rutas para poderlas llamar 
  constructor(private activateRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) { }
  //paramas parametros del objeto
  ngOnInit(): void {
    this.activateRoute.params
    // pipe es para mostrar ver la informacion del heroe y se ponga cargar priemro y despues la info
    .pipe(
      switchMap(({ id }) => this.heroesService.getHeroePorId(id) )
    )
    .subscribe(heroe => this.heroe = heroe);
    //id del heroe 
    // y mostrarlo en consola
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
