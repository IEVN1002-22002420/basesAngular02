// heroes-filter.pip.ts
// Pipe para filtrar la lista de héroes por nombre.
// Se usa en la plantilla así: heroes | heroesFilter:listFilter

import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from './heroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false
})
export class HeroesFilterPipe implements PipeTransform {

  // transform recibe:
  // - value: arreglo de Heroes (los datos a filtrar)
  // - args: la cadena de filtro (lo que el usuario escribió)
  //
  // Devuelve un nuevo arreglo con los héroes cuyo nombre contiene la subcadena buscada.
  transform(value: Heroes[], args: string): Heroes[] {
    // normaliza el texto del filtro a minúsculas para hacer una búsqueda case-insensitive
    let filter:string=args?args.toLocaleLowerCase():"";

    // Si hay filtro: filtra; si no, devuelve el arreglo original.
    // Se utiliza indexOf(...) !== -1 para comprobar si la subcadena existe.
    return filter?value.filter((hero:Heroes)=> hero.nombre.toLocaleLowerCase().indexOf(filter)!==-1):value;
  }

}
