// heroes-list.component.ts
// Componente responsable de mostrar la lista de héroes.
// Contiene el estado local (filtros, control de imágenes) y la colección estática de héroes.

import { Component } from '@angular/core';
import { Heroes } from '../heroes';
import {race} from 'rxjs'; 

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  // Texto que escribe el usuario en el input para filtrar la lista.
  listFilter:string="";

  // Booleano que controla si se muestran o no las imágenes en la tabla.
  muestraImg:boolean=true;

  // Método que alterna (toggle) el valor de muestraImg.
  // Se enlaza al evento (click) del botón en la plantilla.
  showImage(){
    this.muestraImg=!this.muestraImg
  }

  // Array estático de héroes (usa la interfaz Heroes).
  // Cada objeto tiene: imagen (URL), nombre, descripcion, race y ki (número).
  heroes:Heroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      descripcion:"Kakaroto",
      race:"Saiyan",
      ki:2500
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      descripcion:"saiyan - male",
      race:"humano",
      ki:19.84
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Piccolo",
      descripcion:"verde",
      race:"Namekiano",
      ki:500
    },
    {
      imagen:"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      descripcion:"pelo verde",
      race:"Humano",
      ki:0
    }
  ]
}
