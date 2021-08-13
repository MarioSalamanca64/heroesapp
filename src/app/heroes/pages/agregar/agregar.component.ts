import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../component/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px:
    }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publushers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe:Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(private heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              /*para ir otra pagina despues de editar o guardar*/
              private router:Router,
              /*agrgar mensaje de confirmacion al dar click*/
              private snacBar:MatSnackBar,
              // agrega un mensage para confirmar la eliminacion del archivo
              public dialog:MatDialog  ) { }

  ngOnInit(): void {

    // error 404 si no lo incluye si estamos en ediatar se mostrata lo de abajo
    if(!this.router.url.includes('editar')){
      return;
    }

    //si estamos en la pantalla de editar q mueste esto 
    /*editar nesesitamos el id -- crear undefined --editar id*/
    this.activatedRoute.params
   .pipe(
     switchMap( ({id}) => this.heroesService.getHeroePorId(id))
   )/*aqui dice que si heroe objeto de este componente es igual al id que resibe de labase de datos y mostrata los datos del heroe en el form*/
    .subscribe( heroe  => this.heroe = heroe);

   }
  

  guardar(){
    // validacion sencilla
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if( this.heroe.id ){
      //actualizar editar
      this.heroesService.actualizarHeroe( this.heroe )
      //aldarle click mustra un mensage snackbar
      .subscribe(heroe => this.mostrarSnackbar('Registro Actualizado'))
    }else{
      /*aqui llamos la respuesta del backend para poder gurdarlo en la db */
      //crear aqui redijiremos a otra pagina
    this.heroesService.agregarHeroe(this.heroe)
    .subscribe(heroe =>{
      this.router.navigate(['/heroes/editar', heroe.id]);
      //aldarle click mustra un mensage snackbar
      this.mostrarSnackbar('Registro Creado');
    })

    }
 
  }
  //borra el elemento y regresa ala pagina de inicio
  borrarHeroe(){
    // este es le mesaje si quieres eliminar para eso hay que crear un componente 
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      // puedes mandar cualquiercosa con el dara
      // se manda con los puntos ya que sabemos que nada se modificara poniendolo asi 
      //mandado la informacion del padre al hijo
      data: {...this.heroe}
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if(result){
                this.heroesService.borrarHeroe( this.heroe.id! )
                .subscribe(resp => {
                  this.router.navigate(['/heroes'])
                })
        }
      }
    )
  }
  //mostrar mesage al darle click
  mostrarSnackbar( mensaje:string){
    //despues de mesnaje es la configuracion-- mensaje lo que dira 
    this.snacBar.open(mensaje, 'Cerrar',{
      duration:2500
    });
  }
}
