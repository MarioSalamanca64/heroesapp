import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  //para actualizar la imagen cuando se carge pero eso consume mas recurso por el motivo q es un objeto 
  //pure: false
})
export class ImagenPipe implements PipeTransform {


  //heroes es cuando mandamos todo el objeto puede aparecer con el console.log
  transform(heroe: Heroe): string {
    // si no existe el heroes.id que muestre la imagen 
    //si existe contenido en alt_img 
    if( !heroe.id && !heroe.alt_img ){
      return 'assets/no-image.png';
    }else if( heroe.alt_img) {
      return heroe.alt_img
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
  //assets/heroes/dc-batman.jpg

}
